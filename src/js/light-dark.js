const body = document.querySelector('body');
const themeToggle = document.querySelector('input[name = switcher_checkbox]');

themeToggle.addEventListener('change', handlerThemeChange);

let getMode = localStorage.getItem('mode');
if (getMode && getMode === 'dark') {
  body.classList.add('dark');
  themeToggle.checked = true;
} else {
  body.classList.remove('dark');
}

function handlerThemeChange() {
  if (themeToggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  }
}
