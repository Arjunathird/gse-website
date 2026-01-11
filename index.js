function toggleAudit() {
  const auditSection = document.getElementById("audit");
  if (!auditSection) return;

  auditSection.classList.toggle("hidden");
  auditSection.scrollIntoView({ behavior: "smooth", block: "start" });
}


const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="growth-audit"]');
  const success = document.getElementById('form-success');

  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form.reset();                 // clears form
      form.style.display = 'none';  // hides form
      success.style.display = 'block'; // shows thank you
    })
    .catch(() => {
      alert('Submission failed. Please try again.');
    });
  });
});