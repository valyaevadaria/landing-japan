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
    const headerLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', function () {
        headerNav.classList.add('header__nav_active');
    });
    headerCloseItem.addEventListener('click', () => {
        headerNav.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < headerLinks.length; i+=1) {
            headerLinks[i].addEventListener('click', function () {
                headerNav.classList.remove('header__nav_active');
            });
        }
    }

};

burgerHandler();


const slowlyScroll = function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(timeElapsed,start,target,duration) {
            timeElapsed /= duration / 2;
            if (timeElapsed < 1) return target / 2 * timeElapsed * timeElapsed + start;
            timeElapsed--;
            return -target / 2 * (timeElapsed * (timeElapsed - 2) - 1) + start;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
};

slowlyScroll();