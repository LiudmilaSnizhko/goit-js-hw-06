
const categories = document.querySelectorAll('.item');
console.log(`Number of categories:`, categories.length);

categories.forEach((category) => {

    const text = category.firstElementChild.textContent;
    console.log(`Category: ${text}`);

    const list = category.lastElementChild.children;
    
    console.log(`Elements: ${list.length}`);
    
   });
