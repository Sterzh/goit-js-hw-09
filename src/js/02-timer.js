import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let currentTime = {};
let selectedTime = {};
let timerId = null;

buttonStart.addEventListener('click', startTimer);

buttonStart.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentTime = new Date().getTime();
    selectedTime = selectedDates[0].getTime();
    if (selectedTime > currentTime) {
      buttonStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      buttonStart.disabled = true;
    }
  },
});

function startTimer() {
  currentTime = new Date().getTime();
  if (selectedTime > currentTime) {
    remainingTime = selectedTime - currentTime;
    buttonStart.disabled = true;
    timerId = setInterval(function updateTime(e) {
      if (remainingTime > 1000) {
        remainingTime -= 1000;
        remainingTimeConvert = convertMs(remainingTime);
        days.textContent = remainingTimeConvert.days;
        hours.textContent = remainingTimeConvert.hours;
        minutes.textContent = remainingTimeConvert.minutes;
        seconds.textContent = remainingTimeConvert.seconds;
        console.log(remainingTime);
      } else {
        timerId = clearInterval(timerId);
      }
    }, 1000);
  } else {
    Notiflix.Notify.failure('Please choose a date in the future');
    buttonStart.disabled = true;
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
