// ===============scrolUp=================//

(() => {
  const scrollToTop = document.querySelector('.scroll-up');

  const scrollToTopHandler = (event) => {
    event.preventDefault();
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 600;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const scrolledPixels = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, scrolledPixels);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else if (window.scrollY !== targetPosition) {
        window.scrollTo(0, targetPosition);
      }
    };

    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    window.requestAnimationFrame(step);
  };

  scrollToTop.addEventListener('click', scrollToTopHandler);

  const showBtn = window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  });
})();