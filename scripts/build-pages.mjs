import { mkdir, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = new URL("../public/images/", import.meta.url);
const destination = new URL("responsive/", source);
await mkdir(destination, { recursive: true });
for (const name of await readdir(source)) {
  if (!name.endsWith(".webp")) continue;
  const input = new URL(name, source);
  for (const width of [320, 640, 960, 1280, 1536]) {
    await sharp(fileURLToPath(input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(
        fileURLToPath(
          new URL(`${name.slice(0, -5)}-${width}.webp`, destination),
        ),
      );
  }
}
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || "/Portfolio_Restaurant_Forno_Pizza";
const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL ||
        `https://haldyoso.github.io${basePath}/`,
    },
  },
);
process.exit(result.status ?? 1);
