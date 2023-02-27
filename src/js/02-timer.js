import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');

input.addEventListener('focus', inputDate);

buttonStart.disabled = true;

function inputDate(e) {
  console.log('ок');
}

// console.log(input);
// console.log(buttonStart);
