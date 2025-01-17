// JavaScript to handle "Add to Cart" functionality
let cart = [];

const cartCount = document.getElementById('cart-count');

const updateCartCount = () => {
    cartCount.textContent = cart.length;
};

const addToCart = (productId, productName, productPrice) => {
    const product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice)
    };

    // Add product to cart
    cart.push(product);
    updateCartCount();
};

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');

        addToCart(productId, productName, productPrice);
    });
});
