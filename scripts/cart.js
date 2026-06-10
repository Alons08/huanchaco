// Carrito de compras con expiración
let cart = [];
let cartExpirationTimer = null;

// Cargar carrito con verificación de expiración
function loadCartWithExpiration() {
    const cartData = localStorage.getItem('cart');
    const cartTimestamp = localStorage.getItem('cartTimestamp');
    
    if (cartData && cartTimestamp) {
        const now = new Date().getTime();
        const expirationTime = 20 * 60 * 1000; // 20 minutos en milisegundos
        
        if (now - parseInt(cartTimestamp) < expirationTime) {
            cart = JSON.parse(cartData);
            startCartExpirationTimer(expirationTime - (now - parseInt(cartTimestamp)));
            updateCart(); // Actualizar la vista del carrito al cargar
            return true;
        } else {
            clearCart();
        }
    }
    return false;
}

// Guardar carrito con timestamp
function saveCartWithTimestamp() {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTimestamp', new Date().getTime().toString());
        startCartExpirationTimer(20 * 60 * 1000); // 20 minutos
    } else {
        clearCart(); // Limpiar completamente si el carrito está vacío
    }
}

// Iniciar temporizador de expiración
function startCartExpirationTimer(duration) {
    if (cartExpirationTimer) clearTimeout(cartExpirationTimer);
    cartExpirationTimer = setTimeout(clearCart, duration);
}

// Limpiar carrito completamente
function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTimestamp');
    updateCart();
    updateCartCount();
}

// Actualizar contador del carrito
function updateCartCount() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartElements.count) {
        cartElements.count.textContent = itemCount;
    }
}

// Elementos del DOM
const cartElements = {
    btn: document.getElementById('cart-btn'),
    modal: document.getElementById('cart-modal'),
    overlay: document.getElementById('cart-overlay'),
    items: document.getElementById('cart-items'),
    total: document.getElementById('cart-total'),
    count: document.getElementById('cart-count'),
    close: document.getElementById('close-cart'),
    close2: document.getElementById('close-cart-2'),
    checkout: document.getElementById('checkout'),
    backToCart: document.getElementById('back-to-cart'),
    cancelOrder: document.getElementById('cancel-order'),
    submitOrder: document.getElementById('submit-order'),
    form: document.getElementById('order-form'),
    orderType: document.getElementById('order-type'),
    pickupFields: document.getElementById('pickup-fields'),
    dineInFields: document.getElementById('dinein-fields'),
    dineInArea: document.getElementById('dinein-area'),
    locationGroup: document.getElementById('location-group'),
    locationSelect: document.getElementById('location-selection'),
    reservationArea: document.getElementById('reservation-area'),
    reservationLocationGroup: document.getElementById('reservation-location-group'),
    reservationLocationSelect: document.getElementById('reservation-location-selection'),
    reservationDate: document.getElementById('reservation-date'),
    reservationTime: document.getElementById('reservation-time'),
    reservationPeople: document.getElementById('reservation-people'),
    reservationOverlay: document.getElementById('reservation-overlay'),
    reservationModal: document.getElementById('reservation-modal'),
    reservationForm: document.getElementById('reservation-form'),
    makeReservationBtn: document.getElementById('make-reservation-btn'),
    closeReservation: document.getElementById('close-reservation'),
    cancelReservation: document.getElementById('cancel-reservation'),
    submitReservation: document.getElementById('submit-reservation'),
    orderNotes: document.getElementById('order-notes'),
    step1: document.getElementById('cart-step-1'),
    step2: document.getElementById('cart-step-2'),
    reservationStep: document.getElementById('reservation-step')
};

// Inicializar carrito
function initCart() {
    loadCartWithExpiration();
    setupCartEvents();
    setupReservationModal();
    setupOrderTypeToggle();
    setupDineInAreaToggle();
    setupReservationDateListeners();
    setupReservationAreaToggle();
    updateCartCount();

    // Ocultar campos de ubicación y secciones al cargar
    hideAllDynamicFields();

    // Asignar fecha mínima para reservas
    setReservationDateMin();
    populateReservationTimes();

    // Mostrar siempre el paso 1 al abrir el carrito
    cartElements.step1.classList.add('active');
    cartElements.step2.classList.remove('active');
}

