document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
        const size = button.getAttribute('data-size');
        const price = button.getAttribute('data-price');
        alert(`Selected: ${size} - ${price}`);
    });
});