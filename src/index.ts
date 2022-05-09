import { message } from './js/key';
import { pc } from './js/keyboard';
import { getCurrentLanguage, renderKeyboard } from './js/state';
import './sass/main.scss';

// const img = require('./assets/01.png')
// document.body.innerHTML = `<img src="${img}" alt="sdsdsd21">`
message();
pc();
renderKeyboard();

const wrapper = document.querySelector('.wrapper-key');
if (wrapper) {
  document.addEventListener('mousedown', (e) => {
    const button = e.target as HTMLDivElement;
    if (!button) return;
    const buttonName = button.getAttribute('data-name');
    const buttonLocation = button.getAttribute('data-location');
    if (!buttonName || !buttonLocation) return;
    button?.classList.add('active');
    const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
    if (textarea) {
      const end = textarea.selectionEnd;

      e.preventDefault();
      const buttonFromState = getCurrentLanguage().value
        .flat()
        .find(({ value, location }) => value.toLowerCase() === buttonName.toLowerCase()
        && location === +buttonLocation);
      if (!buttonFromState) {
        console.error('Wrong button');
        return;
      }

      textarea.focus();

      buttonFromState.handleClick(end);

      textarea.selectionStart = buttonFromState.changeCursorPosition(end);
      textarea.selectionEnd = buttonFromState.changeCursorPosition(end);
    }
  });

  document.addEventListener('mouseup', (e) => {
    const button = e.target as HTMLDivElement;
    if (!button) return;
    const buttonName = button.getAttribute('data-name');
    const buttonLocation = button.getAttribute('data-location');
    if (!buttonName || !buttonLocation) return;
    const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
    if (textarea) {
      e.preventDefault();
      const buttonFromState = getCurrentLanguage().value
        .flat()
        .find(({ value, location }) => value.toLowerCase() === buttonName.toLowerCase()
        && location === +buttonLocation);
      if (!buttonFromState) {
        console.error('Wrong button');
        return;
      }

      textarea.focus();
      if (buttonFromState.handleKeyUp) buttonFromState.handleKeyUp();
      button?.classList.remove('active');
    }
  });
}
