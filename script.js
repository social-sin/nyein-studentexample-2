// scroll smooth 
document.addEventListener('DOMContentLoaded', function() {
  
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // shadow to header
  const header = document.querySelector('.main-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 12px rgba(61, 40, 23, 0.2)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(61, 40, 23, 0.1)';
    }
  });
  
  console.log('The Neko Tourist loaded!');
  
});
