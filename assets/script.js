// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
v// Use your published CSV link
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNo8lBuf98uV8BfT4ieNzd0JgF2sZzQUkoZuFKJ8BQJG2GtGtAHViOqYjgwm45bd-IkJcMUBBGIkOb/pub?output=csv";

async function loadTestimonials() {
  try {
    const response = await fetch(sheetURL);
    const data = await response.text();

    // Split CSV into rows
    const rows = data.split("\n").slice(1); // skip header row
    let html = "";

    rows.forEach(row => {
      const cols = row.split(",");

      // Adjust these indexes to your sheet columns:
      const timestamp = cols[0] || "";
          ]=#      const name = cols[1] || "Anonymous";
      const message = cols[2] || "";

      if (message.trim() !== "") {
        html += `
          <div class="testimonial-card">
            <p>"${message}"</p>
            <h4>- ${name}</h4>
          </div>
        `;
      }
    });

    async function loadTestimonials() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNo8lBuf98uV8BfT4ieNzd0JgF2sZzQUkoZuFKJ8BQJG2GtGtAHViOqYjgwm45bd-IkJcMUBBGIkOb/pub?output=csv";

  try {
    const response = await fetch(url);
    const data = await response.text();

    // Split CSV into rows
    const rows = data.split("\n").slice(1); // skip header row

    const container = document.getElementById("testimonials");
    container.innerHTML = ""; // clear loading message

    rows.forEach(row => {
      const cols = row.split(",");

      if (cols.length >= 4) {
        const timestamp = cols[0].trim();
        const name = cols[1].trim();
        const role = cols[2].trim();
        const recommendation = cols[3].trim();

        if (recommendation) {
          const card = document.createElement("div");
          card.className = "testimonial-card";
          card.innerHTML = `
            <p class="recommendation">"${recommendation}"</p>
            <p class="author">— ${name}, <em>${role}</em></p>
          `;
          container.appendChild(card);
        }
      }
    });

  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}

// Load when page is ready
document.addEventListener("DOMContentLoaded", loadTestimonials);
// REMOVE or COMMENT OUT this block if it exists
// fetchRecommendations();
