// Ссылка на api -> https://swiperjs.com/swiper-api#swiper-full-html-layout
import Swiper, { Keyboard, Mousewheel, FreeMode, Grid, Navigation } from 'swiper';

// стили ->    (не нужны т.к. я задал свои)
//  import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.js';

const swiper = new Swiper(".slider", {

    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__item',
    touchEventsTarget: 'slider__wrapper',
    slideActiveClass: 'slider__item--active',
    slideNextClass: 'slider__item-next',
    slidePrevClass: 'slider__item-prev',

    modules: [
        Keyboard,
        Mousewheel,
        FreeMode,
        Grid,
        Navigation
    ],

    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },

    breakpoints: {
        1: {
            // Количество вывода
            slidesPerView: 1,
            // Растояние между slide
            spaceBetween: 20,
            // строки
            grid: {
                rows: 4,
            },
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                rows: 4,
            },
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 18,
            grid: {
                rows: 4,
            },
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
                rows: 3,
            },
        },
    },

    // Чуствительность свайпа // 0 -> запретить перетаскивать
    // touchRatio: 1,
    //Угол срабатывания свайпа
    // touchAngle: 50,
    // Курсор перетаскивания
    grabCursor: true,
    // Переключение при клике на слайд
    //slideToClickedSlide: false,
    // Навигация по хешу
    // hashNavigation: {
    //     // Отслеживать состояние
    //     watchState: true,
    // },

    // Управление клавиатурой
    keyboard: {
        enabled: true,
        // Вкл/Выкл при видимости в пределах вьюпорта
        onlyInViewport: true,
        // Вкл/Выкл упр. клавиатурой
        pageUpDown: false,
    },

    // Управление мышью/тачпад
    mousewheel: {
        sensitivity: 1,
        // Отключение вертикальной прокрутки
        forceToAxis: true,
    },

    // Перетаскивание славдов без фиксированных позиций
    freeMode: {
        enabled: false,
        // скольжение слайда
        //momentum: true,
        // Чем выше значение, тем сильнее эффект скольжения
        //momentumBounceRatio: 0.3,
        // Чем выше значение, тем больше расстояние скольжения
        //momentumRatio: 0.3,
        // Чем выше значение, тем выше скорость скольжения
        //momentumVelocityRatio: 0.3,
    },
});
