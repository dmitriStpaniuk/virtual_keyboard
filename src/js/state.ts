import { key } from './key';
import { createCombination } from './keyCombinator';

type LangNames = 'RuAbc' | 'RuAbcShift' | 'RuAbcCaps' | 'RuAbcShiftSmall' | 'EnAbc' | 'EnAbcShift' | 'EnAbcCaps' | 'EnAbcShiftSmall';
export type RegularButton = {
  name?: string;
  value: string;
  className: string;
  location: number;
  handleClick: (end: number) => void;
  handleKeyUp? : () => void
  changeCursorPosition: (end: number) => number
};

type BasicButton = {
  value: string
  className: string
};

type Keyboard = {
  value: RegularButton[][],
  name: string;
};

let TEXTAREA_VALUE = '';

const setTextareaValue = (fn: (oldValue: string) => string) => {
  TEXTAREA_VALUE = fn(TEXTAREA_VALUE);
  const textarea = document.querySelector('.textarea');
  if (textarea) textarea.innerHTML = TEXTAREA_VALUE;
};

const formatBasicKeys = (keyboard: BasicButton[][]): RegularButton[][] => (
  keyboard.map((row) => row.map((button) => ({
    ...button,
    location: 0,
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}${this.value}${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  }))));

export const RuAbcBasic: BasicButton[][] = [
  [
    { value: 'ё', className: '' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: '0', className: '' },
    { value: '-', className: '' },
    { value: '=', className: '' },
  ],
  [
    { value: 'й', className: '' },
    { value: 'ц', className: '' },
    { value: 'у', className: '' },
    { value: 'к', className: '' },
    { value: 'е', className: '' },
    { value: 'н', className: '' },
    { value: 'г', className: '' },
    { value: 'ш', className: '' },
    { value: 'щ', className: '' },
    { value: 'з', className: '' },
    { value: 'х', className: '' },
    { value: 'ъ', className: '' },
  ],
  [
    { value: 'ф', className: '' },
    { value: 'ы', className: '' },
    { value: 'в', className: '' },
    { value: 'а', className: '' },
    { value: 'п', className: '' },
    { value: 'р', className: '' },
    { value: 'о', className: '' },
    { value: 'л', className: '' },
    { value: 'д', className: '' },
    { value: 'ж', className: '' },
    { value: 'э', className: '' },
    { value: '\\', className: '' },

  ],
  [
    { value: 'я', className: '' },
    { value: 'ч', className: '' },
    { value: 'с', className: '' },
    { value: 'м', className: '' },
    { value: 'и', className: '' },
    { value: 'т', className: '' },
    { value: 'ь', className: '' },
    { value: 'б', className: '' },
    { value: 'ю', className: '' },
    { value: '.', className: '' },
  ],
  [
    { value: ' ', className: 'space' },
  ],
];

const RuAbc = formatBasicKeys(RuAbcBasic);

export const RuAbcShiftBasic = [
  [
    { value: 'Ё', className: '' },
    { value: '!', className: '' },
    { value: '"', className: '' },
    { value: '№', className: '' },
    { value: ';', className: '' },
    { value: '%', className: '' },
    { value: ':', className: '' },
    { value: '?', className: '' },
    { value: '*', className: '' },
    { value: '(', className: '' },
    { value: ')', className: '' },
    { value: '_', className: '' },
    { value: '+', className: '' },
  ],
  [
    { value: 'Й', className: '' },
    { value: 'Ц', className: '' },
    { value: 'У', className: '' },
    { value: 'К', className: '' },
    { value: 'Е', className: '' },
    { value: 'Н', className: '' },
    { value: 'Г', className: '' },
    { value: 'Ш', className: '' },
    { value: 'Щ', className: '' },
    { value: 'З', className: '' },
    { value: 'Х', className: '' },
    { value: 'Ъ', className: '' },
  ],
  [
    { value: 'Ф', className: '' },
    { value: 'Ы', className: '' },
    { value: 'В', className: '' },
    { value: 'А', className: '' },
    { value: 'П', className: '' },
    { value: 'Р', className: '' },
    { value: 'О', className: '' },
    { value: 'Л', className: '' },
    { value: 'Д', className: '' },
    { value: 'Ж', className: '' },
    { value: 'Э', className: '' },
    { value: '/', className: '' },

  ],
  [
    { value: 'Я', className: '' },
    { value: 'Ч', className: '' },
    { value: 'С', className: '' },
    { value: 'М', className: '' },
    { value: 'И', className: '' },
    { value: 'Т', className: '' },
    { value: 'Ь', className: '' },
    { value: 'Б', className: '' },
    { value: 'Ю', className: '' },
    { value: ',', className: '' },
  ],
  [
    { value: ' ', className: 'space' },
  ],
];
const RuAbcShift = formatBasicKeys(RuAbcShiftBasic);

