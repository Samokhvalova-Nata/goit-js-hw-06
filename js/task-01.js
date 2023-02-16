// кількість категорій в ul#categories
const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:' , itemEl.length);

// текст заголовку елемента і кількість елементів в категорії

// -----------  Варіант 1-----------
// itemEl.forEach(element => {
//     const titleEl = element.querySelector('h2');
//     const innerLiEl = element.querySelectorAll('li');

//     console.log('Category:' , titleEl.textContent);
//     console.log('Elements:' , innerLiEl.length);
// });

// -----------  Варіант 2-----------
itemEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const innerLiEl = element.lastElementChild.children;

    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , innerLiEl.length);
});