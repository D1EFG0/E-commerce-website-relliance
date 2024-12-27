document.addEventListener("DOMContentLoaded", function() {
    const bagButton = document.querySelector(".bagbutton");
    const subscreen = document.querySelector(".subscreen");
    const body = document.querySelector("body");
    const shoppingItems = document.querySelector(".shopping-items");
    const noItemsMsg = document.querySelector(".no-items-msg");

    bagButton.addEventListener("click", function() {
        subscreen.classList.toggle("active");
        body.classList.toggle("active-overlay"); // Toggle the 'active-overlay' class on body
        checkShoppingItems(); // Check shopping items when the bag is opened
    });

    // Close the subscreen when clicking the close button
    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", function() {
        subscreen.classList.remove("active");
        body.classList.remove("active-overlay"); // Remove the 'active-overlay' class from body
    });

    // Close the subscreen when clicking anywhere outside it
    document.addEventListener("click", function(event) {
        if (!subscreen.contains(event.target) && !bagButton.contains(event.target)) {
            subscreen.classList.remove("active");
            body.classList.remove("active-overlay"); // Remove the 'active-overlay' class from body
        }
    });

    // Function to check if there are shopping items
    function checkShoppingItems() {
        if (shoppingItems.children.length === 0) {
            noItemsMsg.style.display = "block"; // Show the message if there are no shopping items
        } else {
            noItemsMsg.style.display = "none"; // Hide the message if there are shopping items
        }
    }

    // Add click event listener to the "Checkout" button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        // Redirect to another HTML page
        window.location.href = 'checkout.html'; // Replace 'checkout.html' with the URL of your checkout page
    });

});