const RuAbcShiftSmall = formatBasicKeys(
  [
    [
      { value: 'ё', className: '' },
      { value: '!', className: '' },
      { value: '@', className: '' },
      { value: '#', className: '' },
      { value: '$', className: '' },
      { value: '%', className: '' },
      { value: '^', className: '' },
      { value: '&', className: '' },
      { value: '*', className: '' },
      { value: '(', className: '' },
      { value: ')', className: '' },
      { value: '_', className: '' },
      { value: '+', className: '' },
    ],
    [
      { value: 'й', className: '' },
      { value: 'ц', className: '' },
      { value: 'у', className: '' },
      { value: 'к', className: '' },
      { value: 'е', className: '' },
      { value: 'н', className: '' },
      { value: 'г', className: '' },
      { value: 'ш', className: '' },
      { value: 'щ', className: '' },
      { value: 'з', className: '' },
      { value: 'х', className: '' },
      { value: 'ъ', className: '' },
    ],
    [
      { value: 'ф', className: '' },
      { value: 'ы', className: '' },
      { value: 'в', className: '' },
      { value: 'а', className: '' },
      { value: 'п', className: '' },
      { value: 'р', className: '' },
      { value: 'о', className: '' },
      { value: 'л', className: '' },
      { value: 'д', className: '' },
      { value: 'ж', className: '' },
      { value: 'э', className: '' },
      { value: '\\', className: '' },

    ],
    [
      { value: 'я', className: '' },
      { value: 'ч', className: '' },
      { value: 'с', className: '' },
      { value: 'м', className: '' },
      { value: 'и', className: '' },
      { value: 'т', className: '' },
      { value: 'ь', className: '' },
      { value: 'б', className: '' },
      { value: 'ю', className: '' },
      { value: '.', className: '' },
    ],
    [
      { value: ' ', className: 'space' },
    ],
  ],
);
const RuAbcCaps = formatBasicKeys([
  [
    { value: 'ё', className: '' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: '0', className: '' },
    { value: '-', className: '' },
    { value: '=', className: '' },
  ],
  [
    { value: 'Й', className: '' },
    { value: 'Ц', className: '' },
    { value: 'У', className: '' },
    { value: 'К', className: '' },
    { value: 'Е', className: '' },
    { value: 'Н', className: '' },
    { value: 'Г', className: '' },
    { value: 'Ш', className: '' },
    { value: 'Щ', className: '' },
    { value: 'З', className: '' },
    { value: 'Х', className: '' },
    { value: 'Ъ', className: '' },
  ],
  [
    { value: 'Ф', className: '' },
    { value: 'Ы', className: '' },
    { value: 'В', className: '' },
    { value: 'А', className: '' },
    { value: 'П', className: '' },
    { value: 'Р', className: '' },
    { value: 'О', className: '' },
    { value: 'Л', className: '' },
    { value: 'Д', className: '' },
    { value: 'Ж', className: '' },
    { value: 'Э', className: '' },
    { value: '/', className: '' },

  ],
  [
    { value: 'Я', className: '' },
    { value: 'Ч', className: '' },
    { value: 'С', className: '' },
    { value: 'М', className: '' },
    { value: 'И', className: '' },
    { value: 'Т', className: '' },
    { value: 'Ь', className: '' },
    { value: 'Б', className: '' },
    { value: 'Ю', className: '' },
    { value: ',', className: '' },
  ],
  [
    { value: ' ', className: 'space' },
  ],
]);

const EnAbcCaps = formatBasicKeys([
  [
    { value: '`' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '0' },
    { value: '-' },
    { value: '=' },
  ],
  [
    { value: 'Q' },
    { value: 'W' },
    { value: 'E' },
    { value: 'R' },
    { value: 'T' },
    { value: 'Y' },
    { value: 'U' },
    { value: 'I' },
    { value: 'O' },
    { value: 'P' },
    { value: '{' },
    { value: '}' },
  ],
  [
    { value: 'A' },
    { value: 'S' },
    { value: 'D' },
    { value: 'F' },
    { value: 'G' },
    { value: 'H' },
    { value: 'J' },
    { value: 'K' },
    { value: 'L' },
    { value: ':' },
    { value: '"' },
    { value: '|' },
  ],
  [
    { value: 'Z' },
    { value: 'X' },
    { value: 'C' },
    { value: 'V' },
    { value: 'B' },
    { value: 'N' },
    { value: 'M' },
    { value: '<' },
    { value: '>' },
    { value: '?' },
  ],
  [
    { value: ' ', className: 'space' },
  ],
].map((row) => row.map((b) => ({ ...b, className: 'className' in b ? b.className : '' }))));

