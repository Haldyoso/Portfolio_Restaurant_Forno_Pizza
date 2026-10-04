import { spawnSync } from "node:child_process";

const result = spawnSync(
  process.execPath,
  ["node_modules/@playwright/test/cli.js", "test"],
  {
    stdio: "inherit",
    env: { ...process.env, PAGES_TEST: "true" },
  },
);
process.exit(result.status ?? 1);
