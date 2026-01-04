const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});

let pushButton = document.querySelector('.button-open');
let additionalBrands = document.querySelector('.additional-card-container');
let arrowIcon = document.querySelector('.read-more__button-icon');

pushButton.addEventListener('click', function () {
    let buttonText = pushButton.textContent.trim();

    if (buttonText === 'Показать все') {
        pushButton.querySelector('span').nextSibling.textContent = 'Скрыть';
        additionalBrands.style.display = 'grid';
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        pushButton.querySelector('span').nextSibling.textContent = 'Показать все';
        additionalBrands.style.display = 'none';
        arrowIcon.style.transform = 'rotate(0deg)';
    }
});