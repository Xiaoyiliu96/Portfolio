
  document.addEventListener('DOMContentLoaded', () => {
    const yearDisplay = document.querySelector('#current_year');
    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }
});
