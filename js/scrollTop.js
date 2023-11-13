/* Debounce */

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
    const context = this;
    const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

/* Button Scroll Top */

function scroll(){
    const btnTop = window.document.querySelector(".scrollTop")

    if (document.documentElement.scrollTop > 350) {
        btnTop.classList.add("visible")

        btnTop.addEventListener("click", () => {
            document.documentElement.scrollTop = 0
        })
    } else {
        btnTop.classList.remove("visible")
    }
}

window.addEventListener("scroll", debounce(function(){
    scroll()
}, 200))
