import { FancyStyle, CharMap } from "../types";

const createCharMap = (upperStart: number, lowerStart: number): CharMap => {
  const map: CharMap = {};

  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(upperStart + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }

  return map;
};

// --- SANS ---
const SANS_BOLD: CharMap = {
  'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
  'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
  '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
};

const SANS_ITALIC: CharMap = {
  'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
  'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
};

const SERIF_BOLD: CharMap = {
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳'
};

const FRAKTUR_BOLD: CharMap = {
  'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
  'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟'
};

const SCRIPT_BOLD: CharMap = {
  'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
  'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
};

const DOUBLE_STRUCK: CharMap = {
  'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
  'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
};

const SMALL_CAPS: CharMap = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
  'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
};

const MATH_ITALIC: CharMap = createCharMap(0x1D434, 0x1D44E);
const MATH_BOLD_ITALIC: CharMap = createCharMap(0x1D468, 0x1D482);
const SANS_BOLD_ITALIC: CharMap = createCharMap(0x1D63C, 0x1D656);

const CIRCLED: CharMap = {
  'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
  'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
  '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

const FULLWIDTH: CharMap = {
  'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
  'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
  '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
};

const UPSIDE_DOWN: CharMap = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ɓ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6'
};

const ACCENTED: CharMap = {
  'A': 'Á', 'B': 'Ɓ', 'C': 'Č', 'D': 'Đ', 'E': 'Ê', 'F': 'Ƒ', 'G': 'Ğ', 'H': 'Ħ', 'I': 'Î', 'J': 'Ĵ', 'K': 'Ķ', 'L': 'Ŀ', 'M': 'Ṁ', 'N': 'Ń', 'O': 'Ø', 'P': 'Þ', 'Q': 'Ǫ', 'R': 'Ŕ', 'S': 'Ś', 'T': 'Ť', 'U': 'Ů', 'V': 'Ṽ', 'W': 'Ŵ', 'X': 'Ẍ', 'Y': 'Ŷ', 'Z': 'Ž',
  'a': 'á', 'b': 'ƀ', 'c': 'č', 'd': 'đ', 'e': 'ê', 'f': 'ƒ', 'g': 'ğ', 'h': 'ħ', 'i': 'î', 'j': 'ĵ', 'k': 'ķ', 'l': 'ŀ', 'm': 'ṁ', 'n': 'ń', 'o': 'ø', 'p': 'þ', 'q': 'ǫ', 'r': 'ŕ', 's': 'ś', 't': 'ť', 'u': 'ů', 'v': 'ṽ', 'w': 'ŵ', 'x': 'ẍ', 'y': 'ŷ', 'z': 'ž'
};

const SYMBOLIC: CharMap = {
  'A': 'Λ', 'B': 'β', 'C': '☾', 'D': 'Ð', 'E': 'Ɇ', 'F': '₣', 'G': 'Ǥ', 'H': 'Ħ', 'I': 'Ɨ', 'J': 'J', 'K': '⊗', 'L': 'Ł', 'M': '₥', 'N': '₦', 'O': 'Ø', 'P': '₱', 'Q': 'Q', 'R': 'я', 'S': '§', 'T': 'Ŧ', 'U': '∪', 'V': 'Ṽ', 'W': 'Ш', 'X': 'Ж', 'Y': '¥', 'Z': 'Ẕ',
  'a': 'α', 'b': 'Ƅ', 'c': '☾', 'd': 'đ', 'e': 'Ɇ', 'f': 'ƒ', 'g': 'ɠ', 'h': 'ħ', 'i': 'ι', 'j': 'ʝ', 'k': 'ƙ', 'l': 'ℓ', 'm': 'ɱ', 'n': 'ռ', 'o': 'σ', 'p': 'ρ', 'q': 'զ', 'r': 'я', 's': 'š', 't': 'ŧ', 'u': 'ʊ', 'v': 'ṽ', 'w': 'ɯ', 'x': 'ж', 'y': 'у', 'z': 'ƶ'
};

const DEFAULT_STROKE = '\u0336'; // Long stroke

export const transformText = (text: string, style: FancyStyle): string => {
  const normalized = text.normalize("NFD");
  const map = style.map || {};
  const mark = style.mark;
  const wrapper = style.charWrap;
  const separator = style.separator ?? "";

  const slices: string[] = [];

  for (const char of normalized) {
    if (char === ' ' || char === '\n') {
      slices.push(char);
      continue;
    }

    let transformed = map[char] || char;

    if (mark) {
      transformed = Array.from(transformed)
        .map((symbol) => symbol + mark)
        .join("");
    }

    if (wrapper) {
      transformed = `${wrapper[0]}${transformed}${wrapper[1]}`;
    }

    slices.push(transformed);
  }

  return slices.join(separator);
};

