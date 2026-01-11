document.querySelector('a[href="#main_bg"]').addEventListener('click', function(e) {
  e.preventDefault(); // Prevents the default "jump"
  
  const target = document.querySelector('#main_bg');
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});