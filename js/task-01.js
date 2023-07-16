const listEl = document.querySelector('#categories');
console.log(`Number of categories:, ${listEl.children.length}`);
[...listEl.children].forEach(element => {
    let titleEl = element.firstElementChild;
    let itemEl = element.lastElementChild.children;
    
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${itemEl.length}`);
});