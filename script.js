document.addEventListener('DOMContentLoaded', () => {
    // 1. تحديث السنة
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // 2. القائمة للجوال
    const navBtn = document.getElementById("navBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (navBtn) {
        navBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
    }

    // 3. فورمة الواتساب
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fd = new FormData(contactForm);
            const data = Object.fromEntries(fd.entries());
            const msg = `مرحباً، أنا ${data.name}\nرقمي: ${data.phone}\nالرسالة: ${data.message}\n— Affican Digital`;
            window.open(`https://wa.me/213542961475?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }

    // 4. حركة الظهور (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
