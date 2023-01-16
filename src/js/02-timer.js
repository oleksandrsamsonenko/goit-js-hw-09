import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector(`input`);
const startBtn = document.querySelector(`button`);
const days = document.querySelector(`[data-days]`);
const hours = document.querySelector(`[data-hours]`);
const minutes = document.querySelector(`[data-minutes]`);
const seconds = document.querySelector(`[data-seconds]`);
let selectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate < Date.now()) {
      window.alert(`Please choose a date in the future`);
      startBtn.setAttribute(`disabled`, '');
    } else {
      startBtn.removeAttribute(`disabled`);
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartHandler() {
  setInterval(() => {
    const timeDifference = selectedDate - Date.now();
    days.textContent = addLeadingZero(convertMs(timeDifference).days);
    hours.textContent = addLeadingZero(convertMs(timeDifference).hours);
    minutes.textContent = addLeadingZero(convertMs(timeDifference).minutes);
    seconds.textContent = addLeadingZero(convertMs(timeDifference).seconds);
  }, 1000);
}

startBtn.setAttribute(`disabled`, '');

inputField.addEventListener(`input`, flatpickr('#datetime-picker', options));
startBtn.addEventListener(`click`, () => onStartHandler());

///styles
const timer = document.querySelector(`.timer`);
const field = document.querySelectorAll(`.field`);
const value = document.querySelectorAll(`.value`);

timer.style.cssText = `display: flex; gap: 30px; font-size: 36px; justify-content: center; font-weight: 600`;
field.forEach(element => {
  element.style.cssText = `display: flex; flex-direction: column; align-items: center`;
});
value.forEach(element => {
  element.style.fontSize = `96px`;
});