const EnAbcBasic : BasicButton[][] = [
  [
    { value: '`' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '0' },
    { value: '-' },
    { value: '=' },
  ],
  [
    { value: 'q' },
    { value: 'w' },
    { value: 'e' },
    { value: 'r' },
    { value: 't' },
    { value: 'y' },
    { value: 'u' },
    { value: 'i' },
    { value: 'o' },
    { value: 'p' },
    { value: '[' },
    { value: ']' },
  ],
  [
    { value: 'a' },
    { value: 's' },
    { value: 'd' },
    { value: 'f' },
    { value: 'g' },
    { value: 'h' },
    { value: 'j' },
    { value: 'k' },
    { value: 'l' },
    { value: ';' },
    { value: "'" },
    { value: '\\' },
  ],
  [
    { value: 'z' },
    { value: 'x' },
    { value: 'c' },
    { value: 'v' },
    { value: 'b' },
    { value: 'n' },
    { value: 'm' },
    { value: ',' },
    { value: '.' },
    { value: '/' },
  ],
  [{ value: ' ', className: 'space' }],
].map((row) => row.map((b) => ({ ...b, className: 'className' in b ? b.className : '' })));

const EnAbc = formatBasicKeys(EnAbcBasic);

const EnAbcShift = formatBasicKeys([
  [
    { value: '~' },
    { value: '!' },
    { value: '@' },
    { value: '#' },
    { value: '$' },
    { value: '%' },
    { value: '^' },
    { value: '&' },
    { value: '*' },
    { value: '(' },
    { value: ')' },
    { value: '_' },
    { value: '+' },
  ],
  [
    { value: 'Q' },
    { value: 'W' },
    { value: 'E' },
    { value: 'R' },
    { value: 'T' },
    { value: 'Y' },
    { value: 'U' },
    { value: 'I' },
    { value: 'O' },
    { value: 'P' },
    { value: '{' },
    { value: '}' },
  ],
  [
    { value: 'A' },
    { value: 'S' },
    { value: 'D' },
    { value: 'F' },
    { value: 'G' },
    { value: 'H' },
    { value: 'J' },
    { value: 'K' },
    { value: 'L' },
    { value: ':' },
    { value: '"' },
    { value: '|' },
  ],
  [
    { value: 'Z' },
    { value: 'X' },
    { value: 'C' },
    { value: 'V' },
    { value: 'B' },
    { value: 'N' },
    { value: 'M' },
    { value: '<' },
    { value: '>' },
    { value: '?' },
  ],
  [
    { value: ' ', className: 'space' },
  ],
].map((row) => row.map((b) => ({ ...b, className: 'className' in b ? b.className : '' }))));

const EnAbcShiftSmall = formatBasicKeys(
  [
    [
      { value: '`' },
      { value: '!' },
      { value: '@' },
      { value: '#' },
      { value: '$' },
      { value: '%' },
      { value: '^' },
      { value: '&' },
      { value: '*' },
      { value: '(' },
      { value: ')' },
      { value: '_' },
      { value: '+' },
    ],
    [
      { value: 'q' },
      { value: 'w' },
      { value: 'e' },
      { value: 'r' },
      { value: 't' },
      { value: 'y' },
      { value: 'u' },
      { value: 'i' },
      { value: 'o' },
      { value: 'p' },
      { value: '[' },
      { value: ']' },
    ],
    [
      { value: 'a' },
      { value: 's' },
      { value: 'd' },
      { value: 'f' },
      { value: 'g' },
      { value: 'h' },
      { value: 'j' },
      { value: 'k' },
      { value: 'l' },
      { value: ';' },
      { value: "'" },
      { value: '\\' },
    ],
    [
      { value: 'z' },
      { value: 'x' },
      { value: 'c' },
      { value: 'v' },
      { value: 'b' },
      { value: 'n' },
      { value: 'm' },
      { value: ',' },
      { value: '.' },
      { value: '/' },
    ],
    [{ value: ' ', className: 'space' }],
  ].map((row) => row.map((b) => ({ ...b, className: 'className' in b ? b.className : '' }))),
);

