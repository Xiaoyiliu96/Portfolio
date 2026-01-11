function toggleMenu() {
  document.getElementById("myLinks").classList.toggle("open");
  document.getElementById("top_navs").classList.toggle("hidden");
}


function sidenav() {
  const nav = document.getElementById("wonderland-nav");

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function togglenav() {
  const dropdown = document.getElementById("myLinks");
  const topNav = document.getElementById("top_navs");

  dropdown.classList.toggle("open");
  topNav.classList.toggle("hidden");
}

 


function contact_me_card() {
  const contactCard = document.getElementById("contact_me_card");
  const mainCard = document.getElementById("main-card");

  const isHidden =
    window.getComputedStyle(contactCard).display === "none";

  if (isHidden) {
    contactCard.style.display = "flex";
    mainCard.style.display = "none";
  }  
}

function covid19_card() {
  const contactCard = document.getElementById("contact_me_card");
  const mainCard = document.getElementById("main-card");

  contactCard.style.display = "none";
  mainCard.style.display = "flex";
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
 
