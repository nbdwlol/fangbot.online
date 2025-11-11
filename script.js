// select all collapsible buttons
const collapsibleButtons = document.querySelectorAll(".collapsible-btn");

collapsibleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // toggle active state for styling
    this.classList.toggle("active");

    // get the corresponding content
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // if already expanded, collapse it
      content.style.maxHeight = null;
    } else {
      // expand smoothly
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
