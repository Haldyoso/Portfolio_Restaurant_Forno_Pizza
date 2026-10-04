import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || "/Portfolio_Restaurant_Forno_Pizza";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (pathname === basePath) {
      response.writeHead(308, { Location: `${basePath}/` }).end();
      return;
    }
    if (!pathname.startsWith(`${basePath}/`)) throw new Error("Not found");
    let file = resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(`${root}${sep}`))
      throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        response
          .writeHead(308, {
            Location: `${pathname}/${new URL(request.url, "http://localhost").search}`,
          })
          .end();
        return;
      }
      file = resolve(file, "index.html");
    }
    response.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    response.end(await readFile(file));
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  }
}).listen(Number(process.env.PORT || 3100), "127.0.0.1", () => {
  console.log(
    `Pages preview: http://127.0.0.1:${process.env.PORT || 3100}${basePath}/`,
  );
});
