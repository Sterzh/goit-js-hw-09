import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const emailEl = document.querySelector('.form input');
const textareaEl = document.querySelector('.form textarea');

let formData = {};

formEl.addEventListener('input', formInput);
formEl.addEventListener('submit', formSubmit);

function createPromise(position, delay) {
  formInput();
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function formInput(e) {
  formData[e.target.name] = e.target.value;
}

function formSubmit(e) {
  e.preventDefault();

  console.log(formData);
}
