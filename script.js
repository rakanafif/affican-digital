/**
 * لوحة تحكم المحتوى - Affican Digital
 * عدل البيانات هنا ليتحدث الموقع تلقائياً
 */

const CONFIG = {
    hero: {
        badge: "مستقبل الحلول الرقمية",
        title: "Affican Digital Solutions",
        desc: "نحن نبني الجسور بين القديم والحديث، ونحول الركود المادي إلى سيولة رقمية تخترق الفراغ وتحقق الأثر.",
        btns: [
            { text: "استعرض الكتب", link: "#books", type: "main" },
            { text: "خدماتنا", link: "#services", type: "ghost" }
        ]
    },
    
    // أضف أو احذف كتبك هنا
    books: [
        {
            title: "نبض الحقيقة",
            author: "راكان عفيف",
            price: "29.99$",
            img: "book1.jpg", // ضع صورة الغلاف بهذا الاسم
            link: "https://wa.me/213542961475"
        },
        {
            title: "حكمة العقل وشغف القلب",
            author: "راكان عفيف",
            price: "25.00$",
            img: "book2.jpg",
            link: "https://wa.me/213542961475"
        }
    ],

    services: [
        { title: "إدارة المحتوى", icon: "fa-layers", desc: "خطة محتوى شهرية متكاملة تضمن الانتشار." },
        { title: "إعلانات ذكية", icon: "fa-bolt", desc: "حملات ممولة تستهدف العميل المناسب بدقة." },
        { title: "هندسة الهوية", icon: "fa-fingerprint", desc: "بناء علامة تجارية تترك أثراً لا يمحى." }
    ]
};

// وظيفة البناء التلقائي
function renderSite() {
    // 1. تحديث الهيرو
    document.getElementById('hero-badge').innerText = CONFIG.hero.badge;
    document.getElementById('hero-title').innerText = CONFIG.hero.title;
    document.getElementById('hero-desc').innerText = CONFIG.hero.desc;
    
    // 2. بناء أزرار الهيرو
    document.getElementById('hero-actions').innerHTML = CONFIG.hero.btns.map(btn => 
        `<a href="${btn.link}" class="${btn.type === 'main' ? 'btn-premium' : 'btn-buy'}">${btn.text}</a>`
    ).join('');

    // 3. بناء شبكة الكتب
    document.getElementById('books-grid').innerHTML = CONFIG.books.map(book => `
        <div class="premium-card book-card">
            <div class="book-img" style="background-image: url('${book.img}')"></div>
            <div class="book-info">
                <small style="color:var(--accent)">${book.author}</small>
                <h3>${book.title}</h3>
                <div class="price">${book.price}</div>
                <a href="${book.link}" class="btn-premium" style="display:block; text-align:center">اطلب الآن</a>
            </div>
        </div>
    `).join('');

    // 4. بناء الخدمات
    document.getElementById('services-grid').innerHTML = CONFIG.services.map(s => `
        <div class="premium-card">
            <i class="fa-solid ${s.icon}" style="font-size:2.5rem; color:var(--accent-blue); margin-bottom:20px"></i>
            <h3>${s.title}</h3>
            <p style="color:var(--text-muted); margin-top:10px">${s.desc}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderSite);
