/**
 * Static export on GitHub Pages needs basePath on every image URL.
 * next/image unoptimized does not always prepend basePath itself.
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  if (base && src.startsWith(`${base}/`)) {
    return src;
  }
  if (src.startsWith("/")) {
    return `${base}${src}`;
  }
  return `${base}/${src}`;
}
