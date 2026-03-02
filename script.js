// سنة الفوتر
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// زر قائمة الموبايل
document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.getElementById("navBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (navBtn && mobileNav) {
    navBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      mobileNav.setAttribute(
        "aria-hidden",
        mobileNav.classList.contains("open") ? "false" : "true"
      );
    });

    // إغلاق القائمة عند الضغط على أي رابط داخلها
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileNav.setAttribute("aria-hidden", "true");
      })
    );
  }

  // واتساب من الفورم
  const WA_NUMBER = "213542961475";

  function waUrl(text) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(contactForm);
      const data = Object.fromEntries(fd.entries());

      const msg = [
        `مرحبا، انا: ${data.name || "عميل"}`,
        `رقمي: ${data.phone || ""}`,
        `رسالة: ${data.message || ""}`,
        `-- Affican Digital Solutions`,
      ].join("\n");

      window.open(waUrl(msg), "_blank");
      contactForm.reset();
    });
  }
});
