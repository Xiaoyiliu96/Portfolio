document.querySelector('a[href="#main_bg"]').addEventListener('click', function(e) {
  e.preventDefault();  
  
  const target = document.querySelector('#main_bg');
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});





