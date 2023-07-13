const counterEl = document.querySelector('#counter');
// console.log(counterEl);
const finValue = document.querySelector('#value');

let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.addEventListener("click", () => {
    // console.log("Button was clicked btnDecrement");
    counterValue -= 1;
    console.log(counterValue);
    finValue.textContent = counterValue;
})

const btnIncrement = document.querySelector('[data-action="increment"]');
btnIncrement.addEventListener("click", () => {
    // console.log("Button was clicked btnIncrement");
    counterValue += 1;
    console.log(counterValue);
    finValue.textContent = counterValue;
})

console.log(counterValue);

// finValue.textContent = counterValue;
console.log(finValue.textContent);
