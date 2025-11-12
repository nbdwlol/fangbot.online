document.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapsible-btn');

  collapsibles.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      button.classList.toggle('active');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = '0 1rem';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '1rem';
      }
    });
  });
});
