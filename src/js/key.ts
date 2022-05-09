import { createElement } from './createElement';

type RegularButton = {
  name?: string | undefined;
  value: string;
  className: string;
  location: number;
  handleClick: (end: number) => void;
  changeCursorPosition: (end: number) => number;
};

export const key = (letters: RegularButton[][]) => {
  const wrapperKey = createElement({
    element: 'div',
    className: 'wrapper-key',
  });
  for (let i = 0; i < 5; i += 1) {
    const keyRow = createElement({
      element: 'div',
      className: 'key-row',
    });

    letters[i].forEach(({
      value, className, location, name,
    }: RegularButton) => {
      const button = createElement({
        element: 'span',
        className: `key ${className}`,
        innerHtml: name || value,
        dataset: {
          // id: dataId,
          name: value.toLowerCase(),
          location: String(location),
        },
      });
      keyRow.append(button);
    });
    wrapperKey.append(keyRow);
  }
  document.body.append(wrapperKey);
};

export const message = () => {
  const messageText = createElement({
    element: 'div',
    className: 'message',
    innerHtml: 'Переключение языка по Alt + Shift. Убедитесь, что раскладка языка совпадает с системной. Спасибо!',
  });
  document.body.append(messageText);
};