export const combineWithMarks = (text: string, mark: string): string => {
  return text
    .split("")
    .map((char) => char === " " ? char : char + mark)
    .join("");
};

export const styles: FancyStyle[] = [
  // --- BASIC STYLES ---
  { name: 'Sans Serif Bold', category: 'basic', badge: 'Popular', map: SANS_BOLD, isSafe: true },
  { name: 'Sans Serif Italic', category: 'basic', badge: 'Popular', map: SANS_ITALIC, isSafe: true },
  { name: 'Sans Serif Bold Italic', category: 'basic', badge: 'Popular', map: SANS_BOLD_ITALIC, isSafe: true },
  { name: 'Serif Bold', category: 'basic', map: SERIF_BOLD, isSafe: true },
  { name: 'Math Italic', category: 'basic', map: MATH_ITALIC, isSafe: true },
  { name: 'Math Bold Italic', category: 'basic', map: MATH_BOLD_ITALIC, isSafe: true },
  { name: 'Small Caps', category: 'basic', map: SMALL_CAPS, isSafe: true },
  { name: 'Circled Text', category: 'basic', map: CIRCLED, isSafe: true },
  { name: 'Fullwidth', category: 'basic', map: FULLWIDTH, isSafe: true },

  // --- LUXURY STYLES ---
  { name: 'Royal Fraktur', category: 'luxury', badge: 'Luxury', map: FRAKTUR_BOLD, mark: '\u0335', isSafe: true },
  { name: 'Luxury Script', category: 'luxury', badge: 'Luxury', map: SCRIPT_BOLD, mark: '\u0337', isSafe: true },
  { name: 'Modern Hollow', category: 'luxury', badge: 'Luxury', map: DOUBLE_STRUCK, mark: '\u0335', isSafe: true },
  { name: 'Accent Mix', category: 'luxury', map: ACCENTED, isSafe: true },
  { name: 'Symbol Chain', category: 'luxury', map: SYMBOLIC, isSafe: true },

  // --- DECORATOR STYLES ---
  { name: 'Upside Down', category: 'decorator', isSafe: true },
  { name: 'Brackets Each', category: 'decorator', badge: 'Decorator', charWrap: ['【', '】'], separator: '', isSafe: true },
  { name: 'Quote Blocks', category: 'decorator', badge: 'Decorator', charWrap: ['『', '』'], separator: '', isSafe: true },
  { name: 'Sparkle Look', category: 'decorator', left: '✧ ', right: ' ✧', isSafe: true },
  { name: 'Royal Crest', category: 'decorator', left: '⚜ ', right: ' ⚜', isSafe: true },
  { name: 'Warrior Edge', category: 'decorator', left: '⚔ ', right: ' ⚔', isSafe: true },
  { name: 'Dragon Horn', category: 'decorator', left: '꧁༺ ', right: ' ༻꧂', isSafe: true },
  { name: 'Modern Bracket', category: 'decorator', left: '『 ', right: ' 』', isSafe: true },
  { name: 'Gate Keeper', category: 'decorator', left: '⟦ ', right: ' ⟧', isSafe: true },
  { name: 'Angular Flow', category: 'decorator', left: '《 ', right: ' 》', isSafe: true },
  { name: 'Focus Frame', category: 'decorator', left: '【 ', right: ' 】', isSafe: true },
  { name: 'Bullet Point', category: 'decorator', left: '• ', right: ' •', isSafe: true },
  { name: 'Pillar Style', category: 'decorator', left: '┋ ', right: ' ┋', isSafe: true },
  { name: 'Side Arrow', category: 'decorator', left: '› ', right: ' ‹', isSafe: true },
  { name: 'Star Icon', category: 'decorator', left: '★ ', right: ' ★', isSafe: true },
  { name: 'Elite Macron', category: 'decorator', mark: '\u0304', isSafe: true },
  { name: 'Minimal Dot', category: 'decorator', mark: '\u0307', isSafe: true },
  { name: 'Glitch Strike', category: 'decorator', mark: '\u0337', isSafe: true },
  { name: 'Heavy Strikethrough', category: 'decorator', mark: '\u0336', isSafe: true },
  { name: 'Heart Chain', category: 'decorator', mark: '♥', isSafe: true },
  { name: 'Underline Dot', category: 'decorator', mark: '\u0323', isSafe: true },
];

export const decorations: never[] = [];
