const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', startSwitcher);

buttonStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function startSwitcher() {
  changeColor();
  buttonStop.addEventListener('click', stopSwitcher);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function stopSwitcher() {
  timerId = clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}
