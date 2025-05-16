document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
  this.reset();
});
//const cursorTracker = document.getElementById('cursor-tracker');
//document.addEventListener('mousemove', (e) => {
    // Update the cursor tracker's position
 //   cursorTracker.style.left = `${e.pageX - 10}px`;
//    cursorTracker.style.top = `${e.pageY - 10}px`;
//}); 
