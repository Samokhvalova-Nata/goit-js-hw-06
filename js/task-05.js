const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        refs.span.textContent = 'Anonymous'
    } else
    refs.span.textContent = event.currentTarget.value;
};