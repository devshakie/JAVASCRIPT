fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products');
        data.forEach(product => {
          
            const productDiv = document.createElement('div');
            productDiv.classList.add('product') 

            productDiv.innerHTML =
                `
               
                <p>${product.id}</p>
                <h2>Name: ${product.name}</h2>
                <p>Description: ${product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Stock: ${product.stock}</p>
                `
            productsContainer.appendChild(productDiv);
        });
        

    })
//Error Handling
.catch(error=>console.error("Error",error))