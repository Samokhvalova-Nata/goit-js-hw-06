const input = document.querySelector('#validation-input');
const dataLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length == dataLength) {
        input.classList.add('valid');
        input.classList.replace('invalid', 'valid');
    } else
    input.classList.add('invalid')
};
