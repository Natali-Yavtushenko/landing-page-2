import axios from 'axios';
import { showModalIzi, showEroorIzi } from './modal.js';

const confirmEmail = document.querySelector('.done-icon');
const formEl = document.querySelector('.input-info');
const defEmail = document.querySelector('.invalid-email');
const inputEmail = document.querySelector('.form-input');

fillForm();
function fillForm() {
  const formDataFromLs = JSON.parse(
    localStorage.getItem('work-Together-request')
  );
  if (formDataFromLs === null) {
    return;
  }
  for (const key in formDataFromLs) {
    if (formDataFromLs.hasOwnProperty(key)) {
      formEl.elements[key].value = formDataFromLs[key];
    }
  }
}

const formData = {};
const saveFormData = event => {
  const fileName = event.target.name;
  const fileValue = event.target.value.trim();

  formData[fileName] = fileValue;
  localStorage.setItem('work-Together-request', JSON.stringify(formData));
};

function checkFormValidity() {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/;
  const isEmailValid =
    emailPattern.test(inputEmail.value) && inputEmail.value.trim().length > 0;

  if (isEmailValid) {
    confirmEmail.classList.remove('is-hidden');
    defEmail.classList.add('is-hidden-text');
  } else {
    defEmail.classList.remove('is-hidden-text');
  }
}

function onInputEmail() {
  if (inputEmail.value.trim().length === 0) {
    defEmail.classList.add('is-hidden-text');
    confirmEmail.classList.add('is-hidden');
  } else {
    checkFormValidity();
  }
}

async function onFormSubmit(event) {
  event.preventDefault();
  checkFormValidity();
  const userInfo = JSON.parse(localStorage.getItem('work-Together-request'));

  try {
    await postData(userInfo);

    showModalIzi();

    formEl.reset();
    localStorage.removeItem('work-Together-request');

    confirmEmail.classList.add('is-hidden');
    defEmail.classList.add('is-hidden-text');
  } catch (error) {
    showEroorIzi(error.message);
  }
}

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
async function postData(obj) {
  try {
    const response = await axios.post(`${BASE_URL}/requests`, obj);
    return response.data;
  } catch (error) {
    throw error;
  }
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('change', saveFormData);
inputEmail.addEventListener('input', onInputEmail);
