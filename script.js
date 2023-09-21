document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Step 1: Validate the data
        const tagline = document.getElementById('tagline').value;
        const priceRange = document.getElementById('price-range').value;
        const deliveryAddress = document.getElementById('delivery-address').value;
        const deliveryDate = document.getElementById('delivery-date').value;

        if (tagline.length > 20) {
            alert("Tagline should be 20 characters or less.");
            return;
        }

        if (priceRange < 0) {
            alert("Price Range cannot be negative.");
            return;
        }

        if (deliveryAddress.length === 0) {
            alert("Please enter a delivery address.");
            return;
        }

        // Step 2: Process the order and generate a receipt
        const receipt = generateReceipt(tagline, priceRange, deliveryAddress, deliveryDate);

        // Display the receipt
        alert(receipt);
    });

    function generateReceipt(tagline, priceRange, deliveryAddress, deliveryDate) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        return `Order received on: ${formattedDate}\nTagline: ${tagline}\nPrice Range: $${priceRange}\nDelivery Address: ${deliveryAddress}\nDelivery Date: ${deliveryDate}`;
    }
});
