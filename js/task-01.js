const listCategories = document.querySelector("#categories");
const categories = listCategories.children;
const numberCategories = categories.length;
console.log('Number of categories:' + numberCategories);

Array.from(categories).forEach((category) => {
    const titleCategories = category.firstElementChild;
    console.log('Category: ' + titleCategories.textContent);
    const itemsCategory = category.lastElementChild.children;
    console.log('Elements: ' + itemsCategory.length);
    });
