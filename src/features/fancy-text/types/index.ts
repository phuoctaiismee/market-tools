export type CharMap = Record<string, string>;

export interface FancyStyle {
  name: string;
  category?: 'basic' | 'luxury' | 'decorator';
  badge?: string;
  map?: CharMap | null;
  mark?: string;
  left?: string;  // Frame left
  right?: string; // Frame right
  separator?: string;     // Character inserted after each non-space character
  charWrap?: [string, string]; // [prefix, suffix] wrapping each character
  isSafe: boolean; // True if it supports Vietnamese diacritics
}
