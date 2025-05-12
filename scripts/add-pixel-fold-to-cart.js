document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".sector-1-button");
        button.addEventListener("click", function () {
            event.preventDefault();
            const productElement = button.closest(".sector-1-item");

            const stockName = "Pixel Fold"
            const specs = "16Ram| 512Rom"
            const price = "3000 BGN"
            const imgSrc = productElement.querySelector(".imageDisplay").getAttribute("src");

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