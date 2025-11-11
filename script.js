// ----------------------------
// Smooth Collapsible Animation
// ----------------------------
document.querySelectorAll(".collapsible-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");

    if (content.style.maxHeight) {
      // Collapse smoothly
      content.style.maxHeight = null;
    } else {
      // Expand smoothly
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
