const elTitle = document.getElementById('name');
const elAutor = document.getElementById('autor');
const elYear = document.getElementById('let');
const elName = document.querySelector('.th-name');
const elAuthor = document.querySelector('.th-autor');
const elLet = document.querySelector('.th-let');
const elForm = document.getElementById('book-form');
const elBtn = document.querySelector('.btn')

elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if(elTitle.value){
        elName.textContent = elTitle.value;
    }
    if(elAutor.value){
        elAuthor.textContent = elAutor.value;
    }
    if(elYear.value){
        elLet.textContent = elYear.value;
    }
})
