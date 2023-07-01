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
