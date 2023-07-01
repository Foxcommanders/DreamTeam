(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');
  const lockBody = document.body;
  let isBackgroundChange = false;
  let isTransitionInProgress = false;

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    lockBody.classList.toggle('lock-body');
    mobileMenuRef.classList.toggle('is-open');

    if (!isTransitionInProgress) {
      isTransitionInProgress = true;

      if (isBackgroundChange) {
        requestAnimationFrame(() => {
          lockBody.classList.remove('purpul-background');
          isBackgroundChange = false;
          isTransitionInProgress = false;
        });
      } else {
        setTimeout(() => {
          lockBody.classList.add('purpul-background');
          isBackgroundChange = true;
          isTransitionInProgress = false;
        }, 250);
      }
    }
  });

  for (let i = 0; i < mobileLinks.length; i += 1) {
    mobileLinks[i].addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      lockBody.classList.toggle('lock-body');
      const expand =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
      menuBtnRef.setAttribute('aria-expanded', !expand);
    });
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);
    lockBody.classList.remove('lock-body');
    menuBtnRef.classList.remove('is-open');
    lockBody.classList.remove('purpul-background');
    isBackgroundChange = false;
  });
})();
