// External Javascript for Hotel Booking System

// Rental Page Calculator
function calcTotal() {
    const days = document.getElementById('days').value;
    const price = document.getElementById('price').value;
    const totalDisplay = document.getElementById('total');

    if (days > 0 && price > 0) {
        const total = days * price;
        totalDisplay.innerHTML = "Total Price: RM " + total;
        totalDisplay.style.color = "#198754";
    } else {
        totalDisplay.innerHTML = "Please enter valid numbers.";
        totalDisplay.style.color = "red";
    }
}

// Event Listeners initialization on DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Rental Page Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.onsubmit = function (e) {
            e.preventDefault();
            alert("Booking request sent successfully!");
        }
    }

    // Contact Page Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.onsubmit = function (e) {
            e.preventDefault();
            const name = document.getElementById('fname').value;
            alert("Thank you, " + name + "! Your feedback has been received.");
            this.reset();
        }
    }
});
