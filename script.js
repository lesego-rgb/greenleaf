// GreenLeaf Garden Services - simple JavaScript

// Show or hide the mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Display the current year automatically in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Demonstration contact form.
// This displays a message in the browser but does not send an email.
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value.trim();

    formFeedback.textContent =
        "Thank you, " + customerName + ". Your message has been recorded for this demo.";

    contactForm.reset();
});
