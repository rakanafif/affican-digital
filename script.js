document.addEventListener('DOMContentLoaded', () => {
    // تحديث الهوية
    document.getElementById('brand-slogan').textContent = SITE_CONFIG.brand.slogan;

    const container = document.getElementById('books-container');
    
    SITE_CONFIG.books.forEach(book => {
        const message = `مرحباً Affican Digital، أريد شراء كتاب "${book.title}" بسعر ${book.price}`;
        const waLink = `https://wa.me/${SITE_CONFIG.brand.whatsapp}?text=${encodeURIComponent(message)}`;

        container.innerHTML += `
            <div class="book-card">
                <div class="book-img" style="background-image: url('${book.image}')"></div>
                <h3>${book.title}</h3>
                <div class="price-tag">${book.price}</div>
                <a href="${waLink}" target="_blank" class="buy-whatsapp">
                    شراء عبر واتساب
                </a>
            </div>
        `;
    });
});
