import { Validate } from './validate';

function generateError(textError) {
  const error = document.createElement('li');
  error.innerHTML = textError;
  return error;
}

function validateField(element) {
  const groupElement = element.parentElement;
  const errorList = groupElement.getElementsByClassName(
    'registration-group-item__error-list'
  )[0];
  let isValid = true;
  if (!Validate.checkRequired(element.value)) {
    isValid = false;
    const error = generateError('The field is requeired');
    errorList.append(error);
  }
  if (Validate.hasNumber(element.value)) {
    isValid = false;
    const error = generateError('The field is contains a number');
    errorList.append(error);
  }
  if (!isValid) {
    element.classList.add('registration-group-item__input--error');
  }
}

function validateFieldEmail(element) {
  const groupElement = element.parentElement;
  const errorList = groupElement.getElementsByClassName(
    'registration-group-item__error-list'
  )[0];
  let isValid = true;
  if (!Validate.checkRequired(element.value)) {
    isValid = false;
    const error = generateError('The field is required');
    errorList.append(error);
  }
  if (!Validate.checkValidEmail(element.value)) {
    isValid = false;
    const error = generateError('The field is not email');
    errorList.append(error);
  }
  if (!isValid) {
    element.classList.add('registration-group-item__input--error');
  }
}

function validateFieldPassword(element) {
  const groupElement = element.parentElement;
  const errorList = groupElement.getElementsByClassName(
    'registration-group-item__error-list'
  )[0];
  let isValid = true;
  if (!Validate.checkRequired(element.value)) {
    isValid = false;
    const error = generateError('The field is required');
    errorList.append(error);
  }
  if (!Validate.checkValidPassword(element.value)) {
    isValid = false;
    const error = generateError(
      'The field is not password(password is 6 or more)'
    );
    errorList.append(error);
  }
  if (!isValid) {
    element.classList.add('registration-group-item__input--error');
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
    const fieldInput = document.querySelectorAll(
      '.registration-group-item__input'
    );

    for (let i = 0; i < fieldInput.length; i++) {
      fieldInput[i].classList.remove('registration-group-item__input--error');
    }
    const listsError = document.querySelectorAll(
      '.registration-group-item__error-list'
    );
    for (let i = 0; i < listsError.length; i++) {
      const errors = listsError[i].getElementsByTagName('li');
      for (let j = 0; j < errors.length;) {
        errors[j].parentNode.removeChild(errors[j]);
      }
    }

    validateField(name);
    validateField(surname);
    validateField(patronymic);
    validateFieldEmail(email);
    validateFieldPassword(password);
  });
};
