export type CharMap = Record<string, string>;

export interface FancyStyle {
  name: string;
  map?: CharMap | null;
  mark?: string;
  left?: string;  // Frame left
  right?: string; // Frame right
  isSafe: boolean; // True if it supports Vietnamese diacritics
}
