
/*
window.addEventListener("DOMContentLoaded", () => {
  const navCards = document.querySelectorAll("#wonderland-nav .nav-card");

  navCards.forEach((card, index) => {
     
    card.style.transformOrigin = "left center";

    setTimeout(() => {
      const cardWidth = card.offsetWidth;
      const jumpX = cardWidth / 20; 
      const jumpRotate = 0;         

      card.style.transition = "transform 0.5s ease";
      card.style.transform = `translateX(${jumpX}px) rotate(${jumpRotate}deg)`;

    
      setTimeout(() => {
        card.style.transition = "transform 0.3s ease";
        card.style.transform = "";  works
      }, 500);

    }, index * 400);  
  });
});*/


 
window.onload = function() {
    const divs = document.querySelectorAll('.nav-card');

    divs.forEach((div, index) => {
 
        const startDelay = index * 350; 

        setTimeout(() => {
  
            div.style.transition = "width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
            div.style.width = "380%";

       
            setTimeout(() => {
               
                div.style.transition = "width 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
                div.style.width = "100%";
            }, 1000);  

        }, startDelay);
    });
};

/************DOMContentLoaded*****************/
document.addEventListener("DOMContentLoaded", () => {
    const navCards = document.querySelectorAll('.nav-card');
    
 
    const observerOptions = {
        root: null,
        threshold: 0.5  
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                const id = entry.target.getAttribute('id');
                const targetCard = document.querySelector(`.nav-card[href="#${id}"]`);
                
                if (targetCard) {
                    triggerCardJump(targetCard);
                }
            } else {
                
                const id = entry.target.getAttribute('id');
                const targetCard = document.querySelector(`.nav-card[href="#${id}"]`);
                if (targetCard) {
                    targetCard.style.transition = "width 0.5s ease-in";
                    targetCard.style.width = "100%"; 
                }
            }
        });
    }, observerOptions);

   
    navCards.forEach(card => {
        const href = card.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            const section = document.querySelector(href);
            if (section) observer.observe(section);
        }
    });

    
    function triggerCardJump(card) {
        card.style.transition = "width 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)";
        card.style.width = "380%"; 

        setTimeout(() => {
      
            card.style.transition = "width 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
            card.style.width = "100%"; 
        }, 1200);
    }
});