function hideAllDynamicFields() {
    if (cartElements.pickupFields) {
        cartElements.pickupFields.classList.remove('active');
        cartElements.pickupFields.style.display = 'none';
    }
    if (cartElements.dineInFields) {
        cartElements.dineInFields.classList.remove('active');
        cartElements.dineInFields.style.display = 'none';
    }
    if (cartElements.locationGroup) {
        cartElements.locationGroup.style.display = 'none';
    }
    if (cartElements.locationSelect) {
        cartElements.locationSelect.innerHTML = '<option value="">Select</option>';
    }
    if (cartElements.reservationLocationGroup) {
        cartElements.reservationLocationGroup.style.display = 'none';
    }
    if (cartElements.reservationLocationSelect) {
        cartElements.reservationLocationSelect.innerHTML = '<option value="">Select</option>';
    }
}

// Configurar eventos de tipo de pedido
function setupOrderTypeToggle() {
    if (cartElements.orderType) {
        cartElements.orderType.addEventListener('change', function() {
            const orderType = this.value;
            hideAllDynamicFields();

            if (orderType === 'takeaway') {
                cartElements.pickupFields.classList.add('active');
                cartElements.pickupFields.style.display = 'block';
            } else if (orderType === 'dinein') {
                cartElements.dineInFields.classList.add('active');
                cartElements.dineInFields.style.display = 'block';
            }
        });
    }
}

// Configurar selección de área para comer en el local
function setupDineInAreaToggle() {
    if (cartElements.dineInArea) {
        cartElements.dineInArea.addEventListener('change', function() {
            const area = this.value;

            if (!cartElements.locationGroup || !cartElements.locationSelect) return;

            cartElements.locationSelect.innerHTML = '<option value="">Select</option>';

            let count = 0;
            if (area === 'table') count = 12;
            else if (area === 'bar') count = 5;
            else if (area === 'outside') count = 3;

            if (count > 0) {
                for (let i = 1; i <= count; i++) {
                    const label = `${area.charAt(0).toUpperCase() + area.slice(1)} ${i}`;
                    const option = document.createElement('option');
                    option.value = label;
                    option.textContent = label;
                    cartElements.locationSelect.appendChild(option);
                }
                cartElements.locationGroup.style.display = 'block';
            } else {
                cartElements.locationGroup.style.display = 'none';
            }
        });
    }
}

function setupReservationAreaToggle() {
    if (cartElements.reservationArea) {
        cartElements.reservationArea.addEventListener('change', function() {
            const area = this.value;

            if (!cartElements.reservationLocationGroup || !cartElements.reservationLocationSelect) return;

            cartElements.reservationLocationSelect.innerHTML = '<option value="">Select</option>';

            let count = 0;
            if (area === 'table') count = 12;
            else if (area === 'bar') count = 5;
            else if (area === 'outside') count = 3;

            if (count > 0) {
                for (let i = 1; i <= count; i++) {
                    const label = `${area.charAt(0).toUpperCase() + area.slice(1)} ${i}`;
                    const option = document.createElement('option');
                    option.value = label;
                    option.textContent = label;
                    cartElements.reservationLocationSelect.appendChild(option);
                }
                cartElements.reservationLocationGroup.style.display = 'block';
            } else {
                cartElements.reservationLocationGroup.style.display = 'none';
            }
        });
    }
}

function setupReservationDateListeners() {
    if (cartElements.reservationDate) {
        cartElements.reservationDate.addEventListener('change', function() {
            populateReservationTimes();
        });
    }
}

function setReservationDateMin() {
    if (!cartElements.reservationDate) return;
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    cartElements.reservationDate.min = dateString;
}

function populateReservationTimes() {
    if (!cartElements.reservationTime || !cartElements.reservationDate) return;

    const selectedDateValue = cartElements.reservationDate.value;
    cartElements.reservationTime.innerHTML = '<option value="">Select</option>';

    const selectedDate = selectedDateValue ? new Date(selectedDateValue + 'T00:00:00') : null;
    const schedule = getRestaurantSchedule(selectedDate);

    if (!schedule) {
        if (selectedDateValue) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Restaurant is closed on this day';
            cartElements.reservationTime.appendChild(option);
        }
        return;
    }

    const slots = getTimeSlots(schedule.open, schedule.close, selectedDate);
    if (slots.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No available times for this date';
        cartElements.reservationTime.appendChild(option);
        return;
    }

    slots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        cartElements.reservationTime.appendChild(option);
    });
}

function getRestaurantSchedule(date) {
    if (!date || isNaN(date.getTime())) return null;

    const day = date.getDay();
    const schedule = {
        0: { open: 9, close: 18 }, // Sunday
        1: null, // Monday closed
        2: { open: 11, close: 20 }, // Tuesday
        3: { open: 11, close: 20 }, // Wednesday
        4: { open: 11, close: 20 }, // Thursday
        5: { open: 11, close: 20 }, // Friday
        6: { open: 9, close: 20 } // Saturday
    };

    return schedule[day] || null;
}

