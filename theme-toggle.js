document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('theme-btn');
  const html = document.documentElement;
  
  // Check for saved theme preference or use the default
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-bs-theme', savedTheme);
  updateThemeButton(savedTheme);
  
  themeBtn.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
  });
  
  function updateThemeButton(theme) {
    themeBtn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
    themeBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
});
