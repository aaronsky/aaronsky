window.addEventListener('scroll', onScroll);

function onScroll(e) {
    var navbar = document.getElementById('nav');
    if (navbar) {
        var titleEl = document.getElementById('masthead');
        if (titleEl && titleEl.getBoundingClientRect().bottom < 0) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }
}
