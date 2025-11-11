// Live bot status (replace with your bot's user ID)
const BOT_ID = "1436480231224512656";
const statusEl = document.getElementById("status");

async function checkBotStatus() {
  try {
    const response = await fetch(`https://discord.com/api/users/${BOT_ID}`);
    if (response.ok) {
      statusEl.textContent = "status: 🟢 online";
      statusEl.classList.remove("offline");
      statusEl.classList.add("online");
    } else {
      throw new Error("Offline");
    }
  } catch {
    statusEl.textContent = "status: 🔴 offline";
    statusEl.classList.remove("online");
    statusEl.classList.add("offline");
  }
}

checkBotStatus();
setInterval(checkBotStatus, 30000); // recheck every 30s

// Smooth collapsible sections
const collapsibles = document.querySelectorAll(".collapsible-btn");
collapsibles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
    }
  });
});