function getTimeSlots(openHour, closeHour, selectedDate) {
    const slots = [];
    const date = selectedDate ? new Date(selectedDate) : null;
    const now = new Date();

    let currentHour = openHour;
    let currentMinute = 0;

    while (currentHour < closeHour) {
        const slot = formatTimeSlot(currentHour, currentMinute);
        if (date && isSameDate(date, now)) {
            const slotTime = new Date(date);
            slotTime.setHours(currentHour, currentMinute, 0, 0);
            const minAllowed = new Date(now.getTime() + 30 * 60000);
            if (slotTime >= minAllowed) {
                slots.push(slot);
            }
        } else {
            slots.push(slot);
        }

        currentMinute += 30;
        if (currentMinute >= 60) {
            currentMinute = 0;
            currentHour++;
        }
    }

    return slots;
}

function formatTimeSlot(hour, minute) {
    const h = hour.toString().padStart(2, '0');
    const m = minute.toString().padStart(2, '0');
    return `${h}:${m}`;
}

function isSameDate(a, b) {
    return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
    let eventsConfigured = false;

    function setupCartEvents() {
        if (eventsConfigured) return; // Evitar duplicación
        eventsConfigured = true;

        if (cartElements.btn) cartElements.btn.addEventListener('click', showCart);
        if (cartElements.close) cartElements.close.addEventListener('click', hideCart);
        if (cartElements.close2) cartElements.close2.addEventListener('click', hideCart);
        if (cartElements.overlay) cartElements.overlay.addEventListener('click', hideCart);
        if (cartElements.checkout) cartElements.checkout.addEventListener('click', goToCheckout);
        if (cartElements.backToCart) cartElements.backToCart.addEventListener('click', backToCart);
        if (cartElements.cancelOrder) cartElements.cancelOrder.addEventListener('click', backToCart);
        if (cartElements.submitOrder) cartElements.submitOrder.addEventListener('click', submitOrder);

        document.addEventListener('productAddedToCart', (e) => {
            console.log('Evento productAddedToCart disparado:', e.detail);
            addToCart(e.detail.product, e.detail.quantity);
        });
    }

function setupReservationModal() {
    if (cartElements.makeReservationBtn) {
        cartElements.makeReservationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showReservationModal();
        });
    }
    if (cartElements.closeReservation) cartElements.closeReservation.addEventListener('click', hideReservationModal);
    if (cartElements.reservationOverlay) cartElements.reservationOverlay.addEventListener('click', hideReservationModal);
    if (cartElements.cancelReservation) cartElements.cancelReservation.addEventListener('click', hideReservationModal);
    if (cartElements.submitReservation) cartElements.submitReservation.addEventListener('click', submitReservation);
}

