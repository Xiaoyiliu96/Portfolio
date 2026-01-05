const slideElements = document.querySelectorAll('.slide_up');

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  
        }
    });
}, { threshold: 0.2 });

slideElements.forEach(el => slideObserver.observe(el));