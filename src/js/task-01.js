const listElem = document.querySelector("#categories");
const categoriesList = document.querySelectorAll("#categories .item");


console.log(`Number of categories:${listElem.children.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsList = category.querySelectorAll("li");
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsList.length}`);
});