const RuAbcPacked = {
  value: RuAbc,
  name: 'RuAbc' as const,
};

const RuAbcShiftPacked = {
  value: RuAbcShift,
  name: 'RuAbcShift' as const,
};
const RuAbcShiftSmallPacked = {
  value: RuAbcShiftSmall,
  name: 'RuAbcShiftSmall' as const,
};

const RuAbcCapsPacked = {
  value: RuAbcCaps,
  name: 'RuAbcCaps' as const,
};
const EnAbcPacked = {
  value: EnAbc,
  name: 'EnAbc' as const,
};

const EnAbcShiftPacked = {
  value: EnAbcShift,
  name: 'EnAbcShift' as const,
};
const EnAbcShiftSmallPacked = {
  value: EnAbcShiftSmall,
  name: 'EnAbcShiftSmall' as const,
};

const EnAbcCapsPacked = {
  value: EnAbcCaps,
  name: 'EnAbcCaps' as const,
};

const langFromStorage = window.localStorage.getItem('currentLanguage') as LangNames;
const langMapper = {
  RuAbc: RuAbcPacked,
  RuAbcShift: RuAbcShiftPacked,
  RuAbcCaps: RuAbcCapsPacked,
  EnAbc: EnAbcShiftPacked,
  EnAbcShift: EnAbcShiftPacked,
  EnAbcCaps: EnAbcCapsPacked,
  RuAbcShiftSmall: RuAbcShiftSmallPacked,
  EnAbcShiftSmall: EnAbcShiftSmallPacked,
};
let currentLanguage: Keyboard = langFromStorage ? langMapper[langFromStorage] : RuAbcPacked;
export function getCurrentLanguage() {
  return currentLanguage;
}

const capsMapper = {
  RuAbc: RuAbcShiftPacked,
  RuAbcShift: RuAbcPacked,
  RuAbcCaps: RuAbcShiftSmallPacked,
  RuAbcShiftSmall: RuAbcCapsPacked,
  EnAbc: EnAbcShiftPacked,
  EnAbcShift: EnAbcPacked,
  EnAbcCaps: EnAbcShiftSmallPacked,
  EnAbcShiftSmall: EnAbcCapsPacked,

};

const capsLockMapper = {
  RuAbc: RuAbcCapsPacked,
  RuAbcCaps: RuAbcPacked,
  RuAbcShift: RuAbcCapsPacked,
  RuAbcShiftSmall: RuAbcPacked,
  EnAbc: EnAbcCapsPacked,
  EnAbcCaps: EnAbcPacked,
  EnAbcShift: EnAbcCapsPacked,
  EnAbcShiftSmall: EnAbcPacked,
};

const findOutCurrentLanguage = (keyboard: Keyboard) => keyboard.name as LangNames;

export function renderKeyboard(newValue: Keyboard = currentLanguage) {
  currentLanguage = newValue;
  localStorage.setItem('currentLanguage', findOutCurrentLanguage(newValue));
  const oldKeyboard = document.querySelector('.wrapper-key');
  if (oldKeyboard) oldKeyboard.remove();
  key(newValue.value);
}
createCombination(['Shift', 'Alt'], () => {
  const lang = findOutCurrentLanguage(getCurrentLanguage()).slice(0, 2);
  if (lang === 'Ru') renderKeyboard(EnAbcPacked);
  else { renderKeyboard(RuAbcPacked); }
});

