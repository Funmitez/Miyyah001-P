// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('show'); } });
}, { threshold: 0.2 });
faders.forEach(fader => observer.observe(fader));

// Read more buttons
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if(content.style.display === 'block') { content.style.display = 'none'; btn.textContent = 'Read More'; }
    else { content.style.display = 'block'; btn.textContent = 'Read Less'; }
  });
});
// Contact Form Handling
const  form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
  event.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "#00e6e6";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong.";
      status.style.color = "#ff8c00";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try again.";
    status.style.color = "#ff8c00";
  }
});

// Contact Form Handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const spinner = document.getElementById("spinner");
const buttonText = document.getElementById("button-text");

form.addEventListener("submit", async function(event) {
  event.preventDefault();
  const data = new FormData(form);

  // Show spinner
  spinner.style.display = "inline-block";
  buttonText.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "#00e6e6";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong.";
      status.style.color = "#ff8c00";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try again.";
    status.style.color = "#ff8c00";
  } finally {
    // Hide spinner
    spinner.style.display = "none";
    buttonText.textContent = "Send Message";
  }
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
// Read More Toggle with Arrow
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.previousElementSibling;
    const isOpen = details.style.display === "block";

    details.style.display = isOpen ? "none" : "block";
    button.innerText = isOpen ? "Read More ↓" : "Read Less ↑";
  });
});
async function loadTestimonials() {
  const url = "https://docs.google.com/spreadsheets/d/1gbjMG5X6vCrpWICawU78nTmjkJQZr8wxitmqmKRktC4/gviz/tq?tqx=out:json";

  const container = document.getElementById("testimonials-container");
  container.innerHTML = "<p>Loading testimonials...</p>";

  try {
    const res = await fetch(url);
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows || [];

    if (!rows.length) {
      container.innerHTML = "<p>No recommendations yet—be the first to write one!</p>";
      return;
    }

    container.innerHTML = "";

    for (let i = rows.length - 1; i >= 0; i--) {
      const r = rows[i].c;
      const name = r[1]?.v || "Anonymous";
      const role = r[2]?.v || "Contributor";
      const message = r[3]?.v || "";

      if (!message.trim()) continue;

      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.innerHTML = `
        <p>"${message}"</p>
        <h4>- ${name}${role ? `, ${role}` : ""}</h4>
      `;

      container.appendChild(card);
    }
  } catch (err) {
    console.error("Error loading testimonials:", err);
    container.innerHTML = "<p>Couldn’t load testimonials right now. Please try again later.</p>";
  }
}

loadTestimonials();
<script>
</script>

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.previousElementSibling; // targets .more-content
    content.classList.toggle("show");
    button.textContent = content.classList.contains("show") 
      ? "Read Less ↑" 
      : "Read More ↓";
  });
});
