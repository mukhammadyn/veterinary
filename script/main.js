let elsFaqItem = document.querySelectorAll('.use-article__inner');
let elsFaqButton = document.querySelectorAll('.use-article__btn');

elsFaqButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsFaqItem.forEach(function (removeActive) {
      removeActive.classList.remove('use-article__inner--active');
    });

    button.closest('.use-article__inner').classList.add('use-article__inner--active');
  });
});