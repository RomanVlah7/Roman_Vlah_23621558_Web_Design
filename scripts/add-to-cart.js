document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart-button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productElement = button.closest(".product");

            const stockName = productElement.querySelector("a:nth-of-type(1)").textContent.trim();
            const specs = productElement.querySelector(".scroll-bar-text-descr").textContent.trim();
            const price = productElement.querySelector(".scroll-bar-text-price").textContent.trim();
            const imgSrc = productElement.querySelector("img").getAttribute("src");

            const product = {
                Price: price,
                Specs: specs,
                ImgSrc: imgSrc,
                StockName: stockName
            };

            fetch("http://localhost:5005/api/user-cart/add-to-cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
                .then(data => {
                    console.log("Успешно добавено:", data);
                    button.textContent = "✔ Добавено";
                    button.disabled = true;
                    button.style.backgroundColor = "#2ecc71";
                })
        });
    });
});