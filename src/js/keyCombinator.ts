export const createCombination = (keys: string[], fn: () => void) => {
  const pressed = new Set();

  document.body.addEventListener('keydown', (e) => {
    pressed.add(e.key);
    if (keys.every((key) => Array.from(pressed).includes(key))) fn();
  });
  document.body.addEventListener('keyup', (e) => {
    pressed.delete(e.key);
  });
};
