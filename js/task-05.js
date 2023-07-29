const elements = {
    nameInput: document.querySelector('#name-input'),
   nameSpan: document.querySelector('#name-output')
}
elements.nameInput.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
     elements.nameSpan.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim() === '') {
        elements.nameSpan.textContent = 'Anonymous';
    }
};

