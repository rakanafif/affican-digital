/**
 * Affican Digital - Content Management Engine
 * تحكم كامل في محتوى الموقع من هذا الملف بدون لمس HTML أو CSS
 */

const SITE_CONFIG = {
    // 1. النصوص الرئيسية (Hero Section)
    hero: {
        title: "Affican Digital Solutions",
        description: "شركة طموحة تقدم حلولاً مبتكرة بجودة عالية، وتبني شراكات قائمة على الثقة والاحتراف لتحقيق قيمة حقيقية ومستدامة لعملائها.", //
        primaryBtn: "استعرض الكتب",
        secondaryBtn: "اطلب استشارة مجانية" //
    },

    // 2. قسم الكتب (أضف أو احذف كتبك هنا بسهولة)
    books: [
        {
            title: "نبض الحقيقة", //
            author: "راكان عفيف", //
            price: "$29.99",
            image: "book_truth.jpg", // استبدل باسم ملف صورتك
            link: "https://wa.me/213542961475?text=أريد_شراء_كتاب_نبض_الحقيقة" //
        },
        {
            title: "حكمة العقل وشغف القلب", //
            author: "راكان عفيف", //
            price: "$25.00",
            image: "book_wisdom.jpg",
            link: "https://wa.me/213542961475?text=أريد_شراء_كتاب_حكمة_العقل" //
        }
    ],

    // 3. قسم الخدمات
    services: [
        {
            title: "تسويق عبر منصات التواصل", //
            desc: "إدارة محتوى ونشر وتفاعل على TikTok / Instagram / YouTube / Facebook.", //
            icon: "fa-share-nodes"
        },
        {
            title: "إعلانات ممولة", //
            desc: "حملات تستهدف العميل المناسب بأفضل تكلفة مع استهداف دقيق.", //
            icon: "fa-rectangle-ad"
        },
        {
            title: "صناعة محتوى", //
            desc: "أفكار وسكربتات قوية للفيديوهات القصيرة وتصميمات تقنع وتبيع.", //
            icon: "fa-clapperboard"
        }
    ]
};

// --- محرك التشغيل (لا تلمس هذا الجزء إلا للضرورة) ---

function initAfficanDigital() {
    // تحديث نصوص الهيرو
    const heroTitle = document.querySelector('.hero-premium h1');
    const heroDesc = document.querySelector('#hero-desc');
    if (heroTitle) heroTitle.innerText = SITE_CONFIG.hero.title;
    if (heroDesc) heroDesc.innerText = SITE_CONFIG.hero.description;

    // بناء شبكة الكتب
    const booksGrid = document.getElementById('books-grid');
    if (booksGrid) {
        booksGrid.innerHTML = SITE_CONFIG.books.map(book => `
            <div class="premium-card book-card reveal">
                <div class="card-img" style="background-image: url('${book.image}')"></div>
                <div class="card-body">
                    <p class="author">${book.author}</p>
                    <h3>${book.title}</h3>
                    <div class="price">${book.price}</div>
                    <a href="${book.link}" target="_blank" class="btn-buy">شراء الكتاب</a>
                </div>
            </div>
        `).join('');
    }

    // بناء شبكة الخدمات
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = SITE_CONFIG.services.map(ser => `
            <div class="premium-card reveal">
                <div class="card-body">
                    <i class="fa-solid ${ser.icon}" style="color: var(--accent); font-size: 2rem; margin-bottom: 20px;"></i>
                    <h3>${ser.title}</h3>
                    <p style="color: var(--text-muted); margin-top: 10px;">${ser.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // تفعيل تأثيرات التمرير (Reveal Animation)
    applyScrollReveal();
}

function applyScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', initAfficanDigital);
