const elements = {
    nameInput: document.querySelector('#name-input'),
   nameSpan: document.querySelector('#name-output')
}
elements.nameInput.addEventListener('nameInput', handlerSearch);

function handlerSearch(evt) {
     nameSpan.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim() === '') {
        nameSpan.textContent = 'Anonymous';
    } 
    }