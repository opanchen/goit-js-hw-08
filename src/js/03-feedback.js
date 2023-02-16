import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  mailInput: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

// Об'єкт введених в інпутах даних з дефолтними значеннями '',
// щоб не підтягувався undefined і не передавався пустий об'єкт в консоль
// після перезавантаження + сабміт

const formData = { email: '', message: '' };
console.log('formData starting init:', formData);

// При завантаженні сторінки витягуємо з Local Storage дані
// в поля інпутів, якщо такі дані вже існують (умова з ТЗ)
initStorageData();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.submitBtn.addEventListener('click', OnSubmitBtnClick);

function onFormInput(e) {
  // Записуємо в об'єкт formData введені користувачем дані
  // та відправляємо цей об'єкт в Local Storage
  formData[e.target.name] = e.target.value;
  //   console.log('formData ', formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function OnSubmitBtnClick(e) {
  e.preventDefault();
  //   Якщо користувач нічого не ввів, виводимо повідомлення
  //  і не дозволяємо виконати сабміт
  if (refs.mailInput.value === '' || refs.textarea.value === '') {
    alert('Please fill out the form to continue!');
    return;
  }
  // При сабміті виводимо об'єкт значень formData в консоль
  // та чистимо Local Storage з полями інпутів в формі (ТЗ)
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
    const data = JSON.parse(storageData);
    refs.mailInput.value = data?.email;
    refs.textarea.value = data?.message;
    // Додатково перезаписуємо значення в formData,
    // щоб дані в об'єкті зберігались після перезавантаження сторінки
    // (без додаткового вводу символів в інпутах, якщо відразу буде сабміт)
    formData.email = data?.email;
    formData.message = data?.message;
  } else {
    clearFormValues();
  }
}
