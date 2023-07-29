const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener('input', handlerInput);
function handlerInput() {
    span.style.fontSize = `${input.value}px`;
}
