// --- بيانات الموقع (عدل هنا فقط) ---
const DATA = {
    heroTitle: "نبض الحقيقة في عالم رقمي.",
    heroSub: "Affican Digital: رؤية عالمية تنطلق من الجزائر لترسم أثراً لا يمحى.",
    
    // قائمة الكتب
    books: [
        {
            title: "نبض الحقيقة",
            desc: "رحلة في أعماق المعرفة والأثر الإنساني.",
            price: "$29",
            img: "truth-cover.jpg",
            link: "https://wa.me/213542961475"
        },
        {
            title: "حكمة العقل",
            desc: "دليل عملي للنمو الفكري في العصر الحديث.",
            price: "$25",
            img: "wisdom-cover.jpg",
            link: "https://wa.me/213542961475"
        }
    ]
};

// --- محرك العرض الاحترافي ---
function loadContent() {
    document.getElementById('hero-title').textContent = DATA.heroTitle;
    document.getElementById('hero-desc').textContent = DATA.heroSub;

    const booksGrid = document.getElementById('books-grid');
    booksGrid.innerHTML = DATA.books.map(book => `
        <div class="book-item">
            <img src="${book.img}" class="book-cover" alt="${book.title}">
            <div class="book-content">
                <h3 style="font-size: 24px; margin-bottom: 10px;">${book.title}</h3>
                <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 20px;">${book.desc}</p>
                <div style="font-size: 22px; font-weight: 800; margin-bottom: 20px;">${book.price}</div>
                <a href="${book.link}" class="btn-solid" style="padding: 12px 25px; font-size: 14px;">اطلب نسختك</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadContent);
