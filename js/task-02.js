const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productIngridientEl = document.querySelector('#ingredients')


const makeList = ingredients.map(element => {
  
  const listEl = document.createElement('li');
  
  listEl.textContent = element;
 
  listEl.classList.add('item')
  
  return listEl;
});
productIngridientEl.append(...makeList);



