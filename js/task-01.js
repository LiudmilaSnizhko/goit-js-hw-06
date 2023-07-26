
const categories = document.querySelectorAll('.item');
console.log(`Number of categories:`, categories.length);

categories.forEach((category) => {

    const text = category.querySelector("h2").textContent;
    console.log(`Category: ${text}`);

    const list = category.querySelectorAll("li");
    // const element = list.length;

    console.log(`Elements: ${list.length}`);
    
   });
