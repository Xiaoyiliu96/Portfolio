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

 
