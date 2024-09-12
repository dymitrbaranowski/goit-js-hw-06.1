const categories = document.querySelector("#categories");
// console.dir(categories);
console.log(`Number of categories: ${categories.children.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
  //   console.log(item.children);
});

// const itemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${itemEl.length}`);

// itemEl.forEach(function (item) {
//   console.log(`Category: ${item.children[0].textContent}`);
//   console.log(`Elements: ${item.children[1].children.length}`);
// });
