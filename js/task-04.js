let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementClick);
refs.incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick (event) {
    console.log('Декремент!!!');
    counterValue -= 1;
    refs.counterEl.textContent = counterValue;
};

function onIncrementClick (event) {
    console.log('Інкремент!!!');
    counterValue += 1;
    refs.counterEl.textContent = counterValue;
};