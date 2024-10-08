// debounce is a function to create the timeout for any scroll event.

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImage = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImage.forEach(sliderImage => {
        // console.log(window.scrollY);
        // console.log(window.innerHeight);
        // console.log(sliderImage.height);

        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // console.log(sliderImage.height);

        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfshown = slideInAt > sliderImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;

        if (isHalfshown && isNotScrollPast) {
            sliderImage.classList.add('active');
        }
        else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));