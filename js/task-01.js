const listEl = document.querySelector('#categories');
console.log(`Number of categories:, ${listEl.children.length}`);
[...listEl.children].forEach(element => {
    let titleEl = element.firstElementChild;
    let itemEl = element.lastElementChild.children;
    // const titleEl2 = element.querySelector('h2')
    // console.log(titleEl2.textContent);
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${itemEl.length}`);
});

// const ItemEl3 = listEl.firstElementChild.children[1].querySelectorAll('li');
// console.log(ItemEl3);