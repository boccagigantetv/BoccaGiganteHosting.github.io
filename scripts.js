const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');
let cartData = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const packageName = this.parentElement.querySelector('h3').innerText;
        const packagePrice = this.parentElement.getAttribute('data-price');

        // Aggiungi al carrello
        cartData.push({ name: packageName, price: parseFloat(packagePrice) });
        updateCart();
    });
});

checkoutButton.addEventListener('click', function() {
    alert('Grazie per aver acquistato il nostro servizio!');
    cartData = [];
    updateCart();
});

function updateCart() {
    // Mostra il carrello
    cart.style.display = cartData.length > 0 ? 'block' : 'none';

    // Aggiorna la lista del carrello
    cartItems.innerHTML = '';
    cartData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Calcola il totale
    const total = cartData.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `Totale: €${total.toFixed(2)}`;
}
