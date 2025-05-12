document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5005/api/user-cart/get-all-from-cart")
        .then(response => {
            if (!response.ok) throw new Error("HTTP error " + response.status);
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("cart-container");

            const existingProductDiv = container.querySelector(".product");
            if (existingProductDiv) {
                existingProductDiv.remove();
            }

            if (data.length === 0) {
                const emptyMessage = document.createElement("div");
                emptyMessage.innerHTML = "<a>Кошницата в момента е празна</a>";
                container.appendChild(emptyMessage);
                return;
            }

            data.forEach(item => {
                const productDiv = document.createElement("div");
                productDiv.className = "product";

                productDiv.innerHTML = `
                    <img src="${item.imgSrc}" alt="${item.stockName}" class="product-img">
                    <h3 class="product-name">${item.stockName}</h3>
                    <p class="product-specs">${item.specs}</p>
                    <p class="product-price">${item.price}</p>
                    <button class="remove-from-cart-button"> Премахване от кошницата </button>
                `;
                container.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error("Грешка при зареждане на количката:", error);
            const container = document.getElementById("cart-container");
            container.innerHTML = "<a>Грешка при зареждане на кошницата</a>";
        });
});