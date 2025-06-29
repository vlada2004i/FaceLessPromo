document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.querySelector(".loading-title");
    const preloader = document.querySelector(".preloader");
    let progress = 0;
  
    const interval = setInterval(() => {
      progress++;
      loadingText.textContent = `${progress}%`;
  
      if (progress >= 100) {
        clearInterval(interval);
        
        preloader.style.transition = "opacity 1s ease";
        preloader.style.opacity = "0";
  
        setTimeout(() => {
          window.location.href = "about.html";
        }, 1000);
      }
    }, 20);
  });
  