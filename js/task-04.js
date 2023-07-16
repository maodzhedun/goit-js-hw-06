const counterEl = document.querySelector('#counter');
const finValue = document.querySelector('#value');

let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    console.log(counterValue);
    finValue.textContent = counterValue;
})

const btnIncrement = document.querySelector('[data-action="increment"]');
btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    console.log(counterValue);
    finValue.textContent = counterValue;
})

