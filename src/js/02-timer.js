import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector(`input`);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(selectedDates);
  },
};

inputField.addEventListener(`click`, flatpickr('#datetime-picker', options));
