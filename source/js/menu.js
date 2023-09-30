document.addEventListener('readystatechange', event => {
    if (document.readyState == "complete") {
        function onMenuClick() {
            isOpen = !isOpen;
            if (isOpen) {
                menu.style.display = 'block';
                icon.src = 'm-close.svg';
            } else {
                menu.style.display = 'none';
                icon.src = 'mobile-menu.svg';
            }
        };

        var isOpen = false;
        var menu = document.getElementsByClassName('header__menu')[0];
        var icon = document.getElementsByClassName('header__icon')[0];
        icon.onclick = onMenuClick;
    }
});