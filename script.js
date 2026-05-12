
const PRODUCTS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 549, oldPrice: 749,
    category: "Electronics",
    rating: 4.8, reviews: 12847,
    image:"icons/items sold/headsets.png",
    badges: ["Prime", "Sale"], prime: true
  },
  {
    id: 2,
    title: "Apple iPhone 15 Pro 256GB Natural Titanium",
    price: 1899, oldPrice: 2099,
    category: "Electronics",
    rating: 4.9, reviews: 8563,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    badges: ["Prime", "New"], prime: true
  },
  {
    id: 3,
    title: "Nike Air Max 270 React Sneakers – Black/White",
    price: 219, oldPrice: 299,
    category: "Fashion",
    rating: 4.6, reviews: 3421,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    badges: ["Sale"], prime: false
  },
  {
    id: 4,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6qt",
    price: 189, oldPrice: 249,
    category: "Home",
    rating: 4.7, reviews: 24901,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=200&fit=crop",
    badges: ["Prime", "Sale"], prime: true
  },
  {
    id: 5,
    title: "The Psychology of Money by Morgan Housel – Bestseller",
    price: 79, oldPrice: 149,
    category: "Books",
    rating: 4.9, reviews: 45210,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
    badges: ["Prime"], prime: true
  },
  {
    id: 6,
    title: "Samsung 27\" 4K UHD IPS Monitor with USB-C 65W",
    price: 799, oldPrice: 999,
    category: "Electronics",
    rating: 4.5, reviews: 6732,
    image: "https://images.unsplash.com/photo-1527443224154-c4a573d55272?w=300&h=200&fit=crop",
    badges: ["Sale"], prime: false
  },
  {
    id: 7,
    title: "Adidas Ultraboost 23 Running Shoes – Womens",
    price: 279, oldPrice: 399,
    category: "Fashion",
    rating: 4.7, reviews: 2198,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=200&fit=crop",
    badges: ["Prime"], prime: true
  },
  {
    id: 8,
    title: "LEGO Technic Land Rover Defender 2573 Pieces",
    price: 699, oldPrice: 899,
    category: "Sports",
    rating: 4.8, reviews: 9012,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    badges: ["Prime", "New"], prime: true
  },
  {
    id: 9,
    title: "Logitech MX Master 3S Wireless Mouse – Graphite",
    price: 149, oldPrice: 199,
    category: "Electronics",
    rating: 4.9, reviews: 18430,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    badges: ["Prime"], prime: true
  },
  {
    id: 10,
    title: "KitchenAid Stand Mixer 4.8L – Empire Red",
    price: 1299, oldPrice: 1699,
    category: "Home",
    rating: 4.8, reviews: 31200,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
    badges: ["Sale", "Prime"], prime: true
  },
  {
    id: 11,
    title: "Atomic Habits by James Clear – Hardcover Edition",
    price: 99, oldPrice: 199,
    category: "Books",
    rating: 4.9, reviews: 78320,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=200&fit=crop",
    badges: ["Prime"], prime: true
  },
  {
    id: 12,
    title: "Wilson Pro Staff RF97 Tennis Racket",
    price: 449, oldPrice: 599,
    category: "Sports",
    rating: 4.6, reviews: 1876,
    image: "https://images.unsplash.com/photo-1617083934555-ac7c5a6d5870?w=300&h=200&fit=crop",
    badges: ["Sale"], prime: false
  },
];

const CATEGORIES = [
  {
    name: "Deals",
    filter: "all",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=220&h=220&fit=crop"
  },
  {
    name: "Books",
    filter: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=220&h=220&fit=crop"
  },
  {
    name: "Electronics",
    filter: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=220&h=220&fit=crop"
  },
  {
    name: "Health & Personal Care",
    filter: "Home",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=220&h=220&fit=crop"
  },
  {
    name: "Jewellery",
    filter: "Fashion",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=220&h=220&fit=crop"
  },
  {
    name: "Toys & Games",
    filter: "Sports",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=220&h=220&fit=crop"
  },
  {
    name: "Baby",
    filter: "Home",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=220&h=220&fit=crop"
  }
];

