
document.addEventListener('DOMContentLoaded', () => {
    // 1. استيراد وتحديث المعلومات الأساسية (Identity)
    const updateIdentity = () => {
        document.title = `${SITE_CONFIG.brand.name} | حلول رقمية`;
        const logos = document.querySelectorAll('.brand__logo, .footer__logo');
        logos.forEach(img => img.src = SITE_CONFIG.brand.logo);
        
        // تحديث الهيرو (Hero Section)
        document.getElementById('hero-title').textContent = SITE_CONFIG.hero.title;
        document.getElementById('hero-desc').textContent = SITE_CONFIG.hero.description;
        document.getElementById('hero-slogan').textContent = SITE_CONFIG.brand.slogan;
    };

    // 2. بناء الخدمات ديناميكيًا (Services)
    const renderServices = () => {
        const container = document.getElementById('services-container');
        if (!container) return;

        container.innerHTML = SITE_CONFIG.services.map(service => `
            <article class="card-glass reveal">
                <div class="card-icon">${service.icon || '🚀'}</div>
                <h3>${service.title}</h3>
                <p class="muted">${service.desc}</p>
                <ul class="list">
                    ${service.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </article>
        `).join('');
    };

    // 3. بناء قسم الكتب (Books)
    const renderBooks = () => {
        const container = document.getElementById('books-container');
        if (!container) return;

        container.innerHTML = SITE_CONFIG.books.map(book => `
            <div class="workCard reveal">
                <div class="workCard__thumb" style="background-image: url('${book.image}')">
                    ${!book.image ? 'غلاف الكتاب' : ''}
                </div>
                <div class="workCard__body">
                    <h3>${book.title}</h3>
                    <p class="muted">تأليف: ${book.author}</p>
                    <div class="book-footer">
                        <span class="price-tag">${book.price}</span>
                        <a href="${book.link}" class="btn-sm">اطلب نسختك</a>
                    </div>
                </div>
            </div>
        `).join('');
    };

    // 4. معالج واتساب (WhatsApp Logic)
    const setupContact = () => {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const fd = new FormData(form);
                const data = Object.fromEntries(fd.entries());
                const msg = `مرحبًا، أنا ${data.name}\nرقمي: ${data.phone}\nبخصوص: ${data.message}\n— Affican Digital`.trim();
                window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
            });
        }
    };

    // تشغيل كافة الوظائف
    updateIdentity();
    renderServices();
    renderBooks();
    setupContact();

    // تحديث السنة في الفوتر تلقائيًا
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
