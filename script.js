// Back to Top Button
window.addEventListener("scroll", function() {
    let button = document.getElementById("back-to-top");

    if (window.scrollY > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});


// Contact Form Submission
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    formStatus.textContent = "Sending message...";

    const formData = new FormData(contactForm);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            formStatus.textContent = "Message sent successfully!";
            contactForm.reset();
        } else {
            formStatus.textContent = "Something went wrong. Please try again.";
        }

    } catch (error) {
        formStatus.textContent = "Unable to send message. Please try again.";
    }
});