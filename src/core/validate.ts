import { Dictionary } from '../types/core';
import { regexp } from '../constants/regexp';

const showWarningMessage = (input: HTMLInputElement, isError: boolean) => {
  const parent = input?.parentElement?.closest('.profileFormItem')
    || input?.parentElement?.closest('.formItem');
  const messageElement = parent
    && (parent.querySelector('.formItemError')
      || parent.querySelector('.formItemErrorProfile'));
  if (messageElement) {
    if (isError) {
      messageElement.classList.remove('hidden');
    } else {
      messageElement.classList.add('hidden');
    }
  }
};

const checkLoginField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { checkLogin } = regexp;
    const { value } = input;
    isError = !value.match(checkLogin) || value.length < 3 || value.length > 20;
    showWarningMessage(input, isError);
  }
  return isError;
};

const checkPasswordField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { checkPassword } = regexp;
    const { value } = input;
    isError = !value.match(checkPassword) || value.length < 8 || value.length > 40;
    showWarningMessage(input, isError);
  }
  return isError;
};

const checkPhoneNumberField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { checkPhoneNumber } = regexp;
    const { value } = input;
    isError = !value.match(checkPhoneNumber) || value.length < 10 || value.length > 15;
    showWarningMessage(input, isError);
  }
  return isError;
};

const checkEmailField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { checkMail } = regexp;
    const { value } = input;
    isError = !value.match(checkMail);
    showWarningMessage(input, isError);
  }
  return isError;
};

const checkNameField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { checkName } = regexp;
    const { value } = input;
    isError = !value.match(checkName);
    showWarningMessage(input, isError);
  }
  return isError;
};

const checkMessageField = (input: HTMLInputElement): boolean => {
  let isError = false;
  if (input) {
    const { value } = input;
    isError = value === '';
  }
  return isError;
};

export const checkValidation = (data: {
  event?: Event | null;
  input?: HTMLInputElement;
}): boolean => {
  const input = (data.event?.target as HTMLInputElement) || data.input;
  const type = input.getAttribute('validation-type') || 'text';
  switch (type) {
    case 'password':
      return checkPasswordField(input);
    case 'login':
      return checkLoginField(input);
    case 'email':
      return checkEmailField(input);
    case 'name':
      return checkNameField(input);
    case 'phone':
      return checkPhoneNumberField(input);
    case 'message':
      return checkMessageField(input);
    default:
      return false;
  }
};

export const getFormData = (event: Event) => new Promise((resolve, reject): { data: any } => {
  const button = event.target as HTMLFormElement;
  const form = button?.parentElement?.closest('form');
  if (form) {
    const inputs = form.querySelectorAll('input');
    if (!inputs || inputs?.length === 0) {
      return;
    }
    let hasError = false;
    // for of для меня лучше подходит, чем forEach, который рекомендуют на airBnb
    // https://github.com/airbnb/javascript/issues/1271
    /*eslint-disable */
      for (const input of inputs) {
        hasError = checkValidation({ input });
      }
      /* eslint-enable */
    const result: Dictionary = [...inputs].reduce(
      (model: Dictionary, input: HTMLInputElement) => {
        const { name, value } = input;
        model[name] = value;
        return model;
      },
      {}
    );

    if (hasError) {
      reject('has validation error');
    } else {
      resolve(result);
    }
  }
});
