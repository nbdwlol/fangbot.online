// select all collapsible buttons
const collapsibles = document.querySelectorAll('.collapsible-btn');

collapsibles.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // if already expanded, collapse
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = '0';
      content.style.paddingBottom = '0';
    } else {
      // collapse all other sections first (optional, for single open at a time)
      collapsibles.forEach(btn => {
        const otherContent = btn.nextElementSibling;
        if (otherContent !== content) {
          otherContent.style.maxHeight = null;
          otherContent.style.paddingTop = '0';
          otherContent.style.paddingBottom = '0';
        }
      });

      // expand this section
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = '0.5rem';
      content.style.paddingBottom = '0.5rem';
    }
  });
});
