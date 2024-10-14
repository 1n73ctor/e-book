
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cryptoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value
        };

        console.log({ formData })

        // Send email via EmailJS
        emailjs.send("service_30pk9yj", "template_8ozm8vw", formData)
            .then(function (response) {
                alert("Your ebook has been sent to your email!");
                console.log("Email sent successfully", response.status, response.text);
                document.getElementById("cryptoForm").reset();

            }, function (error) {
                console.error("Failed to send email:", error);
                alert("There was an error sending your ebook. Please try again.");
            });

    });
});

// document.addEventListener("DOMContentLoaded", () => {

// const butn = document.getElementById('button');

// document.getElementById('cryptoForm')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

// //    butn.value = 'Sending...';

//    const serviceID = 'service_tdk1l4p';
//    const templateID = 'template_3s1hjo6';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//         butn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//         butn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
// })


// Modal JavaScript
var modal = document.getElementById("ebookModal");
var btn = document.querySelector("#cta-button");
var btn1 = document.querySelector("#cta-button1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function (e) {
    console.log('wroking');

    e.preventDefault(); // Prevent the default anchor behavior
    modal.style.display = "block"; // Show the modal
}
btn1.onclick = function (e) {
    console.log('wroking');

    e.preventDefault(); // Prevent the default anchor behavior
    modal.style.display = "block"; // Show the modal
}

span.onclick = function () {
    modal.style.display = "none"; // Hide the modal when close button is clicked
}

window.onclick = function (event) {
    if (event.target == modal) { // Close modal if clicked outside of it
        modal.style.display = "none";
    }
}

// Close modal on Esc key press
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") { // Close modal with Escape key
        modal.style.display = "none";
    }
});

// Handle form submission
document.querySelector('.modal-button').addEventListener('click', function () {
    var email = document.querySelector('.modal-input').value;
    if (email) {
        // Here you would typically send the email to your server or email service
        console.log("Email submitted:", email);
        // For demo purposes, we'll just close the modal
        modal.style.display = "none";
        alert("Thank you! The ebook has been sent to " + email);
    } else {
        alert("Please enter a valid email address.");
    }
});