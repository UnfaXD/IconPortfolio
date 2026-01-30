/** URL-safe slug: lowercase, spaces to hyphens, strip trailing punctuation */
export const slugify = (str: string) =>
  str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "");