function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);

let intervalID;

startBtn.addEventListener(`click`, onStart);
stopBtn.addEventListener(`click`, onStop);

function onStart() {
  console.log(`interval setted to 1000ms`);
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(`color changed to -> ${document.body.style.backgroundColor}`);
  }, 700);
}

function onStop() {
  console.log(`interval cleared`);
  clearInterval(intervalID);
}
