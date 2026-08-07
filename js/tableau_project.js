/******** EMAIL JS ********/
(function () {
    emailjs.init("4R44izEO1n-dseC1Z");
})();

// Bind all contact forms (desktop + mobile)
document.querySelectorAll(".contact-form").forEach(form => {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_1zyi415",
            "template_zkfyzoh",
            this
        )
        .then(() => {
            alert("Email sent successfully!");
            this.reset();
        })
        .catch(error => {
            console.error("EmailJS Error:", error);
            alert("Email sending failed!");
        });
    });
});


/******** NAV OVERLAY ********/
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navOverlay = document.getElementById('navOverlay');

if (menuBtn && closeBtn && navOverlay) {
    menuBtn.onclick = () => navOverlay.classList.add('active');
    closeBtn.onclick = () => navOverlay.classList.remove('active');
}


/******** GALLERY (37 PAGES) ********/
const gallery = document.getElementById('gallery');

if (gallery) {
    gallery.innerHTML = ''; // Clear existing content
    
    for (let i = 1; i <= 37; i++) {
        // Formats number to 4 digits: 1 -> 0001, 37 -> 0037
        const pageNum = i.toString().padStart(4, '0');
        
        gallery.innerHTML += `
            <div class="img-block">
                <div class="image-frame">
                    <img src="images/Superstore_Tableau_Project/Xiaoyi Liu_Superstore Tableau Project_page-${pageNum}.jpg" alt="Superstore Project Page ${i}" loading="lazy">
                </div>
                <div class="img-meta">
                    <span class="sheet-no">${i.toString().padStart(2, '0')}/37</span>
                    <span class="sheet-title">Superstore Tableau Project View</span>
                </div>
            </div>
        `;
    }
}


/******** SMOOTH SCROLL — DESKTOP + MOBILE ********/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (!targetElement || targetElement.offsetParent === null) return;

        const isMobile = window.innerWidth <= 1024;

        if (isMobile) {
            // MOBILE: scroll the page
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: 'smooth'
            });
        } else {
            // DESKTOP: scroll sidebar
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }

        // Close nav overlay if open
        if (navOverlay) navOverlay.classList.remove('active');
    });
});


/******** HEADER LIGHT-BG ON SCROLL ********/
const header = document.querySelector(".minimal-nav");
const whiteSections = document.querySelectorAll(".white-section");

if (header && whiteSections.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            if (window.scrollY === 0) return;  

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.add("light-bg");
                } else {
                    header.classList.remove("light-bg");
                }
            });
        },
        {
            rootMargin: "-80px 0px 0px 0px",
            threshold: 0.1
        }
    );

    whiteSections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            header.classList.remove("light-bg");
        }
    });
}