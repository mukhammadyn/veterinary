let elsFaqItem = document.querySelectorAll('.useful-articles__item');
let elsFaqButton = document.querySelectorAll('.special-btn');

elsFaqButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsFaqItem.forEach(function (removeActive) {
      removeActive.classList.remove('article-card--active');
    });

    button.closest('.useful-articles__item').classList.add('article-card--active');
  });
});

// Event.preventdefault

// let elsModal = document.querySelector('.modal-window__wrapper');
// let elsAskButton = document.querySelector('.site-header__ask');
// let elsCloseBtn = document.querySelector('.modal-window__close-btn');

// elsAskButton.addEventListener('click', function(evt){
//   evt.preventDefault();
//   elsModal.classList.add('modal-window--open')
// })

// elsAskButton.addEventListener('click', function(){
//   elsModal.classList.add('modal-window--open')
// })

// elsCloseBtn.addEventListener('click', function(){
//   elsModal.classList.remove('modal-window--open')
// })




// js DOM traversy media
// Tugmani topamiz
// Modalni topamiz
// Tugma bosilganda (addEventListener) (evt)
// evt.preventdefault()
// Modalning klasslariga ochish klassini qo'shamiz


let elsOpenButton = document.querySelectorAll('.js-open-modal');
let elModalWindow = document.querySelector('.modal-window');
let elModalCloseButton = elModalWindow.querySelector('.js-close-modal');

function openModal() {
  elModalWindow.classList.add('modal-window--open');
}

function closeModal() {
  elModalWindow.classList.remove('modal-window--open');
}

if (elsOpenButton.length > 0) {
  elsOpenButton.forEach(function(link){
    link.addEventListener('click',function(evt){
      evt.preventDefault();
      openModal();
    })
  })
}

if (elModalCloseButton) {
  elModalCloseButton.addEventListener('click',function(){
    closeModal();
  })
}
