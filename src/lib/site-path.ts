export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${basePath}${path}`
    : path;
}

export function normalizedPath(path: string) {
  const withoutBase =
    basePath && (path === basePath || path.startsWith(`${basePath}/`))
      ? path.slice(basePath.length)
      : path;
  return withoutBase.replace(/\/$/, "") || "/";
}
