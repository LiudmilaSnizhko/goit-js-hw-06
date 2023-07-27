
let counterValue = 0;
const span = document.querySelector("#value");
  const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
  
decrementBtn.addEventListener("click", decrement)
incrementBtn.addEventListener("click", increment)

  
 function decrement() {
     counterValue -= 1;
     span.textContent = counterValue
  };

  function increment() {
     counterValue += 1;
     span.textContent = counterValue
  };
