(function(){
            // Replace with your actual EmailJS User ID if required
            emailjs.init("YOUR_USER_ID"); 
        })();

        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();
            emailjs.sendForm('service_1zyi415', 'template_zkfyzoh', this)
                .then(function() {
                    alert('Email sent successfully!');
                }, function(error) {
                    console.error('EmailJS Error:', error);
                    alert('Email sending failed! Please check the console for more details.');
                });
        });

        // Nav Overlay Logic
        const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const navOverlay = document.getElementById('navOverlay');

        menuBtn.onclick = () => navOverlay.classList.add('active');
        closeBtn.onclick = () => navOverlay.classList.remove('active');

        // Gallery Generation (16 views)
        const gallery = document.getElementById('gallery');
        for (let i = 1; i <= 16; i++) {
            gallery.innerHTML += `
                <div class="img-block">
                    <div class="img-frame">
                        <img src="images/cad/CAD_${i}.jpg" alt="View ${i}">
                    </div>
                    <div class="img-meta">
                        <span class="sheet-no">${i.toString().padStart(2, '0')}/16</span>
                        <span class="sheet-title">Technical Drill Jig View</span>
                    </div>
                </div>
            `;
        }


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('navOverlay');

        if (targetElement) {
            // 1. Close the mobile menu if it's open
            if (overlay) overlay.classList.remove('active');

            // 2. Scroll the sidebar specifically to the element
            sidebar.scrollTo({
                top: targetElement.offsetTop - 100, // -100 for some padding at the top
                behavior: 'smooth'
            });
        }
    });
});
