export function isValidImageUrl(url) {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    return /\.(jpe?g|png|webp|gif)$/i.test(parsedUrl.pathname);
  } catch {
    return false;
  }
}
