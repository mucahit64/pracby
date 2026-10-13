import DOMPurify from "dompurify";

export const sanitizeHtml = (html: string | null | undefined): string => {
  if (!html) return "";
  if (import.meta.server) return "";
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: ["p", "ul", "ol", "li", "b", "strong", "i", "em", "u", "br", "sup", "sub", "span"] });
};
