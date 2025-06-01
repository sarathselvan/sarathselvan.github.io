const productList = document.getElementById("product-list");

fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="details">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;

      productList.appendChild(card);
    });
  });
