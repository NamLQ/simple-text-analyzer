import { describe, it, expect } from 'vitest';
import { countCharacters, countWords } from './textUtils';

describe('countCharacters', () => {
  it('should return 0 for an empty string', () => {
    expect(countCharacters('')).toBe(0);
  });
  it('should correctly count characters in a simple sentence', () => {
    expect(countCharacters('hello world')).toBe(11);
  });
});

describe('countWords', () => {
  it('should return 0 for an empty string or only spaces', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  it('should correctly count words in a simple sentence', () => {
    expect(countWords('hello world')).toBe(2);
  });

  it('should handle multiple spaces between words and trim whitespace', () => {
    expect(countWords('  This   has extra   spaces.  ')).toBe(4);
  });
});