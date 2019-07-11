let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let closeCrosses = document.querySelectorAll('div.modal__close');
let btn = document.querySelector('a.show-success');

modalMain.classList.add('modal_active');

for (let cross of closeCrosses) {
    cross.addEventListener('click', function () {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    });
}

btn.addEventListener('click', function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});