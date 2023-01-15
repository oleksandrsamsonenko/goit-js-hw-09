function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);

startBtn.style.cssText += `
    padding: 25px 50px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-105%, -50%);
    text-transform: uppercase;
`;

stopBtn.setAttribute(`disabled`, ``);
stopBtn.style.cssText += `
    padding: 25px 50px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(5%, -50%);
    text-transform: uppercase;
`;

function onStart() {
  console.log(`background color change interval settled to 1000ms`);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    const date = new Date();
    console.log(
      `color changed to -> ${
        document.body.style.backgroundColor
      } at ${date.toLocaleTimeString()}`
    );
  }, 1000);
}

function onStop() {
  console.log(`background color change interval is cleared`);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  clearInterval(intervalID);
}

let intervalID;

startBtn.addEventListener(`click`, onStart);
stopBtn.addEventListener(`click`, onStop);
