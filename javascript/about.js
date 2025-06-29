document.addEventListener("DOMContentLoaded", () => {
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top < window.innerHeight - 100 &&
          rect.bottom > 0
        );
      }
    
      function checkElements() {
        document.querySelectorAll('.about-img-1, .about-img-2, .about-img-3').forEach(el => {
          if (isInViewport(el)) {
            el.classList.add('about-animation');
          }
        });
      }
    
      window.addEventListener('scroll', checkElements);
      window.addEventListener('load', checkElements);
  });
  
