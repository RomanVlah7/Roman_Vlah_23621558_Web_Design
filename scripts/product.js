const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("all-stocks.json")
    .then(res => res.json())
    .then(products => {
        const product = products.find(p => p.imgSrc === productId);

        if (!product) {
            document.body.innerHTML = "<h2>Продуктът не е намерен.</h2>";
            return;
        }

        document.getElementById("product-name").textContent = product.stockName;
        document.getElementById("product-description").textContent = product.specs;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-image").src = product.imgSrc;
    });
