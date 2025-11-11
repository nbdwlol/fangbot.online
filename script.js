// Copy user ID
document.getElementById("copy-btn").addEventListener("click", () => {
  const input = document.getElementById("userid");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("copied: " + input.value);
});

// Live bot status
const botStatus = document.getElementById("status");
const botId = "1436480231224512656"; // replace this!

async function checkStatus() {
  try {
    const res = await fetch(`https://discord.com/api/v10/users/${botId}`, {
      headers: { Authorization: "Bot YOUR_BOT_TOKEN" } // optional: skip if you don’t want to expose token
    });

    if (res.ok) {
      botStatus.textContent = "status: online ✅";
      botStatus.classList.remove("offline");
      botStatus.classList.add("online");
    } else {
      throw new Error();
    }
  } catch {
    botStatus.textContent = "status: offline ❌";
    botStatus.classList.remove("online");
    botStatus.classList.add("offline");
  }
}

checkStatus();
setInterval(checkStatus, 30000); // update every 30 seconds
