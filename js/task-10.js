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
  let arrayElements = [];

  for (let i = 1; i <= amount; i += 1) {
    let color =  getRandomHexColor();
    arrayElements.push(`
    <div id="boxes-item" style="width: ${width += 10}px; height: ${height += 10}px; background-color: ${color};"></div>
    `);
  };

  return arrayElements.join('');
};

  function onCreateBtn(event) {
    refs.container.insertAdjacentHTML("afterbegin", createBoxes(refs.input.value));
  }

  function onDestroyBtn(event) {
    refs.container.innerHTML = '';
    refs.input.value = '';
  }
