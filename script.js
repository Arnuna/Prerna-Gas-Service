// script.js

// Functionality for call button
function callButtonFunctionality() {
    document.getElementById('callButton').onclick = function() {
        window.location.href = 'tel:+1234567890'; // Replace with actual phone number
    };
}

// Functionality for WhatsApp integration
function whatsappIntegration() {
    document.getElementById('whatsappButton').onclick = function() {
        const message = encodeURIComponent('Hello, I would like to inquire about your services.');
        window.open(`https://wa.me/1234567890?text=${message}`); // Replace with actual phone number
    };
}

// Functionality for Pi SDK payment handling
function piSdkPayment() {
    const paymentButton = document.getElementById('paymentButton');
    paymentButton.onclick = function() {
        // Sample payment initiation code
        const piSdk = new PiSDK({
            key: 'your_api_key_here', // Add your API key
            amount: 1000,
            currency: 'USD',
        });
        piSdk.open();
    };
}

// Initialize all functions on document ready
document.addEventListener('DOMContentLoaded', function() {
    callButtonFunctionality();
    whatsappIntegration();
    piSdkPayment();
});
