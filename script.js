let cart = [];
let cartCount = document.getElementById('cart-count');
let totalPrice = document.getElementById('total-price');
let cartModal = document.getElementById('cart-modal');
let cartItemsList = document.getElementById('cart-items');
let checkoutBtn = document.getElementById('checkout-btn');
let closeCartBtn = document.getElementById('close-cart');

// Function to update the cart
function updateCart() {
    cartCount.textContent = cart.length;
    totalPrice.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    // Clear the cart list UI
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });
}

// Function to handle Add to Cart button click
function addToCart(productId) {
    let products = [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 25 },
        { id: 3, name: "Product 3", price: 30 }
    ];

    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        let productId = parseInt(event.target.closest('.product-card').dataset.id);
        addToCart(productId);
    });
});

// Checkout Button functionality
checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to checkout...');
    cart = [];  // Clear the cart after checkout
    updateCart();
    cartModal.style.display = 'none';  // Close the cart modal
});

// Show the cart modal
cartCount.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Close the cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
