import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  mailInput: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

initStorageData();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.submitBtn.addEventListener('click', OnSubmitBtnClick);

const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  //   console.log('formData ', formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function OnSubmitBtnClick(e) {
  e.preventDefault();
  if (refs.mailInput.value === '' || refs.textarea.value === '') {
    alert('Please fill out the form to continue!');
    return;
  }
  console.log(formData);

  localStorage.clear();
  clearFormValues();
}

function clearFormValues() {
  refs.mailInput.value = '';
  refs.textarea.value = '';
}

function initStorageData() {
  const storageData = localStorage.getItem('feedback-form-state');
  //   console.log(storageData);
  if (storageData) {
    const { email, message } = JSON.parse(storageData);
    refs.mailInput.value = email;
    refs.textarea.value = message;
  } else {
    clearFormValues();
  }
}