function showReservationModal() {
    if (!cartElements.reservationModal || !cartElements.reservationOverlay) return;

    if (cartElements.reservationForm) {
        cartElements.reservationForm.reset();
    }
    if (cartElements.reservationLocationGroup) {
        cartElements.reservationLocationGroup.style.display = 'none';
    }
    setReservationDateMin();
    populateReservationTimes();

    if (cartElements.reservationStep) {
        cartElements.reservationStep.classList.add('active');
    }

    cartElements.reservationModal.classList.add('active');
    cartElements.reservationOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideReservationModal() {
    if (!cartElements.reservationModal || !cartElements.reservationOverlay) return;

    if (cartElements.reservationStep) {
        cartElements.reservationStep.classList.remove('active');
    }
    cartElements.reservationModal.classList.remove('active');
    cartElements.reservationOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function validateReservationForm() {
    const form = cartElements.reservationForm;
    if (!form) return false;

    let isValid = true;
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('invalid');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
    });

    if (!form['reservation-date'].value) {
        markFieldInvalid(form['reservation-date'], 'Please select reservation date');
        isValid = false;
    } else {
        const selectedDate = new Date(form['reservation-date'].value + 'T00:00:00');
        if (!getRestaurantSchedule(selectedDate)) {
            markFieldInvalid(form['reservation-date'], 'The restaurant is closed on this day');
            isValid = false;
        }
    }

    if (!form['reservation-time'].value) {
        markFieldInvalid(form['reservation-time'], 'Please select reservation time');
        isValid = false;
    }

    if (!form['reservation-area'].value) {
        markFieldInvalid(form['reservation-area'], 'Please select reservation area');
        isValid = false;
    }

    if (!form['reservation-location-selection'].value) {
        markFieldInvalid(form['reservation-location-selection'], 'Please select reservation location');
        isValid = false;
    }

    if (!form['reservation-people'].value) {
        markFieldInvalid(form['reservation-people'], 'Please select number of people');
        isValid = false;
    }

    if (!isValid) {
        const firstError = document.querySelector('.invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return isValid;
}

function submitReservation() {
    const form = cartElements.reservationForm;
    if (!form) return;

    if (!validateReservationForm()) {
        return;
    }

    const reservationDate = form['reservation-date'].value;
    const reservationTime = form['reservation-time'].value;
    const reservationArea = form['reservation-area'].value;
    const reservationLocation = form['reservation-location-selection'].value;
    const reservationPeople = form['reservation-people'].value;
    const areaLabel = reservationArea.charAt(0).toUpperCase() + reservationArea.slice(1);

    let message = `Hello Huanchaco! I would like to make a reservation:\n\n`;
    message += `📅 *Date:* ${reservationDate}\n`;
    message += `⏰ *Time:* ${reservationTime}\n`;
    message += `👥 *People:* ${reservationPeople}\n`;
    message += `🏷️ *Area:* ${areaLabel}\n`;
    message += `📍 *Location:* ${reservationLocation}\n`;
    message += `\nPlease confirm this reservation. Thank you!`;

    const whatsappUrl = `https://wa.me/19255051486?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    hideReservationModal();
    showNotification('Reservation request sent via WhatsApp', 'success');
    if (cartElements.reservationForm) cartElements.reservationForm.reset();
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type} show`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Mostrar/ocultar carrito
function showCart(e) {
    if (e) e.preventDefault();
    cartElements.modal.classList.add('active');
    cartElements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Mostrar siempre el paso 1 al abrir el carrito
    cartElements.step1.classList.add('active');
    cartElements.step2.classList.remove('active');
}

function hideCart() {
    cartElements.modal.classList.remove('active');
    cartElements.overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Ir al formulario de checkout
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('The cart is empty. Add items to your cart before checkout.', 'info');
        return;
    }
    
    cartElements.step1.classList.remove('active');
    cartElements.step2.classList.add('active');
}

// Volver al carrito desde el formulario
function backToCart() {
    cartElements.step2.classList.remove('active');
    cartElements.step1.classList.add('active');
}

// Actualizar vista del carrito
function updateCart() {
    if (!cartElements.items) return;
    
    cartElements.items.innerHTML = '';
    
    if (cart.length === 0) {
        cartElements.items.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (cartElements.total) cartElements.total.textContent = '$0.00';
        updateCartCount();
        saveCartWithTimestamp(); // Guardar estado vacío
        return;
    }
    
    let total = 0;
    let itemCount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.product.name}</h4>
                <p>$${item.product.price.toFixed(2)} c/u</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn minus" data-id="${item.product.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.product.id}">
                    <button class="quantity-btn plus" data-id="${item.product.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.product.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartElements.items.appendChild(cartItem);
    });
    
    if (cartElements.total) cartElements.total.textContent = `$${total.toFixed(2)}`;
    updateCartCount();
    saveCartWithTimestamp();
    setupCartItemEvents();
}

// Configurar eventos de items del carrito
function setupCartItemEvents() {
    document.querySelectorAll('.cart-item .quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const input = this.parentElement.querySelector('.quantity-input');
            let quantity = parseInt(input.value);
            
            if (this.classList.contains('minus')) {
                quantity = Math.max(1, quantity - 1);
            } else {
                quantity++;
            }
            
            input.value = quantity;
            updateCartItem(id, quantity);
        });
    });
    
    document.querySelectorAll('.cart-item .quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            const newQuantity = Math.max(1, parseInt(this.value) || 1);
            this.value = newQuantity; // Asegurar que el valor sea válido
            updateCartItem(id, newQuantity);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(parseInt(this.dataset.id));
        });
    });
}

