document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    function checkScroll() {
        if (window.scrollY === 0) {
            header.classList.remove('solid');
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
            header.classList.add('solid');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case the page is not at the top
});