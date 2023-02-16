const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// ---------------Варіант 1------------
// const makeImageCard = ({url, alt}) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');

//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery__img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 240;

//   itemEl.appendChild(imageEl);
//   return itemEl;
// };
// const elements = images.map(makeImageCard);
// console.log(elements);

// const listEl = document.querySelector('.gallery');
// listEl.append(...elements);

// ---------------Варіант 2------------
const makeGalleryMarkUpElement = ({url, alt}) => {
  return `
  <li class="gallery__item">
    <img class="gallery__img" src="${url}" alt="${alt}" width=420></img>
  </li>
  `
};

const makeGalleryMarkUp = images.map(makeGalleryMarkUpElement).join('');
// console.log(makeGalleryMarkUp);

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML("afterbegin", makeGalleryMarkUp);