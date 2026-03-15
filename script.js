document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const navBtn = document.getElementById("navBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (navBtn) {
        navBtn.addEventListener("click", () => {
            mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
        });
    }
});