const specialKeys: Record<string, RegularButton> = Object.entries({
  backSpace: {
    value: 'Backspace',
    className: 'backspace',
    handleClick(end: number) {
      if (end === 0) return;
      setTextareaValue((old) => {
        const before = old.slice(0, end - 1);
        const after = old.slice(end);
        return `${before}${after}`;
      });
    },
    changeCursorPosition(n: number) {
      if (n === 0) return n;
      return n - 1;
    },
  },
  tab: {
    value: 'Tab',
    className: 'tab',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}    ${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 4;
    },
  },
  enter: {
    value: 'Enter',
    className: 'enter',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}\n${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  },
  del: {
    value: 'Delete',
    className: 'del',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end + 1);
        return `${before}${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  leftShift:
  {
    value: 'Shift',
    className: 'shift',
    location: 1,
    handleClick() {
      const lang = findOutCurrentLanguage(getCurrentLanguage());
      if (lang === 'EnAbcShift' || lang === 'RuAbcShift') return;
      renderKeyboard(capsMapper[findOutCurrentLanguage(getCurrentLanguage())]);
    },
    handleKeyUp() {
      const lang = findOutCurrentLanguage(getCurrentLanguage());
      if (lang === 'EnAbc' || lang === 'RuAbc') return;
      renderKeyboard(capsMapper[findOutCurrentLanguage(getCurrentLanguage())]);
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  rightShift: {
    value: 'Shift',
    className: 'shift',
    location: 2,
    handleClick() {
      const lang = findOutCurrentLanguage(getCurrentLanguage());
      if (lang === 'EnAbcShift' || lang === 'RuAbcShift') return;

      renderKeyboard(capsMapper[findOutCurrentLanguage(getCurrentLanguage())]);
    },
    handleKeyUp() {
      const lang = findOutCurrentLanguage(getCurrentLanguage());
      if (lang === 'EnAbc' || lang === 'RuAbc') return;

      renderKeyboard(capsMapper[findOutCurrentLanguage(getCurrentLanguage())]);
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  altLeft: {
    value: 'Alt',
    className: 'alt',
    location: 1,
    handleClick() {
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  altRight: {
    value: 'Alt',
    className: 'alt',
    location: 2,
    handleClick() {

    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  altRightRu: {
    value: 'AltGraph',
    name: 'Alt',
    className: 'alt',
    location: 2,
    handleClick() {

    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  meta: {
    value: 'Meta',
    name: 'Win',
    className: 'win',
    location: 1,
    handleClick() {
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },
  controlLeft: {
    value: 'Control',
    name: 'Ctrl',
    className: 'lCtrl',
    handleClick() {
    },
    changeCursorPosition(n: number) {
      return n;
    },
    location: 1,
  },
  controlRight: {
    value: 'Control',
    name: 'Ctrl',
    className: 'RCtrl',
    handleClick() {
    },
    changeCursorPosition(n: number) {
      return n;
    },
    location: 2,
  },
  arrowLeft: {
    name: '&#8656',
    value: 'ArrowLeft',
    className: 'lft',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}←${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  },
  arrowUp: {
    name: '&#8657',
    value: 'ArrowUp',
    className: 'lft',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}↑${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  },
  arrowDown: {
    name: '&#8659',
    value: 'ArrowDown',
    className: 'down',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}↓${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  },
  arrowRight: {
    name: '&#8658',
    value: 'ArrowRight',
    className: 'down',
    handleClick(end: number) {
      setTextareaValue((old) => {
        const before = old.slice(0, end);
        const after = old.slice(end);
        return `${before}→${after}`;
      });
    },
    changeCursorPosition(n: number) {
      return n + 1;
    },
  },
  capsLock: {
    value: 'CapsLock',
    className: 'capslock',
    handleClick() {
      renderKeyboard(capsLockMapper[findOutCurrentLanguage(getCurrentLanguage())]);
    },
    changeCursorPosition(n: number) {
      return n;
    },
  },

}).reduce(
  (acc, [objKey, value]) => ({ ...acc, [objKey]: { ...value, location: value.location || 0 } }),
  {},
);

const addSpecialSymbolsToKeyboardState = (keyboard: RegularButton[][]) => {
  keyboard[0].push(specialKeys.backSpace);
  keyboard[1].unshift(specialKeys.tab);
  keyboard[1].push(specialKeys.del);
  keyboard[2].push(specialKeys.enter);
  keyboard[2].unshift(specialKeys.capsLock);
  keyboard[3].unshift(specialKeys.leftShift);
  keyboard[3].push(specialKeys.arrowUp);
  keyboard[3].push(specialKeys.rightShift);

  keyboard[4].unshift(specialKeys.altLeft);
  keyboard[4].unshift(specialKeys.meta);
  keyboard[4].unshift(specialKeys.controlLeft);
  keyboard[4].push(specialKeys.altRightRu);
  keyboard[4].push(specialKeys.arrowLeft);
  keyboard[4].push(specialKeys.arrowDown);
  keyboard[4].push(specialKeys.arrowRight);
  keyboard[4].push(specialKeys.controlRight);
};
addSpecialSymbolsToKeyboardState(RuAbc);
addSpecialSymbolsToKeyboardState(RuAbcShift);
addSpecialSymbolsToKeyboardState(EnAbc);
addSpecialSymbolsToKeyboardState(EnAbcShift);
addSpecialSymbolsToKeyboardState(EnAbcCaps);
addSpecialSymbolsToKeyboardState(RuAbcCaps);
addSpecialSymbolsToKeyboardState(RuAbcShiftSmall);
addSpecialSymbolsToKeyboardState(EnAbcShiftSmall);
