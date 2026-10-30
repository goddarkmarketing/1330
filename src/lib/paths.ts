/** Prefix for GitHub Pages project path (e.g. `/1330`) or empty in local/dev. */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