let cart     = JSON.parse(localStorage.getItem('amz_cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('amz_wishlist') || '[]');
let currentFilter = 'all';
let currentSort   = '';
let maxPrice      = 2000;
let searchQuery   = '';
let darkMode      = localStorage.getItem('amz_dark') === '1';
let user          = JSON.parse(localStorage.getItem('amz_user') || 'null');
let heroIndex     = 0;
let heroTimer     = null;

const HERO_SLIDES = [
  {
    title: "",
    subtitle: "",
    tag: "",
    images: [
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel-e7e75386-1b93-47db-9f70-c739f5d2f5f4.png",
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel-e7e75386-1b93-47db-9f70-c739f5d2f5f4.png",
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel-e7e75386-1b93-47db-9f70-c739f5d2f5f4.png"
    ]
  },
  {
    title: "",
    subtitle: "",
    tag: "",
    images: [
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel3-7d45a4bd-02e1-4ddd-8574-356ddbb51479.png",
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel3-7d45a4bd-02e1-4ddd-8574-356ddbb51479.png",
      "file:///C:/Users/moila/.cursor/projects/c-Users-moila-Downloads-amazon-clone/assets/c__Users_moila_AppData_Roaming_Cursor_User_workspaceStorage_3eb9f1b7a700df9717333360ddc6cdbf_images_couresel3-7d45a4bd-02e1-4ddd-8574-356ddbb51479.png"
    ]
  },
  {
    title: "",
    subtitle: "",
    tag: "",
    images: "icons/couresel.jpg"
  }
];

if (darkMode) document.body.classList.add('dark');

function save() {
  localStorage.setItem('amz_cart',     JSON.stringify(cart));
  localStorage.setItem('amz_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('amz_user', JSON.stringify(user));
}

function stars(rating) {
  return `${rating.toFixed(1)}/5`;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function updateAccountUI() {
  const greeting = document.getElementById('accountGreeting');
  const label = document.getElementById('accountLabel');
  if (!greeting || !label) return;

  if (user?.name) {
    greeting.textContent = `Hello, ${user.name}`;
    label.textContent = "Account & Lists ▾";
  } else {
    greeting.textContent = "Hello, sign in";
    label.textContent = "Account & Lists ▾";
  }
}

function openAuth() {
  const modal = document.getElementById('authModal');
  const content = document.getElementById('authContent');
  if (!modal || !content) return;

  if (user?.name) {
    content.innerHTML = `
      <div class="modal-header">
        <h2>Account</h2>
        <button class="modal-close" onclick="closeAuth()">X</button>
      </div>
      <p style="font-size:15px;font-weight:700;margin-bottom:8px">Signed in as ${user.name}</p>
      <p style="font-size:13px;color:var(--amz-dark-gray)">Email: ${user.email}</p>
      <div class="auth-meta">You're signed in on this device. Session is saved in localStorage.</div>
      <div class="auth-actions">
        <button class="continue-btn" onclick="closeAuth()">Close</button>
        <button class="place-order-btn" onclick="signOut()">Sign out</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-header">
        <h2>Sign In</h2>
        <button class="modal-close" onclick="closeAuth()">X</button>
      </div>
      <div class="form-row full">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" id="signinName" placeholder="Jane Doe"/>
        </div>
      </div>
      <div class="form-row full">
        <div class="form-group">
          <label>Email *</label>
          <input type="email" id="signinEmail" placeholder="jane@example.com"/>
        </div>
      </div>
      <div class="form-row full">
        <div class="form-group">
          <label>Password *</label>
          <input type="password" id="signinPassword" placeholder="Enter password"/>
        </div>
      </div>
      <button class="place-order-btn" onclick="signIn()">Sign In</button>
      <div class="auth-meta">Demo auth only: no backend, saved locally.</div>
    `;
  }

  modal.style.display = 'flex';
}

function closeAuth() {
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'none';
}

function signIn() {
  const name = document.getElementById('signinName')?.value.trim();
  const email = document.getElementById('signinEmail')?.value.trim();
  const password = document.getElementById('signinPassword')?.value.trim();

  if (!name || !email || !password) {
    showToast("Please fill in all sign-in fields");
    return;
  }

  user = { name, email };
  save();
  updateAccountUI();
  closeAuth();
  showToast(`Welcome ${name}! Signed in successfully`);
}

function signOut() {
  user = null;
  save();
  updateAccountUI();
  closeAuth();
  showToast("Signed out");
}

function renderHero() {
  const slide = HERO_SLIDES[heroIndex];
  const banner = document.querySelector('.hero-banner');
  const title = document.getElementById('heroTitle');
  const sub = document.getElementById('heroSub');
  const tag = document.getElementById('heroTag');
  const img1 = document.getElementById('heroImg1');
  const img2 = document.getElementById('heroImg2');
  const img3 = document.getElementById('heroImg3');
  if (!banner || !title || !sub || !tag || !img1 || !img2 || !img3) return;

  banner.style.backgroundImage = `url("${slide.images[0]}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  banner.style.backgroundRepeat = 'no-repeat';
  banner.classList.add('hero-bg-carousel');

  title.textContent = '';
  sub.textContent = '';
  tag.textContent = '';
  title.style.display = 'none';
  sub.style.display = 'none';
  tag.style.display = 'none';
  img1.src = slide.images[0];
  img2.src = slide.images[1];
  img3.src = slide.images[2];
}

function heroNext() {
  heroIndex = (heroIndex + 1) % HERO_SLIDES.length;
  renderHero();
  resetHeroTimer();
}

function heroPrev() {
  heroIndex = (heroIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
  renderHero();
  resetHeroTimer();
}

function startHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    heroIndex = (heroIndex + 1) % HERO_SLIDES.length;
    renderHero();
  }, 4500);
}

function resetHeroTimer() {
  startHeroTimer();
}

function toggleDark() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  localStorage.setItem('amz_dark', darkMode ? '1' : '0');
  updateDarkToggleUI();
}

function updateDarkToggleUI() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', darkMode ? 'true' : 'false');
  toggle.setAttribute('title', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
}

function showPage(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  window.scrollTo(0, 0);
  if (p === 'wishlist') renderWishlist();
  if (p === 'deals')    renderDeals();
}

function getFiltered() {
  return PRODUCTS
    .filter(p => {
      if (currentFilter !== 'all' && p.category !== currentFilter) return false;
      if (p.price > maxPrice) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      }
      return true;
    })
    .sort((a, b) => {
      if (currentSort === 'price-asc')  return a.price - b.price;
      if (currentSort === 'price-desc') return b.price - a.price;
      if (currentSort === 'rating')     return b.rating - a.rating;
      return 0;
    });
}

function filterCat(cat) {
  currentFilter = cat;
  searchQuery   = '';
  document.getElementById('searchInput').value = '';
  showPage('home');

  const wrap = document.getElementById('activeFilterWrap');
  if (cat !== 'all') {
    wrap.style.display = 'flex';
    document.getElementById('activeFilter').textContent = cat;
  } else {
    wrap.style.display = 'none';
  }

  renderCategories();
  renderProducts();
  renderRecommended();
}

function handleSort(val) {
  currentSort = val;
  renderProducts();
}

function handlePriceFilter(val) {
  maxPrice = parseInt(val, 10);
  document.getElementById('priceDisplay').textContent = 'R' + maxPrice.toLocaleString();
  renderProducts();
}

function clearFilters() {
  currentFilter = 'all';
  currentSort   = '';
  maxPrice      = 2000;
  searchQuery   = '';
  document.getElementById('priceRange').value     = 2000;
  document.getElementById('priceDisplay').textContent = 'R2,000';
  document.getElementById('activeFilterWrap').style.display = 'none';
  document.getElementById('searchInput').value    = '';
  renderCategories();
  renderProducts();
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value.trim();
  showPage('home');
  renderProducts();
}

function renderCategories() {
  const g = document.getElementById('categoriesGrid');
  if (!g) return;
  g.innerHTML = CATEGORIES.map(c => `
    <div class="category-card ${currentFilter === c.filter ? 'active' : ''}"
         onclick="filterCat('${c.filter}')">
      <img class="category-thumb" src="${c.image}" alt="${c.name} category"/>
      <h3>${c.name}</h3>
    </div>
  `).join('');
}

function productCard(p) {
  const inCart = cart.find(c => c.id === p.id);
  const inWish = wishlist.includes(p.id);

  const badgesHTML = p.badges.map(b => {
    const cls = b.toLowerCase() === 'prime' ? 'prime'
              : b.toLowerCase() === 'new'   ? 'new'
              : 'sale';
    return `<span class="badge badge-${cls}">${b}</span>`;
  }).join('');

  return `
    <div class="product-card">
      <div class="product-img-wrap">
        <div class="badge-wrap">${badgesHTML}</div>
        <img src="${p.image}" alt="${p.title}" loading="lazy"/>
        <button class="wishlist-btn ${inWish ? 'active' : ''}"
          onclick="toggleWishlist(${p.id}, event)"
          title="${inWish ? 'Remove from' : 'Add to'} wishlist">
          ${inWish ? 'Saved' : 'Save'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-title">${p.title}</div>
        <div>
          <span class="stars">${stars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-old">R${p.oldPrice.toLocaleString()}</span><br/>
          <span class="price-now"><small>R</small>${p.price.toLocaleString()}</span>
          ${p.prime ? '<br/><span class="prime-tag">FREE Prime Delivery</span>' : ''}
        </div>
        ${inCart
          ? `<div class="added-btn">In Cart (x${inCart.qty})</div>`
          : `<button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>`
        }
      </div>
    </div>
  `;
}

function renderProducts() {
  const grid  = document.getElementById('productsGrid');
  const title = document.getElementById('productsTitle');
  const prods = getFiltered();

  if (searchQuery) {
    title.textContent = `Search: "${searchQuery}" — ${prods.length} result${prods.length !== 1 ? 's' : ''}`;
  } else if (currentFilter !== 'all') {
    title.textContent = `${currentFilter} (${prods.length} products)`;
  } else {
    title.textContent = `Featured Products (${prods.length})`;
  }

  if (!prods.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--amz-dark-gray)">
        <div style="font-size:40px;margin-bottom:12px">No Results</div>
        <h3>No products found</h3>
        <p style="margin-top:8px">Try different filters or a different search term.</p>
        <button onclick="clearFilters()" class="add-btn" style="margin-top:16px;max-width:200px;border-radius:4px">Clear Filters</button>
      </div>`;
    return;
  }

  grid.innerHTML = prods.map(p => productCard(p)).join('');
}

function renderRecommended() {
  const pool = PRODUCTS
    .filter(p => currentFilter !== 'all' ? p.category === currentFilter : true)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const grid = document.getElementById('recoGrid');
  grid.innerHTML = pool.map(p => `
    <div class="reco-card" onclick="filterCat('${p.category}')">
      <img src="${p.image}" alt="${p.title}"/>
      <div class="reco-title">${p.title}</div>
      <div class="reco-price">R${p.price.toLocaleString()}</div>
      <div style="font-size:11px;color:#FF9900;">${stars(p.rating)} <span style="color:var(--amz-dark-gray);font-size:10px">(${p.reviews.toLocaleString()})</span></div>
    </div>
  `).join('');
}

function renderWishlist() {
  const c = document.getElementById('wishlistContent');

  if (!wishlist.length) {
    c.innerHTML = `
      <div class="wishlist-empty">
        <div style="font-size:52px;margin-bottom:12px">Saved</div>
        <h3>Your wishlist is empty</h3>
        <p style="margin-top:8px">Click Save on any product to add it here.</p>
        <button onclick="showPage('home')" class="add-btn"
          style="margin-top:18px;max-width:220px;border-radius:4px;display:inline-block">
          Start Shopping
        </button>
      </div>`;
    return;
  }

  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  c.innerHTML = `<div class="wishlist-grid">${items.map(p => productCard(p)).join('')}</div>`;
}

function renderDeals() {
  const deals = [...PRODUCTS].sort((a, b) => {
    const discA = a.oldPrice - a.price;
    const discB = b.oldPrice - b.price;
    return discB - discA;
  });
  document.getElementById('dealsGrid').innerHTML = deals.map(p => productCard(p)).join('');
}

function addToCart(id) {
  const p  = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) {
    ex.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  save();
  updateCartCount();
  renderProducts();
  if (document.getElementById('page-wishlist').classList.contains('active')) {
    renderWishlist();
  }
  showToast(`"${p.title.slice(0, 32)}…" added to basket`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  save();
  updateCartCount();
  renderCart();
  renderProducts();
  showToast('Item removed from basket');
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  save();
  updateCartCount();
  renderCart();
  renderProducts();
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  const cartLabel = document.querySelector('.cart-btn strong');
  if (cartLabel) cartLabel.textContent = `Basket (${total})`;
}

function toggleWishlist(id, e) {
  e.stopPropagation();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist');
  }
  save();
  renderProducts();
  if (document.getElementById('page-wishlist').classList.contains('active')) {
    renderWishlist();
  }
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartPanel').classList.add('open');
  renderCart();
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartPanel').classList.remove('open');
}

function renderCart() {
  const body   = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">Cart</div>
        <p style="font-size:15px;font-weight:600;margin-bottom:6px">Your basket is empty!</p>
        <p style="font-size:13px;color:var(--amz-dark-gray)">Add some products to get started.</p>
        <button onclick="closeCart()" class="add-btn"
          style="margin-top:18px;max-width:200px;border-radius:4px">
          Keep Shopping
        </button>
      </div>`;
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}"/>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">R${(item.price * item.qty).toLocaleString()}</div>
        <div style="font-size:11px;color:var(--amz-dark-gray)">R${item.price.toLocaleString()} each</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const sub      = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const qty      = cart.reduce((s, i) => s + i.qty, 0);
  const delivery = sub > 500 ? 0 : 99;
  const total    = sub + delivery;

  footer.innerHTML = `
    <div style="font-size:13px;color:var(--amz-dark-gray);margin-bottom:8px">
      ${delivery === 0 ? 'You qualify for <strong>FREE delivery</strong>.' : `Spend R${(500 - sub).toFixed(0)} more for free delivery`}
    </div>
    <div class="subtotal-line">
      <span>Subtotal (${qty} item${qty !== 1 ? 's' : ''}):</span>
      <span class="subtotal-amount">R${total.toLocaleString()}</span>
    </div>
    <button class="checkout-btn" onclick="openCheckout()">Proceed to Checkout</button>
    <button class="continue-btn" onclick="closeCart()">Keep Shopping</button>
  `;
}

function openCheckout() {
  closeCart();
  const sub      = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = sub > 500 ? 0 : 99;
  const total    = sub + delivery;

  document.getElementById('checkoutContent').innerHTML = `
    <div class="modal-header">
      <h2>Checkout</h2>
      <button class="modal-close" onclick="closeCheckout()">X</button>
    </div>

    <div class="order-summary-mini">
      <h4>Order Summary</h4>
      ${cart.map(i => `
        <div class="summary-item">
          <span>${i.title.slice(0, 38)}${i.title.length > 38 ? '…' : ''} ×${i.qty}</span>
          <span>R${(i.price * i.qty).toLocaleString()}</span>
        </div>
      `).join('')}
      <div class="summary-item">
        <span>Delivery</span>
        <span>${delivery === 0 ? '<span style="color:var(--amz-green);font-weight:700">FREE</span>' : 'R' + delivery}</span>
      </div>
      <div class="summary-total">
        <span>Total</span>
        <span style="color:var(--amz-red)">R${total.toLocaleString()}</span>
      </div>
    </div>

    <h3 style="margin-bottom:12px;font-size:15px;font-weight:700">Shipping Details</h3>
    <div class="form-row">
      <div class="form-group">
        <label>First Name *</label>
        <input type="text" id="fname" placeholder="Jane"/>
      </div>
      <div class="form-group">
        <label>Last Name *</label>
        <input type="text" id="lname" placeholder="Doe"/>
      </div>
    </div>
    <div class="form-row full">
      <div class="form-group">
        <label>Email Address *</label>
        <input type="email" id="email" placeholder="jane@example.com"/>
      </div>
    </div>
    <div class="form-row full">
      <div class="form-group">
        <label>Street Address *</label>
        <input type="text" id="address" placeholder="123 Main Street"/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>City *</label>
        <input type="text" id="city" placeholder="Cape Town"/>
      </div>
      <div class="form-group">
        <label>Postal Code *</label>
        <input type="text" id="postal" placeholder="8001"/>
      </div>
    </div>

    <h3 style="margin:16px 0 10px;font-size:15px;font-weight:700">Delivery Option</h3>
    <div class="delivery-options">
      <div class="delivery-opt selected" onclick="selectDelivery(this)">
        <span class="opt-icon">STD</span>
        <div class="opt-info">
          <div class="opt-name">Standard Delivery</div>
          <div class="opt-desc">3–5 business days • ${delivery === 0 ? 'FREE' : 'R' + delivery}</div>
        </div>
      </div>
      <div class="delivery-opt" onclick="selectDelivery(this)">
        <span class="opt-icon">EXP</span>
        <div class="opt-info">
          <div class="opt-name">Express Delivery</div>
          <div class="opt-desc">Next business day • R149</div>
        </div>
      </div>
    </div>

    <button class="place-order-btn" onclick="placeOrder()">
      Place Order — R${total.toLocaleString()}
    </button>
  `;

  document.getElementById('checkoutModal').style.display = 'flex';
}

function selectDelivery(el) {
  document.querySelectorAll('.delivery-opt').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
}

function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}

function placeOrder() {
  const fname = document.getElementById('fname')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  if (!fname || !email) {
    showToast('Please fill in your name and email!');
    return;
  }

  const orderNum = 'AMZ-' + Math.floor(Math.random() * 9000000 + 1000000);

  document.getElementById('checkoutContent').innerHTML = `
    <div class="confirm-screen">
      <div class="confirm-icon">Done</div>
      <h2 class="confirm-title">Order Placed Successfully!</h2>
      <p class="confirm-num">Order number: <strong>${orderNum}</strong></p>
      <p style="color:var(--amz-dark-gray);font-size:14px;line-height:1.6">
        Thank you, ${fname}! A confirmation has been sent to ${email}.<br/>
        Estimated delivery: 3–5 business days.
      </p>
      <div style="margin-top:16px;padding:12px;background:var(--amz-bg);border-radius:6px;font-size:13px;color:var(--amz-dark-gray)">
        Your items are being prepared for shipment.
      </div>
      <button class="continue-shopping"
        onclick="closeCheckout();cart=[];save();updateCartCount();renderProducts();showPage('home')">
        Continue Shopping
      </button>
    </div>
  `;

  cart = [];
  save();
  updateCartCount();
}

(function init() {
  renderCategories();
  renderProducts();
  renderRecommended();
  renderHero();
  startHeroTimer();
  updateCartCount();
  updateAccountUI();
  updateDarkToggleUI();
})();