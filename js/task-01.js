// кількість категорій в ul#categories

// const itemEl = document.querySelectorAll('.item');
// console.log('Number of categories:' , itemEl.length);

// const titleEl = document.querySelectorAll('h2');
// console.log('Category:' , titleEl[0].textContent);

// const elementsEl = document.querySelectorAll('.item li');
// console.log(elementsEl);

const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);
const itemEl = categoriesEl.children;
console.log('Number of categories:' , itemEl.length);

const titleEl = document.querySelectorAll('h2');
console.log('Category:' , titleEl[0].textContent);

const innerUlEl = itemEl[0].lastElementChild;
const innerLiEl = innerUlEl.querySelectorAll('li');
console.log('Elements: ' , innerLiEl.length);
