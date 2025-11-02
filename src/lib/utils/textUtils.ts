/**
 * Counts the number of characters in a given string.
 * @param text The input string.
 * @returns The total number of characters.
 */
export function countCharacters(text: string): number {
  return text.length;
}

/**
 * Counts the number of words in a given string.
 * Handles multiple spaces between words and leading/trailing spaces.
 * @param text The input string.
 * @returns The total number of words.
 */
export function countWords(text: string): number {
  if (!text.trim()) {
    return 0;
  }
  return text.trim().split(/\s+/).length;
}