const listCategories = document.querySelector("#categories");
const categories = listCategories.querySelectorAll(".item");
const numberCategories = categories.length;
console.log('Number of categories:' + numberCategories);
listCategories.forEach(() => {
    const titleCategories = categories.querySelector("h2");
    console.log(titleCategories);
});