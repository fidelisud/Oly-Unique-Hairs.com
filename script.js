// script.js

const whatsappNumber = "234 8101318779";

const allProducts = [
    { id: 1, name: "Brazilian Straight Bundles", price: "₦85,000", image: "https://picsum.photos/id/1015/400/400", category: "bundles" },
    { id: 2, name: "Peruvian Body Wave 3 Bundles", price: "₦92,000", image: "https://picsum.photos/id/1027/400/400", category: "bundles" },
    { id: 3, name: "Indian Deep Wave", price: "₦78,000", image: "https://picsum.photos/id/106/400/400", category: "bundles" },
    { id: 4, name: "13x4 Lace Frontal", price: "₦45,000", image: "https://picsum.photos/id/201/400/400", category: "wigs" },
    { id: 5, name: "HD Lace Wig", price: "₦120,000", image: "https://picsum.photos/id/237/400/400", category: "wigs" },
    { id: 6, name: "Hair Serum & Oil", price: "₦12,000", image: "https://picsum.photos/id/180/400/400", category: "beauty" },
];

function sendToWhatsApp(product) {
    const message = `Hello OLY UNIQUE HAIRS!%0AI want to buy:%0A*${product.name}*%0APrice: *${product.price}*%0AThank you!`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    if (product) {
        sendToWhatsApp(product);
    }
}

function renderProducts(products, containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fab fa-whatsapp"></i> Buy on WhatsApp
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const filtered = allProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        
        if (document.getElementById('shop-grid')) {
            renderProducts(filtered, 'shop-grid');
        }

        else if (document.getElementById('product-grid')) {
            renderProducts(filtered, 'product-grid');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-grid')) {
        renderProducts(allProducts.slice(0, 4), 'product-grid');
    }
    
    if (document.getElementById('shop-grid')) {
        renderProducts(allProducts, 'shop-grid');
    }

    setupSearch();
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

const scrollTop = document.getElementById('scrollTop');

if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}