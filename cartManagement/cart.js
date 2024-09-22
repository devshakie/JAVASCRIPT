 // Global array to store fetched products
 const addedDataJSON = [];
 // Global cart array
 const cart = [];

 // Fetch products from API and add to global array
 async function addProducts() {
     try {
         const response = await fetch("http://localhost:3001/products"); 
         const data = await response.json();
         addedDataJSON.push(...data);
         populateProducts();
     } catch (error) {
         console.error("Error fetching products:", error);
     }
 }

 // Populate products onto the DOM
 function populateProducts() {
     const productsContainer = document.getElementById("products-container");
     productsContainer.innerHTML = "";

     addedDataJSON.forEach((product) => {
         const productCard = document.createElement("div");
         productCard.classList.add("product-card");
         productCard.innerHTML = `
             <img src="${product.imageUrl}" alt="${product.title}">
             <h3>${product.title}</h3>
             <p>Price: ksh ${product.price}</p>
             <p>Date: ${product.date}</p>
             <p>Location: ${product.location}</p>
             <button onclick="addToCart(${product.id})">Add to Cart</button>
         `;
         productsContainer.appendChild(productCard);
     });
 }

 // Add product to cart with quantity handling
 function addToCart(productId) {
     const product = cart.find(item => item.id === productId);
     if (product) {
         product.quantity += 1; 
     } else {
         const newProduct = addedDataJSON.find(item => item.id === productId);
         cart.push({ ...newProduct, quantity: 1 });
     }
     updateCartUI();
 }

 // Update the cart UI to reflect the current state of the cart
 function updateCartUI() {
     const cartContainer = document.getElementById("cart-container");
     cartContainer.innerHTML = ""; 

     cart.forEach((item) => {
         const cartItem = document.createElement("div");
         cartItem.classList.add("cart-item");
         cartItem.innerHTML = `
             <h4>${item.title}</h4>
             <p>Price: ksh ${item.price}</p>
             <p>Quantity: ${item.quantity}</p>
             <div>
                 <button onclick="increaseProductQuantity(${item.id})">+</button>
                 <button onclick="reduceProductQuantity(${item.id})">-</button>
                 <button onclick="deleteProductFromCart(${item.id})">Remove</button>
             </div>
         `;
         cartContainer.appendChild(cartItem);
     });
 }

 // Increase product quantity in the cart
 function increaseProductQuantity(productId) {
     const product = cart.find(item => item.id === productId);
     if (product) {
         product.quantity += 1;
         updateCartUI();
     }
 }

 // Reduce product quantity in the cart
 function reduceProductQuantity(productId) {
     const product = cart.find(item => item.id === productId);
     if (product) {
         if (product.quantity > 1) {
             product.quantity -= 1;
         } else {
             deleteProductFromCart(productId); // Remove product if quantity is 0
         }
         updateCartUI();
     }
 }

 // Delete product from the cart
 function deleteProductFromCart(productId) {
     const productIndex = cart.findIndex(item => item.id === productId);
     if (productIndex !== -1) {
         cart.splice(productIndex, 1); 
         updateCartUI();
     }
 }


 addProducts()