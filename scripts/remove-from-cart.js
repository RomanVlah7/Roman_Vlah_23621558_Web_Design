document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("cart-container");

    container.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-from-cart-button")) {
            const button = event.target;
            const productDiv = button.closest(".product");

            const stockName = productDiv.querySelector(".product-name").innerText;
            const imgSrc = productDiv.querySelector(".product-img").getAttribute("src");
            const specs = productDiv.querySelector(".product-specs").innerText;
            const price = productDiv.querySelector(".product-price").innerText;

            const productData = {
                stockName,
                imgSrc,
                specs,
                price
            };

            fetch("http://localhost:5005/api/user-cart/delete-from-cart", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(err => { throw new Error(err.message || "Грешка при изтриване."); });
                    }

                    button.textContent = "Премахнато";
                    button.style.backgroundColor = "#ccc";
                    button.disabled = true;


                })
                .catch(error => {
                    console.error("Грешка при премахване от кошницата:", error.message);
                });
        }
    });
});
