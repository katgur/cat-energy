// document.addEventListener("DOMContentLoaded", function (event) {
//     document.addEventListener("scroll", function (event) {
//         const animatedBoxes = [...document.getElementsByClassName("promo__title"), ...document.getElementsByClassName("promo__text")];
//         const windowOffsetTop = window.innerHeight + window.scrollY;

//         Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
//             const animatedBoxOffsetTop = animatedBox.offsetTop;

//             if (windowOffsetTop >= animatedBoxOffsetTop) {
//                 addClass(animatedBox, "fade-in");
//             }
//         });
//     });
// });

// function addClass(element, className) {
//     const arrayClasses = element.className.split(" ");
//     if (arrayClasses.indexOf(className) === -1) {
//         element.className += " " + className;
//     }
// }

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
document.querySelectorAll('[data-inviewport]').forEach(el => {
    Obs.observe(el, obsOptions);
});