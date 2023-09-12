const listCategories = document.querySelector("#categories");
const categories = listCategories.querySelectorAll(".item");
const numberCategories = categories.length;
console.log('Number of categories:' + numberCategories);
categories.forEach((category) => {
    const titleCategories = category.querySelector("h2");
    console.log('Category: ' + titleCategories.textContent);
    const itemsCategory = category.querySelectorAll("li");
    console.log('Elements: ' + itemsCategory.length);
});