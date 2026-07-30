document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('navMenu');
    const projectsDropdown = document.getElementById('projectsDropdown');
    const dropdownBtn = projectsDropdown?.querySelector('.dropdown-btn');
    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');

    if (!navToggle || !navMenu || !projectsDropdown || !dropdownBtn) {
        console.error("Navigation elements missing.");
        return;
    }

    function openMenu() {
        navToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    }

    function closeSubmenu() {
        projectsDropdown.classList.remove('is-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
    }

    function closeMenu() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
        document.body.style.overflow = '';
        closeSubmenu();
    }

    function toggleMenu() {
        navMenu.classList.contains('is-active')
            ? closeMenu()
            : openMenu();
    }

    function toggleSubmenu(e) {
        e.preventDefault();
        projectsDropdown.classList.toggle('is-open');
        dropdownBtn.setAttribute(
            'aria-expanded',
            projectsDropdown.classList.contains('is-open')
        );
    }

    navToggle.addEventListener('click', toggleMenu);
    dropdownBtn.addEventListener('click', toggleSubmenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (
            navMenu.classList.contains('is-active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            navToggle.focus();
        }
    });
});