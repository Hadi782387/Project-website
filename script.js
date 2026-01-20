const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');

menuOpenBtn.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});
menuCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});