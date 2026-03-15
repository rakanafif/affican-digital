const SITE_DATA = {
    hero: {
        title: "Affican Digital Solutions",
        description: "حيث تلتقي حكمة العقل بنبض الحقيقة. نحن لا نصمم منصات، نحن نبني هويات رقمية عابرة للزمن.",
    },
    // لإضافة كتاب جديد، فقط انسخ الأسطر بين { } وأضفها للقائمة
    books: [
        {
            title: "نبض الحقيقة",
            author: "راكان عفيف",
            price: "$29.99",
            image: "book1.jpg",
            link: "#"
        },
        {
            title: "حكمة العقل وشغف القلب",
            author: "راكان عفيف",
            price: "$25.00",
            image: "book2.jpg",
            link: "#"
        }
    ],
    services: [
        { title: "إدارة المحتوى السيال", desc: "نحول الركود المادي إلى سيولة رقمية تخترق الفراغ.", icon: "fa-layers" },
        { title: "هندسة الأثر", desc: "تصميم حملات تترك أثراً لا يمحى في وعي الجمهور.", icon: "fa-bullseye" }
    ]
};

// وظيفة البناء التلقائي للموقع
function buildSite() {
    // تحديث الهيرو
    document.getElementById('hero-desc').innerText = SITE_DATA.hero.description;

    // بناء شبكة الكتب
    const booksGrid = document.getElementById('books-grid');
    booksGrid.innerHTML = SITE_DATA.books.map(book => `
        <div class="premium-card book-card">
            <div class="card-img" style="background-image: url('${book.image}')"></div>
            <div class="card-body">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <div class="price">${book.price}</div>
                <a href="${book.link}" class="btn-buy">شراء الكتاب</a>
            </div>
        </div>
    `).join('');
}

window.onload = buildSite;
