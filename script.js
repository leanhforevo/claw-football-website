const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('claw-football-theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  toggle.textContent = '☀';
}

toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('claw-football-theme', isLight ? 'light' : 'dark');
  toggle.textContent = isLight ? '☀' : '☾';
});
