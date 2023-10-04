document.addEventListener("DOMContentLoaded", function (event) {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animation__scale-in");
            } else {
                entry.target.classList.remove("animation__scale-in");
            }
        });
    };

    const animated = document.getElementsByClassName('animation');
    Array.prototype.forEach.call(animated, el => {
        const Obs = new IntersectionObserver(inViewport);
        const obsOptions = {};

        Obs.observe(el, obsOptions);
    })
});