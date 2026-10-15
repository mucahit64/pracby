import DOMPurify from "dompurify";

export const sanitizeHtml = (html: string | null | undefined): string => {
  if (!html) return "";
  if (import.meta.server) return "";
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: ["p", "ul", "ol", "li", "b", "strong", "i", "em", "u", "br", "sup", "sub", "span"] });
};

// Explanations are plain text that may contain <sup>/<sub> (e.g. x<sup>2</sup>) and bare comparisons (a < b).
// Escape everything, then restore only sup/sub tags so "a < b" stays text.
export const formatExplanation = (text: string | null | undefined): string => {
  if (!text) return "";
  const escaped = text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;(\/?)(sup|sub)&gt;/g, "<$1$2>");
  return sanitizeHtml(escaped);
};
