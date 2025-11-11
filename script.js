// Smooth collapsible logic
document.querySelectorAll(".collapsible-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Close other open collapsibles
    document.querySelectorAll(".collapsible-content").forEach(other => {
      if (other !== content) {
        other.style.maxHeight = null;
        other.classList.remove("open");
      }
    });

    if (content.classList.contains("open")) {
      content.style.maxHeight = null;
      content.classList.remove("open");
    } else {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Fake status check
const statusElement = document.getElementById("status");
setTimeout(() => {
  statusElement.textContent = "status: online ✅";
  statusElement.classList.remove("offline");
  statusElement.classList.add("online");
}, 1000);
