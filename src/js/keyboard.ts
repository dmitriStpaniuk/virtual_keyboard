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

// creat array enter key
// backspace

// let text: string[] = [];
// let output = '';
// const outputTextarea = (t:string[]) => t.filter((i) => !ignor.includes(i)).join('');
// body.addEventListener('keyup', (e) => {
//   text.push(e.key);
//   const area = document.querySelector('.textarea');
//   output = outputTextarea(text);
//   if (area) {
//     if (e.key === 'Backspace') {
//       text = text.splice(0, text.length - 2);
//       output = outputTextarea(text);
//     }
//     if (e.key === 'Tab') {
//       text = text.concat('    ');
//       output = outputTextarea(text);
//     }
//     if (e.key === 'Enter'
//       text = text.concat('\n');
//       output = outputTextarea(text);
//     }
//     if (e.key === 'ArrowLeft') {
//       text = text.concat('&#8656');
//       output = outputTextarea(text);
//     }
//     if (e.key === 'ArrowUp') {
//       text = text.concat('&#8657');
//       output = outputTextarea(text);
//     }
//     if (e.key === 'ArrowRight') {
//       text = text.concat('&#8658');
//       output = outputTextarea(text);
//     }
//     if (e.key === 'ArrowDown') {
//       text = text.concat('&#8659');
//       output = outputTextarea(text);
//     }
//     area.innerHTML = output;
//   }
// });

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