// Funciones del carrito
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart (${quantity})`, 'success');
}

function updateCartItem(id, quantity) {
    const item = cart.find(item => item.product.id === id);
    if (item) {
        item.quantity = quantity;
        updateCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.product.id !== id);
    updateCart();
}

// Validar formulario
function validateForm() {
    const form = cartElements.form;
    const orderType = cartElements.orderType.value;
    const dineInArea = cartElements.dineInArea ? cartElements.dineInArea.value : '';
    let isValid = true;

    // Limpiar estados previos de validación
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('invalid');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
    });

    // Validar campos obligatorios comunes
    if (!form['customer-name'].value.trim()) {
        markFieldInvalid(form['customer-name'], 'Please enter your name');
        isValid = false;
    }

    if (!form['customer-phone'].value.trim()) {
        markFieldInvalid(form['customer-phone'], 'Please enter your phone number');
        isValid = false;
    }

    if (!orderType) {
        markFieldInvalid(form['order-type'], 'Please select order type');
        isValid = false;
    }

    if (orderType === 'takeaway') {
        if (!form['pickup-time'].value) {
            markFieldInvalid(form['pickup-time'], 'Please select estimated pickup time');
            isValid = false;
        }
    } else if (orderType === 'dinein') {
        if (!dineInArea) {
            markFieldInvalid(form['dinein-area'], 'Please select dining area');
            isValid = false;
        }
        if (!form['location-selection'].value) {
            markFieldInvalid(form['location-selection'], 'Please select table / bar / outside area');
            isValid = false;
        }
    }

    if (!isValid) {
        const firstError = document.querySelector('.invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return isValid;
}

// Función auxiliar para marcar campos inválidos
function markFieldInvalid(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('invalid');
    
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;
    formGroup.appendChild(errorMsg);
}

// Enviar pedido
function submitOrder() {
    const form = cartElements.form;
    const orderType = cartElements.orderType.value;

    if (!orderType) {
        showNotification('Please select an order type', 'error');
        return;
    }

    if (cart.length === 0) {
        showNotification('The cart is empty. Add items before checkout.', 'error');
        return;
    }

    if (!validateForm()) {
        return;
    }
    
    // Obtener datos del formulario
    const customerName = form['customer-name'].value.trim();
    const customerPhone = form['customer-phone'].value.trim();
    const paymentMethod = 'Pay at restaurant';

    let deliveryInfo = '';
    const notes = form['order-notes'].value.trim();

    if (orderType === 'takeaway') {
        const pickupTimeSelect = form['pickup-time'];
        const pickupTime = pickupTimeSelect.options[pickupTimeSelect.selectedIndex].text;
        deliveryInfo = `🛍️ *Takeaway / Pick Up*\n` +
                       `⏳ *Estimated Pick Up Time:* ${pickupTime}\n`;
    } else if (orderType === 'dinein') {
        const dineInArea = form['dinein-area'].value;
        const location = form['location-selection'].value;
        const areaLabel = dineInArea.charAt(0).toUpperCase() + dineInArea.slice(1);
        deliveryInfo = `🍽️ *Dine In*\n` +
                       `🏷️ *Area:* ${areaLabel}\n` +
                       `📍 *Location:* ${location}\n`;
    }

    // Build WhatsApp message
    let message = `Hello Huanchaco! I would like to place the following order:\n\n`;
    message += `*CUSTOMER DETAILS*\n`;
    message += `🙍‍♂️ *Name:* ${customerName}\n`;
    message += `📞 *Phone:* ${customerPhone}\n`;
    message += `💳 *Payment Method:* ${paymentMethod}\n\n`;

    message += `*ORDER DETAILS*\n`;
    message += deliveryInfo + '\n';

    if (cart.length > 0) {
        message += `🍽️ *ORDER*\n`;
        cart.forEach(item => {
            message += `- ${item.product.name} (x${item.quantity}): $ ${(item.product.price * item.quantity).toFixed(2)}\n`;
        });
        message += `\n💰 *Total: $${cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}*\n`;
    }

    if (notes) {
        message += `\n📝 *Notes:* ${notes}\n`;
    }

    message += `\nPlease confirm my order. Thank you!`;
            
    // Abrir WhatsApp 931088900 mio
    const whatsappUrl = `https://wa.me/19255051486?text=${encodeURIComponent(message)}`; /*AQUI EL NUMERO*/
    window.open(whatsappUrl, '_blank');
    
    hideCart(); //ocultar el carrito
    showNotification('Order successfully sent via WhatsApp', 'success'); // Notificación en pantalla de éxito
    clearCart(); // Limpiar carrito
    resetForm(); // Resetear formulario
 
}

// Resetear formulario
function resetForm() {
    if (cartElements.form) {
        cartElements.form.reset(); // Limpia los valores del formulario estándar

        // Limpia los campos dinámicos manualmente
        if (cartElements.locationSelect) {
            cartElements.locationSelect.innerHTML = '<option value="">Select</option>';
        }
        if (cartElements.orderNotes) {
            cartElements.orderNotes.value = '';
        }

        if (cartElements.locationGroup) {
            cartElements.locationGroup.style.display = 'none';
        }
        if (cartElements.reservationLocationGroup) {
            cartElements.reservationLocationGroup.style.display = 'none';
        }
        hideAllDynamicFields();
    }
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', initCart);