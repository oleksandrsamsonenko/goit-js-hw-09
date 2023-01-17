import Notiflix from 'notiflix';

const delayInput = document.querySelector(`[name="delay"]`);
const stepInput = document.querySelector(`[name="step"]`);
const amountInput = document.querySelector(`[name="amount"]`);
const submitBtn = document.querySelector(`button`);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  delay = +delayInput.value + position * delay;
  position += 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delayInput.value);
  });
}

submitBtn.addEventListener(`click`, () => {
  event.preventDefault();
  for (let i = 0; i < amountInput.value; i += 1) {
    setTimeout(() => {
      createPromise(i, stepInput.value)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
          // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
          // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, +delayInput.value + i * stepInput.value);
  }
});

//   return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       resolve({ position, delay });
//       // Fulfill
//     } else {
//       reject({ position, delay });
//       // Reject
//     }
//   });
// }

// submitBtn.addEventListener(`click`, () => {
//   event.preventDefault();

//   for (let i = 0; i < amount.value; i += 1) {
//     setTimeout(() => {
//       console.log(+delay.value + i * step.value);
//       let stepTime = +delay.value + i * step.value;
//       createPromise(delay.value, step.value)
//         .then(({ position, delay }) =>
//           console.log(`✅ Fulfilled promise ${i + 1} in ${stepTime}ms`)
//         )
//         .catch(({ position, delay }) =>
//           console.log(`❌ Rejected promise ${i + 1} in ${stepTime}ms`)
//         );
//     }, +delay.value + i * step.value);
//   }
// });
