function toggleMenu() {
  const menu = document.getElementById("myLinks");
  const topNav = document.getElementById("top_navs");

  menu.classList.toggle("open");
  topNav.classList.toggle("hidden");

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
    const menu = document.getElementById("myLinks");
  const topNav = document.getElementById("top_navs");

  menu.classList.toggle("open");
  topNav.classList.toggle("hidden"); 
}

function covid19_card() {
  const contactCard = document.getElementById("contact_me_card");
  const mainCard = document.getElementById("main-card");

  contactCard.style.display = "none";
  mainCard.style.display = "flex";
}
 

