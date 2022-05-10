import { createElement } from './createElement';
import {
  getCurrentLanguage,
} from './state';

const { body } = document;
export const pc = () => {
  const wrapper = createElement({
    element: 'div',
    className: 'pc',

  });
  const textarea = createElement({
    element: 'textarea',
    className: 'textarea',
    innerHtml: '',
  });
  body.append(wrapper);
  wrapper.append(textarea);
};

body.addEventListener('keydown', (e) => {
  console.log(e);
  const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
  if (textarea) {
    const end = textarea.selectionEnd;
    e.preventDefault();

    const buttonFromState = getCurrentLanguage().value
      .flat()
      .find(({ value, location }) => value === e.key && e.location === location);
    if (!buttonFromState) {
      console.error('Wrong button');
      return;
    }

    textarea.focus();

    buttonFromState.handleClick(end);

    textarea.selectionStart = buttonFromState.changeCursorPosition(end);
    textarea.selectionEnd = buttonFromState.changeCursorPosition(end);

    try {
      const button = document.querySelector(`[data-name="${buttonFromState.value.toLowerCase()}"][data-location="${e.location}"]`);
      button?.classList.add('active');
    } catch (error: unknown) {
      if (e.key === '"') {
        const button = document.querySelector(`[data-name='${buttonFromState.value.toLowerCase()}'][data-location="${e.location}"]`);
        button?.classList.add('active');
      } else {
        const button = document.querySelector('.slash');
        button?.classList.add('active');
      }
    }
  }
});

body.addEventListener('keyup', (e) => {
  const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
  if (textarea) {
    e.preventDefault();
    const buttonFromState = getCurrentLanguage().value
      .flat()
      .find(({ value, location }) => value === e.key && e.location === location);
    if (!buttonFromState) {
      return console.error('Wrong button');
    }

    textarea.focus();
    if (buttonFromState.handleKeyUp) buttonFromState.handleKeyUp();
    return null;
  }
  return false;
});

body.addEventListener('keyup', (e) => {
  try {
    const button = document.querySelector(`[data-name="${e.key.toLowerCase()}"][data-location="${e.location}"]`);
    button?.classList.remove('active');
  } catch (error: unknown) {
    if (e.key === '"') {
      const button = document.querySelector(`[data-name='${e.key.toLowerCase()}'][data-location="${e.location}"]`);
      button?.classList.remove('active');
    } else {
      const button = document.querySelector('.slash');
      button?.classList.remove('active');
    }
  }
});
