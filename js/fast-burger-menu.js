const mobileMenu = document.querySelector('.js-mobile-menu');
const mobileMenuBtn = document.querySelector('.js-mobile-burger')
const mobileMenuCloseBtn = mobileMenu.querySelector('.mobile-menu__close');
const mobileMenuItems = mobileMenu.querySelectorAll('.mobile-menu__link, .mobile-menu__btn')

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (event) => {
        mobileMenu.classList.toggle('mobile-menu--active');
        document.body.style.overflow = "hidden";

        if (mobileMenuCloseBtn) {
            mobileMenuCloseBtn.addEventListener('click', () =>  {
                mobileMenu.classList.remove('mobile-menu--active')
                document.body.style.overflow = "";
            });
        }
    });

    addEventListener('resize', () => {

        if(window.innerWidth >= 899) {
            document.body.style.overflow = "";
            mobileMenu.classList.remove('mobile-menu--active')

        } else if (mobileMenu.classList.contains('mobile-menu--active')) {
            document.body.style.overflow = "hidden";

        } else {
            document.body.style.overflow = "";
        }
    });

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', ev => {
            mobileMenu.classList.remove('mobile-menu--active')
            document.body.style.overflow = "";
        })
    });
}
