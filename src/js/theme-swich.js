function addDarkClassToBody() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.getElementById('checkbox').setAttribute('checked', true);
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}
document
  .querySelector('input[name = themetoggle]')
  .addEventListener('change', event => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToBody();
  });

addDarkClassToBody();

const switchInput = document.querySelector('input[type="checkbox"]');
const switchSlider = document.querySelector('.slider');
const savedSwitchState = localStorage.getItem('switchState');
if (savedSwitchState === 'true') {
  switchInput.checked = true;
  switchSlider.classList.add('active');
} else {
  switchInput.checked = false;
  switchSlider.classList.remove('active');
}
switchInput.addEventListener('change', event => {
  const isChecked = event.target.checked;
  localStorage.setItem('switchState', isChecked);
  if (isChecked) {
    switchSlider.classList.add('active');
  } else {
    switchSlider.classList.remove('active');
  }
});
