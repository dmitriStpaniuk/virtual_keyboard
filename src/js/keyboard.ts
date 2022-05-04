import { createElement } from './createElement';
import { RuAbc } from './state';

const { body } = document;
export const pc = () => {
  const wrapper = createElement({
    element: 'div',
    className: 'pc',
  });
  const textarea = createElement({
    element: 'textarea',
    className: 'textarea',
  });
  body.append(wrapper);
  wrapper.append(textarea);
};
export const key = () => {
  const wrapperKey = createElement({
    element: 'div',
    className: 'wrapper-key',
    dataset: {
      id: '100',
      name: '200',
    },
  });
  for (let i = 0; i < 5; i += 1) {
    const keyRow = createElement({
      element: 'div',
      className: 'key-row',
    });
    RuAbc[i].forEach(({ value, className }:{ value:string, className:string }) => {
      const button = createElement({
        element: 'div',
        className: `key ${className}`,
        innerHtml: value,
      });
      keyRow.append(button);
    });
    wrapperKey.append(keyRow);
  }
  body.append(wrapperKey);
};
