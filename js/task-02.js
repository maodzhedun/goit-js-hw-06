const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productIngridientEl = document.querySelector('#ingredients')
console.log(productIngridientEl);

const makeList = ingredients.map(element => {
  
  const listEl = document.createElement('li');
  console.log(listEl);
  listEl.textContent = element;
  // console.log(element); 
  listEl.classList.add('item')
  // console.log(listEl.classList);
  return listEl;
});
productIngridientEl.append(...makeList);

// console.log(element);

