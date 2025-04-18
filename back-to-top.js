document.addEventListener('DOMContentLoaded', function() {
  const topBtn = document.getElementById('topBtn');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      topBtn.classList.remove('d-none');
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.add('d-none');
      topBtn.classList.remove('visible');
    }
  });
  
  topBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
