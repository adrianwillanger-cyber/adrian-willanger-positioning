// Hero exhibit rotator — respects reduced-motion preference.
(function () {
  const list = document.getElementById('exhibitCycle');
  if (!list) return;
  const items = Array.from(list.querySelectorAll('li'));
  if (items.length < 2) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return; // keep first item visible

  let i = 0;
  setInterval(() => {
    items[i].classList.remove('is-active');
    i = (i + 1) % items.length;
    items[i].classList.add('is-active');
  }, 3800);
})();
