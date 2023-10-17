let modalCall = document.querySelector('.modal__buttton');
let modal = document.querySelector('.modal_wrap');
let overlayClose = document.querySelector('.overlay');
let crossClose = document.querySelector('.modal__cross');

modalCall.addEventListener('click', function(openModal){
    console.log(1);
    modal.classList.add('modal_wrap--active');
})

overlayClose.addEventListener('click', function(closeModal){
    console.log(2);
    modal.classList.remove('modal_wrap--active');
})

crossClose.addEventListener('click', function(closeModal){
    console.log(3);
    modal.classList.remove('modal_wrap--active');
})