const hearderAfterScrolling = function () {
    const header = document.querySelector('.header');
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    }
};

hearderAfterScrolling();

const burgerHandler = function () {
    const burgerItem = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    const headerCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', function () {
        headerNav.classList.add('header__nav_active');
    });
    headerCloseItem.addEventListener('click', () => {
        headerNav.classList.remove('header__nav_active');
    });

};

burgerHandler();