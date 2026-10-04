# FORNO — pizza napoletana

Responzívny slovenský web fiktívnej neapolskej pizzerie. Projekt do portfólia postavený na Next.js 16 (App Router), React, TypeScripte a Tailwind CSS 4.

## Spustenie

Node.js 22 alebo novší a npm. Overené s Node.js 24.

```sh
npm ci
npm run dev
```

Web: [localhost:3000](http://localhost:3000). Produkčná verzia: `npm run build`, potom `npm start`.

Pri nasadení na server s Next.js nastav `NEXT_PUBLIC_SITE_URL` na finálnu verejnú URL. V lokálnom prostredí sa používa `http://localhost:3000`.

## GitHub Pages

Pripravená adresa: [FORNO na GitHub Pages](https://haldyoso.github.io/Portfolio_Restaurant_Forno_Pizza/). Publikovanie vyžaduje aktivované Pages so zdrojom **GitHub Actions**. Na pláne GitHub Free musí byť repozitár verejný.

Workflow `.github/workflows/pages.yml` pri každom pushi do `main` zostaví statický web, skontroluje lint a TypeScript, spustí testy na desktope a mobile a nasadí výsledok. Možno ho spustiť aj manuálne cez Actions. Server ani platený hosting nie sú potrebné.

```sh
npm run build:pages
npm run preview:pages
```

Náhľad: [localhost:3100/Portfolio_Restaurant_Forno_Pizza/](http://localhost:3100/Portfolio_Restaurant_Forno_Pizza/). Export je v `out/`. Build predgeneruje responzívne WebP obrázky pomocou Sharp; tieto odvodené súbory sa necommitujú. Odkazy, obrázky a metadáta rešpektujú podadresár repozitára. Pri premenovaní repozitára nastav v build prostredí `NEXT_PUBLIC_BASE_PATH` a `NEXT_PUBLIC_SITE_URL` a zopakuj build.

## Obsah a úpravy

- `/` — úvod, výber pízz, remeslo, atmosféra a otváracie hodiny.
- `/menu` — 10 pízz, 3 dezerty, 6 nápojov, kategórie a vegetariánsky filter.
- `/nas-pribeh` — cesto, suroviny, pec a fiktívny tím.
- `/kontakt` — jasne označené ukážkové údaje, hodiny a kopírovanie ukážkového e-mailu.

Menu, ceny, alergény a hodiny sú v `src/lib/menu.ts`. Vizuálne pravidlá sú v `src/app/globals.css`, zdieľané komponenty v `src/components/`. Mobil má pevnú lištu menu/kontakt, navigáciu s riadeným fokusom a zatvorením cez Escape. Stránky majú vlastné titulky, popisy, Open Graph náhľad, SVG favicon, skip link, viditeľný focus a podporu reduced motion.

## Obrazové podklady

Vlastné podklady vytvorené vstavaným **ImageGen**, uložené priamo v `public/images/`: `pizza-hero.webp`, `pizza-margherita.webp`, `pizza-diavola.webp`, `pizza-burrata.webp`, `dough.webp` a `interior.webp`. WebP a `next/image` poskytujú responzívne veľkosti a lazy loading; hlavné obrázky sa prednačítavajú. Pôvod a finálne prompty: [docs/image-prompts.md](docs/image-prompts.md).

Fonty Bricolage Grotesque, DM Sans a DM Serif Display sa hostujú lokálne cez Fontsource (SIL Open Font License). Ikony Lucide používajú ISC licenciu. Logo a pečať sú vlastné SVG. Pri zobrazovaní stránky sa nesťahujú obrázky ani fonty z externých služieb.

## Overenie

```sh
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
# Overenie statickej verzie pre GitHub Pages po build:pages:
npm run test:pages
```

Playwright spustí produkčný server na porte 3100. Testuje desktop 1440 px, mobil 390 px a úzky viewport 320 px: všetky stránky, obrázky, pretekanie, WCAG A/AA cez axe, kategórie, vegetariánsky filter, navigáciu, odkazy na konkrétne pizze, Escape/fokus, clipboard vrátane chyby, reduced motion a 404. Mobilný test sa na desktopovom projekte zámerne preskočí. HTML report je v `playwright-report/`. Vizuálna kontrola sa robila aj v prehliadači na desktope a mobile.

## Rozsah a obmedzenia

Bez objednávok, platieb, účtov, kontaktného formulára a CMS. Všetky podnikové údaje, ceny aj alergény sú ilustračné; `.example` e-mail nemá slúžiť na doručovanie. Web neobsahuje recenzie ani ocenenia a označuje fiktívny charakter projektu. Kontrola dostupnosti je automatická a manuálna cez klávesnicu; nejde o úplný audit so všetkými asistenčnými technológiami.

Pri vytvorení projektu `npm audit --omit=dev` hlási **0 zraniteľností**. Plný audit hlási 5 vysokých nálezov v jednej vývojovej vetve `eslint-config-next → fast-glob → micromatch → braces` (GHSA-vfj7-8cjw-p6xm); pre používanú verziu `braces` zatiaľ nie je dostupná oprava. Produkčné závislosti nie sú týmto nálezom dotknuté. Nútený downgrade Next ESLint konfigurácie sa nepoužil; pri aktualizácii nástrojov treba audit zopakovať.
