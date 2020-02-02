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