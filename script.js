const navbarNav = document.querySelector('navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active')
};
