const form = document.getElementById("emailForm");
const button = form.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (!email) return;

  button.innerText = "Processing...";
  button.disabled = true;
  emailInput.disabled = true;

  setTimeout(() => {
    button.innerText = "Finalizing Secure Entry...";
  }, 1200);

  setTimeout(() => {
    button.innerText = "Delivery Slot Secured ✓";
    button.style.background = "linear-gradient(90deg,#00ffb3,#00ff88)";
    button.style.color = "#001b1a";

    const box = document.querySelector(".email-section");

    const success = document.createElement("div");
    success.className = "email-success";
    success.innerHTML = `
      <h3>Request Confirmed</h3>
      <p>Your delivery details have been securely locked into the OGApps reward system.</p>
      <p>A confirmation email will be automatically dispatched once your gift card is scheduled within the 7-day delivery window.</p>
    `;

    box.appendChild(success);

  }, 2800);
});

// CAROUSEL
let i = 0;
const imgs = document.querySelectorAll(".carousel img");

setInterval(() => {
  imgs[i].classList.remove("active");
  i = (i + 1) % imgs.length;
  imgs[i].classList.add("active");
}, 3000);

// PARTICLES
const p = document.getElementById("particles");

for (let i = 0; i < 35; i++) {
  const d = document.createElement("div");
  d.style.position = "absolute";
  d.style.width = "4px";
  d.style.height = "4px";
  d.style.background = "#00ffd5";
  d.style.borderRadius = "50%";
  d.style.top = Math.random() * 100 + "%";
  d.style.left = Math.random() * 100 + "%";
  d.style.opacity = Math.random();

  p.appendChild(d);

  setInterval(() => {
    d.style.top = Math.random() * 100 + "%";
    d.style.left = Math.random() * 100 + "%";
  }, 6000);
}