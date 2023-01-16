// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const delay = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const submitBtn = document.querySelector(`button`);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
      // Fulfill
    } else {
      reject({ position, delay });
      // Reject
    }
  });
}

submitBtn.addEventListener(`click`, () => {
  event.preventDefault();

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(delay.value, step.value)
      .then(({ position, delay }) =>
        console.log(`✅ Fulfilled promise ${i} in ${step.value * i}ms`)
      )
      .catch(({ position, delay }) =>
        console.log(`❌ Rejected promise ${i} in ${step.value * i}ms`)
      );
  }
});

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
