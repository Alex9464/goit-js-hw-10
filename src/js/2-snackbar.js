import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(form.elements['delay'].value);
  const state = form.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });


  promise
    .then((fulfilledDelay) => {
      console.log(`✅ Fulfilled promise in ${fulfilledDelay} ms`);


      iziToast.show({
        message: `✅ Fulfilled promise in ${fulfilledDelay} ms`,
        position: 'topRight',
        backgroundColor: '#a8d5ba',
        color: '#fff',
        timeout: 3000,
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
      });
    })
    .catch((rejectedDelay) => {
      console.log(`❌ Rejected promise in ${rejectedDelay} ms`);

      iziToast.show({
        message: `❌ Rejected promise in ${rejectedDelay} ms`,
        position: 'topRight',
        backgroundColor: '#f4b6b1',
        color: '#fff',
        timeout: 3000,
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
      });
    });
});