

const cart = JSON.parse(localStorage.getItem('cart')) || []; 

document.addEventListener('DOMContentLoaded', () => {
  
  const cartCount = document.getElementById('cart-count');

 
  const updateCartCount = () => {
    cartCount.innerText = cart.length;
    if (cart.length > 0) {
      cartCount.classList.remove('d-none'); 
    } else {
      cartCount.classList.add('d-none');
    }
  };

 
  const products = [
    { id: 1, fName: 'cake', price: '10$', Image: './assets/img/menu item/cake.jpg' },
    { id: 2, fName: 'caesar', price: '12$', Image: './assets/img/menu item/caesar.jpg' },
    { id: 3, fName: 'bread barrel', price: '20$', Image: './assets/img/menu item/bread-barrel.jpg' },
    { id: 4, fName: 'greek salad', price: '15$', Image: './assets/img/menu item/greek-salad.jpg' },
    { id: 5, fName: 'lobster bisque', price: '30$', Image: './assets/img/menu item/lobster-bisque.jpg' },
    { id: 6, fName: 'lobster roll', price: '35$', Image: './assets/img/menu item/lobster-roll.jpg' },
    { id: 7, fName: 'mozzarella', price: '21$', Image: './assets/img/menu item/mozzarella.jpg' },
    { id: 8, fName: 'spinach salad', price: '27$', Image: './assets/img/menu item/spinach-salad.jpg' },
    { id: 9, fName: 'tuscan grilled', price: '50$', Image: './assets/img/menu item/tuscan-grilled.jpg' },
  ];

  
  const createItem = (item) => {
    const col = document.createElement('div');
    col.classList.add('col-sm-6', 'col-lg-4');
    col.innerHTML = `
      <div class="card">
        <a href="#" class="product-item">
          <img src="${item.Image}" data-id="${item.id}" class="card-img-top img-fluid product-img" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">${item.fName}</h5>
          <p class="card-text">${item.price}</p>
          <a href="#" class="btn btn-primary add-to-cart" data-id="${item.id}">Add to cart</a>
        </div>
      </div>
    `;
    return col;
  };

  const renderItems = (products) => {
    const productsContainer = document.getElementById('products');
    products.forEach(item => {
      const col = createItem(item);
      productsContainer.appendChild(col);
    });

    
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const currentItem = products.find(item => item.id === +id);
        cart.push(currentItem);
        localStorage.setItem('cart', JSON.stringify(cart)); 
        updateCartCount(); 
        window.location.href = './cart.html'; 
      });
    });
  };

  renderItems(products); 
  updateCartCount(); 
});
