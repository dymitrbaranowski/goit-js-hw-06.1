const ingradientList = document.querySelector("#ingredients");
console.log(ingradientList);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");

  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
// console.log(...items);
ingradientList.append(...items);
