// Array completo de productos
const products = [
    // --- PERUVIAN BREAKFAST ---
    {
        id: 50,
        name: "Plato Peruano Desayuno",
        category: "peruvian-breakfast",
        price: 25.00,
        description: "Traditional Peruvian breakfast platter served with tamal, crispy pork, fried sweet potato, onion relish and fresh bread.",
        image: "./images/menu/plato-peruano-desayuno.jpg",
        available: true
    },
    {
        id: 51,
        name: "Pan con Chicharrón",
        category: "peruvian-breakfast",
        price: 12.50,
        description: "Traditional Peruvian sandwich with crispy pork, sweet potato and onion relish.",
        image: "./images/menu/pan-con-chicharron.jpg",
        available: true
    },
    {
        id: 52,
        name: "Pan con Pollo",
        category: "peruvian-breakfast",
        price: 10.00,
        description: "Peruvian chicken sandwich with shredded chicken and creamy sauce.",
        image: "./images/menu/pan-con-pollo.jpg",
        available: true
    },
    {
        id: 53,
        name: "Humitas",
        category: "peruvian-breakfast",
        price: 6.00,
        description: "Sweet Peruvian corn tamales wrapped in corn husks.",
        image: "./images/menu/humitas.jpg",
        available: true
    },
    {
        id: 54,
        name: "Tamales",
        category: "peruvian-breakfast",
        price: 10.00,
        description: "Traditional Peruvian tamales filled with seasoned pork.",
        image: "./images/menu/tamales.jpg",
        available: true
    },
    {
        id: 55,
        name: "Chicharrón con Mote y Zarza",
        category: "peruvian-breakfast",
        price: 18.00,
        description: "Crispy fried pork served with Peruvian corn and onion salad.",
        image: "./images/menu/chicharron-con-mote-y-zarza.jpg",
        available: true
    },
    {
        id: 56,
        name: "Salchipapa",
        category: "peruvian-breakfast",
        price: 10.42,
        description: "French fries topped with sliced hot dogs and sauces.",
        image: "./images/menu/salchipapa.jpg",
        available: true
    },
    {
        id: 57,
        name: "Salchipollo",
        category: "peruvian-breakfast",
        price: 18.75,
        description: "French fries topped with crispy chicken and house sauces.",
        image: "./images/menu/salchipollo.jpg",
        available: true
    },
    {
        id: 58,
        name: "Salchihuevo",
        category: "peruvian-breakfast",
        price: 15.63,
        description: "French fries with hot dogs and fried eggs.",
        image: "./images/menu/salchihuevo.jpg",
        available: true
    },

    // --- APPETIZERS ---
    {
        id: 59,
        name: "Papa a la Huancaína",
        category: "appetizers",
        price: 12.50,
        description: "Boiled potatoes topped with creamy Peruvian yellow pepper cheese sauce.",
        image: "./images/menu/papa-a-la-huancaina.jpg",
        available: true
    },
    {
        id: 60,
        name: "Papa Rellena",
        category: "appetizers",
        price: 12.50,
        description: "Stuffed potato filled with seasoned beef and fried until crispy.",
        image: "./images/menu/papa-rellena.jpg",
        available: true
    },
    {
        id: 61,
        name: "Causa Limeña",
        category: "appetizers",
        price: 12.50,
        description: "Layered cold potato dish with chicken or seafood filling.",
        image: "./images/menu/causa-limena.jpg",
        available: true
    },
    {
        id: 62,
        name: "Yuca Frita",
        category: "appetizers",
        price: 7.29,
        description: "Crispy fried cassava served with dipping sauce.",
        image: "./images/menu/yuca-frita.jpg",
        available: true
    },
    {
        id: 63,
        name: "Yuca con Huancaína",
        category: "appetizers",
        price: 15.63,
        description: "Fried cassava topped with creamy huancaína sauce.",
        image: "./images/menu/yuca-con-huancaina.jpg",
        available: true
    },
    {
        id: 64,
        name: "Empanadas",
        category: "appetizers",
        price: 8.33,
        description: "Golden baked pastries stuffed with beef or chicken.",
        image: "./images/menu/empanadas.jpg",
        available: true
    },
    {
        id: 65,
        name: "Plátanos Fritos",
        category: "appetizers",
        price: 6.25,
        description: "Sweet fried plantains served hot.",
        image: "./images/menu/platanos-fritos.jpg",
        available: true
    },

    // --- SEAFOOD ---
    {
        id: 66,
        name: "Ceviche de Pescado",
        category: "seafood",
        price: 22.92,
        description: "Fresh fish marinated in lime juice with onions, cilantro, corn and sweet potato.",
        image: "./images/menu/ceviche-de-pescado.jpg",
        available: true
    },
    {
        id: 67,
        name: "Ceviche Mixto",
        category: "seafood",
        price: 26.04,
        description: "Fresh fish and seafood marinated in lime juice with traditional Peruvian flavors.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 68,
        name: "Leche de Tigre",
        category: "seafood",
        price: 22.00,
        description: "Traditional spicy ceviche juice served with fresh seafood.",
        image: "./images/menu/leche-de-tigre.jpg",
        available: true
    },
    {
        id: 69,
        name: "Jalea",
        category: "seafood",
        price: 31.25,
        description: "Crispy mixed seafood served with yuca and salsa criolla.",
        image: "./images/menu/jalea.jpg",
        available: true
    },
    {
        id: 70,
        name: "Trío Marino",
        category: "seafood",
        price: 31.25,
        description: "Combination of ceviche, seafood rice and fried seafood.",
        image: "./images/menu/trio-marino.jpg",
        available: true
    },
    {
        id: 71,
        name: "Parihuela",
        category: "seafood",
        price: 30.00,
        description: "Traditional Peruvian seafood soup with rich coastal flavors.",
        image: "./images/menu/parihuela.jpg",
        available: true
    },
    {
        id: 72,
        name: "Pescado Frito",
        category: "seafood",
        price: 22.92,
        description: "Crispy fried fish served with rice, yuca and tartar sauce.",
        image: "./images/menu/pescado-frito.jpg",
        available: true
    },
    {
        id: 73,
        name: "Causa Acevichada",
        category: "seafood",
        price: 30.00,
        description: "Peruvian causa topped with fresh ceviche.",
        image: "./images/menu/causa-acevichada.jpg",
        available: true
    },

    // --- PERUVIAN CLASSICS ---
    {
        id: 74,
        name: "Lomo Saltado",
        category: "peruvian-classics",
        price: 26.04,
        description: "Traditional Peruvian filet mignon stir-fried with onions, tomatoes, fries and rice.",
        image: "./images/menu/lomo-saltado.jpg",
        available: true
    },
    {
        id: 75,
        name: "Tallarines Verdes con Milanesa",
        category: "peruvian-classics",
        price: 22.00,
        description: "Peruvian pesto pasta served with crispy breaded steak.",
        image: "./images/menu/tallarines-verdes-con-milanesa.jpg",
        available: true
    },
    {
        id: 76,
        name: "Tallarines Saltados",
        category: "peruvian-classics",
        price: 26.04,
        description: "Peruvian-style stir-fried noodles with beef or chicken.",
        image: "./images/menu/tallarines-saltados.jpg",
        available: true
    },
    {
        id: 77,
        name: "Tallarines Verdes con Bistec",
        category: "peruvian-classics",
        price: 26.04,
        description: "Peruvian pesto pasta served with steak.",
        image: "./images/menu/tallarines-verdes-con-bistec.jpg",
        available: true
    },
    {
        id: 78,
        name: "Ají de Gallina",
        category: "peruvian-classics",
        price: 22.00,
        description: "Shredded chicken in creamy yellow pepper sauce served with rice and potatoes.",
        image: "./images/menu/aji-de-gallina.jpg",
        available: true
    },
    {
        id: 79,
        name: "Pollo Saltado",
        category: "peruvian-classics",
        price: 20.00,
        description: "Peruvian stir-fried chicken with onions, tomatoes, fries and rice.",
        image: "./images/menu/pollo-saltado.jpg",
        available: true
    },
    {
        id: 80,
        name: "Pollada",
        category: "peruvian-classics",
        price: 20.00,
        description: "Peruvian-style roasted chicken served with rice and salad.",
        image: "./images/menu/pollada.jpg",
        available: true
    },
    {
        id: 81,
        name: "Mostrito",
        category: "peruvian-classics",
        price: 26.04,
        description: "Peruvian chaufa rice served with crispy chicken.",
        image: "./images/menu/mostrito.jpg",
        available: true
    },
    {
        id: 82,
        name: "Milanesa",
        category: "peruvian-classics",
        price: 18.75,
        description: "Breaded crispy steak served with fries and rice.",
        image: "./images/menu/milanesa.jpg",
        available: true
    },
    {
        id: 83,
        name: "Lomo a lo Pobre",
        category: "peruvian-classics",
        price: 28.13,
        description: "Steak served with rice, fries, fried egg and sweet plantains.",
        image: "./images/menu/lomo-a-lo-pobre.jpg",
        available: true
    },
    {
        id: 84,
        name: "Bistec a lo Pobre",
        category: "peruvian-classics",
        price: 28.13,
        description: "Traditional steak topped with fried egg, fries and rice.",
        image: "./images/menu/bistec-a-lo-pobre.jpg",
        available: true
    },
    {
        id: 85,
        name: "Tallarín a la Huancaína con Lomo",
        category: "peruvian-classics",
        price: 25.00,
        description: "Creamy huancaína pasta served with lomo steak.",
        image: "./images/menu/tallarin-a-la-huancaina-con-lomo.jpg",
        available: true
    },

    // --- TRADITIONAL SPECIALS ---
    {
        id: 86,
        name: "Arroz con Pato",
        category: "traditional-specials",
        price: 25.00,
        description: "Traditional Peruvian cilantro rice slowly cooked with duck and rich northern flavors.",
        image: "./images/menu/arroz-con-pato.jpg",
        available: true
    },
    {
        id: 87,
        name: "Arroz con Chancho",
        category: "traditional-specials",
        price: 22.00,
        description: "Seasoned Peruvian rice served with tender slow-cooked pork and salsa criolla.",
        image: "./images/menu/arroz-con-chancho.jpg",
        available: true
    },
    {
        id: 88,
        name: "Seco a la Norteña",
        category: "traditional-specials",
        price: 26.04,
        description: "Slow-cooked beef stew with cilantro served with beans and rice.",
        image: "./images/menu/seco-a-la-nortena.jpg",
        available: true
    },

    // --- POLLO A LA BRASA ---
    {
        id: 89,
        name: "Pollo a la Brasa (Whole)",
        category: "pollo-a-la-brasa",
        price: 37.99,
        description: "Whole Peruvian rotisserie chicken served with fries and salad.",
        image: "./images/menu/pollo-a-la-brasa-whole.jpg",
        available: true
    },
    {
        id: 90,
        name: "Pollo a la Brasa (Half)",
        category: "pollo-a-la-brasa",
        price: 24.99,
        description: "Half Peruvian rotisserie chicken served with fries and salad.",
        image: "./images/menu/pollo-a-la-brasa-half.jpg",
        available: true
    },
    {
        id: 91,
        name: "Pollo a la Brasa (Quarter)",
        category: "pollo-a-la-brasa",
        price: 13.99,
        description: "Quarter Peruvian rotisserie chicken served with fries and salad.",
        image: "./images/menu/pollo-a-la-brasa-quarter.jpg",
        available: true
    },

    // --- DESSERTS ---
    {
        id: 92,
        name: "Tres Leches",
        category: "desserts",
        price: 8.33,
        description: "Classic sponge cake soaked in three kinds of milk.",
        image: "./images/menu/tres-leches.jpg",
        available: true
    },
    {
        id: 93,
        name: "Churros",
        category: "desserts",
        price: 8.33,
        description: "Warm fried dough sticks coated with cinnamon sugar.",
        image: "./images/menu/churros.jpg",
        available: true
    },
    {
        id: 94,
        name: "Lucuma Ice Cream",
        category: "desserts",
        price: 8.00,
        description: "Traditional Peruvian lucuma flavored ice cream.",
        image: "./images/menu/lucuma-ice-cream.jpg",
        available: true
    },
    {
        id: 95,
        name: "Alfajores (Box of 6)",
        category: "desserts",
        price: 10.00,
        description: "Peruvian cookies filled with dulce de leche.",
        image: "./images/menu/alfajores-box-of-6.jpg",
        available: true
    },

    // --- KIDS MENU ---
    {
        id: 96,
        name: "Tallarín Verde Niño",
        category: "kids-menu",
        price: 15.00,
        description: "Kids size Peruvian pesto pasta.",
        image: "./images/menu/tallarin-verde-nino.jpg",
        available: true
    },
    {
        id: 97,
        name: "Pescadito Kids",
        category: "kids-menu",
        price: 15.00,
        description: "Kids fried fish served with fries.",
        image: "./images/menu/pescadito-kids.jpg",
        available: true
    },
    {
        id: 98,
        name: "Pollito con Papas",
        category: "kids-menu",
        price: 12.00,
        description: "Chicken and fries kids combo.",
        image: "./images/menu/pollito-con-papas.jpg",
        available: true
    },

    // --- DRINKS ---
    {
        id: 99,
        name: "Chicha Morada",
        category: "drinks",
        price: 6.25,
        description: "Traditional Peruvian purple corn drink with pineapple and spices.",
        image: "./images/menu/chicha-morada.jpg",
        available: true
    },
    {
        id: 100,
        name: "Jarra de Chicha",
        category: "drinks",
        price: 20.83,
        description: "Large pitcher of traditional Peruvian purple corn drink.",
        image: "./images/menu/jarra-de-chicha.jpg",
        available: true
    },
    {
        id: 101,
        name: "Maracuyá Juice",
        category: "drinks",
        price: 5.21,
        description: "Fresh passion fruit juice.",
        image: "./images/menu/maracuya-juice.jpg",
        available: true
    },
    {
        id: 102,
        name: "Jarra de Maracuya",
        category: "drinks",
        price: 20.83,
        description: "Large pitcher of passion fruit juice.",
        image: "./images/menu/jarra-de-maracuya.jpg",
        available: true
    },
    {
        id: 103,
        name: "Papaya Juice",
        category: "drinks",
        price: 7.00,
        description: "Fresh papaya smoothie style juice.",
        image: "./images/menu/papaya-juice.jpg",
        available: true
    },
    {
        id: 104,
        name: "Strawberry Milk Juice",
        category: "drinks",
        price: 8.00,
        description: "Fresh strawberry drink blended with milk.",
        image: "./images/menu/strawberry-milk-juice.jpg",
        available: true
    },
    {
        id: 105,
        name: "Fresh Juice",
        category: "drinks",
        price: 8.00,
        description: "Fresh blended fruit juice.",
        image: "./images/menu/fresh-juice.jpg",
        available: true
    },
    {
        id: 106,
        name: "Inca Kola",
        category: "drinks",
        price: 3.13,
        description: "Popular Peruvian golden soda.",
        image: "./images/menu/inca-kola.jpg",
        available: true
    },
    {
        id: 107,
        name: "Inca Kola Large",
        category: "drinks",
        price: 6.25,
        description: "Large bottle of popular Peruvian golden soda.",
        image: "./images/menu/inca-kola-large.jpg",
        available: true
    },
    {
        id: 108,
        name: "Jarritos",
        category: "drinks",
        price: 4.00,
        description: "Mexican fruit flavored soda.",
        image: "./images/menu/jarritos.jpg",
        available: true
    },
    {
        id: 109,
        name: "Kola Inglesa",
        category: "drinks",
        price: 5.00,
        description: "Traditional Peruvian red soda.",
        image: "./images/menu/kola-inglesa.jpg",
        available: true
    },

    // --- EXTRAS & SIDES ---
    {
        id: 110,
        name: "Extra Ají",
        category: "extras-sides",
        price: 1.50,
        description: "Side of homemade spicy Peruvian sauce.",
        image: "./images/menu/extra-aji.jpg",
        available: true
    },
    {
        id: 111,
        name: "Side of Rice",
        category: "extras-sides",
        price: 5.00,
        description: "Steamed white rice.",
        image: "./images/menu/side-of-rice.jpg",
        available: true
    },
    {
        id: 112,
        name: "Side of Huancaína",
        category: "extras-sides",
        price: 7.00,
        description: "Extra creamy huancaína sauce.",
        image: "./images/menu/side-of-huancaina.jpg",
        available: true
    },
    {
        id: 113,
        name: "French Fries",
        category: "extras-sides",
        price: 5.21,
        description: "Side of crispy fries.",
        image: "./images/menu/french-fries.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

function renderProducts(category = 'peruvian-breakfast') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No products available in this category</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Add to cart
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                // Disparar evento personalizado con la cantidad correcta
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('peruvian-breakfast');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);