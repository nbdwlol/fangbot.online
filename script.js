document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-banner');
  const banner = document.getElementById('top-banner');

  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hide'); // add hide class to smoothly slide up
    });
  }

  // COLLAPSIBLE SECTION CODE (smooth open/close)
  const collapsibles = document.querySelectorAll('.collapsible-btn');
  collapsibles.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
