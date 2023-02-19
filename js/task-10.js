function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyeBtn: document.querySelector('[data-destroy]'),
  container: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBtn);
refs.destroyeBtn.addEventListener('click', onDestroyBtn);

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  for (let i = 1; i <= amount; i += 1) {
    refs.container.insertAdjacentHTML("afterbegin", `<div id="boxes-item"></div>`);
    const boxEl = document.querySelector('#boxes-item');

    boxEl.style.width = `${width += 10}px`;
    boxEl.style.height = `${height += 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    refs.container.style.display = 'flex';
    refs.container.style.flexDirection = 'column-reverse';
  };
};

  function onCreateBtn(event) {
    createBoxes(refs.input.value);
  }

  function onDestroyBtn(event) {
    refs.container.innerHTML = '';
    refs.input.value = '';
  }