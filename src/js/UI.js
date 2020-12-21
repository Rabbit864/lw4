import { Validate } from './validate';

function validateField(element) {
  if (Validate.checkRequired(element.value)) {
    element.classList.add('registration__input--error');
    const groupElement = element.parentElement;
    const ErrorList = groupElement.getElementsByClassName(
      'registration__error-list',
    )[0];
    const error = document.createElement('li');
    error.innerHTML = 'The field is required';
    ErrorList.append(error);
  }
}

window.onload = function load() {
  const form = document.querySelector('.registration');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const patronymic = document.querySelector('#patronymic');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const fieldInput = document.querySelectorAll('.registration__input');
    for (let i = 0; i < fieldInput.length; i++) {
      fieldInput[i].classList.remove('registration__input--error');
    }
    const listsError = document.querySelectorAll('.registration__error-list');
    for (let i = 0; i < listsError.length; i++) {
      const error = listsError[i].getElementsByTagName('li');
      for (let j = 0; j < error.length; j++) {
        listsError[i].removeChild(error[j]);
      }
    }
    validateField(name);
    validateField(surname);
    validateField(patronymic);
    validateField(name);
    validateField(email);
    validateField(password);
  });
};
