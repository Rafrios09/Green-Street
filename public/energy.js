
//Energy Image part//
document.addEventListener("DOMContentLoaded", function() {
    const energyImage = document.querySelectorAll("");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(energyImage);
});
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the DOM to be fully loaded
  var html = document.documentElement;
  var body = document.body;

  // Function to trigger smooth-scroll animation
  function triggerSmoothScroll() {
    body.style.animation = 'smooth-scroll 2s ease-in-out';
    body.style.position = 'static';

    // Remove the animation after completion
    setTimeout(function() {
      body.style.animation = '';
    }, 2000);
  }

  // Attach smooth scroll trigger to a button or any other element
  var triggerButton = document.getElementById('body1');

  if (triggerButton) {
    triggerButton.addEventListener('click', function() {
      triggerSmoothScroll();
    });
  }
});
