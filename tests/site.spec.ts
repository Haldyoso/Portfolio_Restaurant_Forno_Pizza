import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const prefix =
  process.env.PAGES_TEST === "true"
    ? process.env.NEXT_PUBLIC_BASE_PATH || "/Portfolio_Restaurant_Forno_Pizza"
    : "";
const routeUrl = (route: string) => `${prefix}${route}`;
const pages = ["/", "/menu", "/nas-pribeh", "/kontakt"];

for (const route of pages) {
  test(`${route}: obsah, obrázky, dostupnosť a šírka`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(routeUrl(route));
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/FORNO/);
    await expect(page.locator("html")).toHaveAttribute("lang", "sk");
    // Scroll each image into view so lazy-loaded images are also verified.
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (el) =>
              (el as HTMLImageElement).complete &&
              (el as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
      await expect(image).not.toHaveAttribute("alt", "");
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("menu: kategórie, vegetariánsky filter a klávesnica", async ({ page }) => {
  await page.goto(routeUrl("/menu"));
  await expect(page.locator("#menu-items article")).toHaveCount(10);
  await page.getByLabel("Iba vegetariánske").check();
  await expect(page.locator("#menu-items article")).toHaveCount(6);
  await expect(
    page.getByRole("heading", { name: "Diavola", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Marinara", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Dezerty/ }).click();
  await expect(page.locator("#menu-items article")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "Tiramisù", exact: true }),
  ).toBeVisible();
  await expect(page.getByLabel("Iba vegetariánske")).toHaveCount(0);
  await page.getByRole("button", { name: /Nápoje/ }).press("Enter");
  await expect(page.locator("#menu-items article")).toHaveCount(6);
  await expect(
    page.getByRole("heading", { name: "Espresso", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Pizza/ }).click();
  await expect(page.getByLabel("Iba vegetariánske")).toBeChecked();
  await page.getByLabel("Iba vegetariánske").press("Space");
  await expect(page.locator("#menu-items article")).toHaveCount(10);
});

test("navigácia: všetky stránky a odkaz na konkrétnu pizzu", async ({
  page,
  isMobile,
}) => {
  await page.goto(routeUrl("/"));
  await page
    .getByRole("link", { name: "Pozrieť Burrata v menu", exact: true })
    .click();
  await expect(page).toHaveURL(/menu\/?#burrata$/);
  await expect(page.locator("#burrata")).toBeInViewport();
  if (isMobile) {
    await page.getByRole("button", { name: "Otvoriť navigáciu" }).click();
    await page
      .getByRole("navigation", { name: "Mobilná navigácia" })
      .getByRole("link", { name: /Náš príbeh/ })
      .click();
  } else {
    await page
      .getByRole("navigation", { name: "Hlavná navigácia" })
      .getByRole("link", { name: "Náš príbeh" })
      .click();
  }
  await expect(page).toHaveURL(/nas-pribeh\/?$/);
  await expect(page.locator("main h1")).toBeInViewport();
  await page
    .getByRole("navigation", {
      name: isMobile ? "Rýchle odkazy" : "Hlavná navigácia",
    })
    .getByRole("link", { name: "Kontakt", exact: true })
    .click();
  await expect(page).toHaveURL(/kontakt\/?$/);
  await expect(page.locator("main h1")).toBeInViewport();
  await expect(
    page.getByText("Ukážková prevádzka", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "FORNO — úvod" }).click();
  await expect(page).toHaveURL(/\/$/);
  await page.getByRole("link", { name: "Nájdi nás", exact: true }).click();
  await expect(page).toHaveURL(/kontakt\/?$/);
  await expect(page.locator("main h1")).toBeInViewport();
});

test("mobilná navigácia: fokus, Escape a zatvorenie po výbere", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobilné ovládanie");
  await page.goto(routeUrl("/"));
  const toggle = page.getByRole("button", { name: "Otvoriť navigáciu" });
  await toggle.click();
  const nav = page.getByRole("navigation", { name: "Mobilná navigácia" });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole("link").first()).toBeFocused();
  await nav.getByRole("link").first().press("Escape");
  await expect(nav).toHaveCount(0);
  await expect(toggle).toBeFocused();
  await toggle.click();
  await nav.getByRole("link", { name: /Menu/ }).click();
  await expect(page).toHaveURL(/menu\/?$/);
  await expect(nav).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("kontaktný e-mail: kopírovanie a jeho nedostupnosť", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto(routeUrl("/kontakt"));
  await page
    .getByRole("button", { name: "Skopírovať ukážkový e-mail" })
    .click();
  await expect(page.getByRole("status")).toHaveText(
    "Ukážkový e-mail skopírovaný.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "ciao@forno.example",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("Clipboard unavailable")),
    });
  });
  await page
    .getByRole("button", { name: "Skopírovať ukážkový e-mail" })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "Kopírovanie nie je dostupné",
  );
});

test("úzka obrazovka, reduced motion a 404", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of pages) {
    await page.goto(routeUrl(route));
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
    ).toBe("auto");
  }
  await page.goto(routeUrl("/stranka-ktora-neexistuje"));
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Asi sme",
  );
  await page.getByRole("link", { name: "Späť k menu" }).click();
  await expect(page).toHaveURL(/menu\/?$/);
});
