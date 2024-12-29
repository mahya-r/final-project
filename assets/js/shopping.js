
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const clearCartButton = document.getElementById('clear-cart');

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');
      cartItem.innerHTML = `
          <div class="d-flex align-items-center">
            <img src="${item.Image}" alt="${item.fName}" style="width: 50px; height: 50px; margin-right: 10px;">
            <span>${item.fName}</span>
          </div>
          <span>${item.price}</span>
          <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}">Remove</button>
        `;
      cartItemsContainer.appendChild(cartItem);
    });

   
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const updatedCart = cart.filter(item => item.id !== +id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload(); 
      });
    });
  }

 
  clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    location.reload();
  });
});
