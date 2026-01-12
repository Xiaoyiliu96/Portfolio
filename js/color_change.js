 
const header = document.querySelector(".home_page_header");
const whiteSections = document.querySelectorAll(".white-section");

let isTop = true;

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
    isTop = true;
  } else {
    isTop = false;
  }
});
 