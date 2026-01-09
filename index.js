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