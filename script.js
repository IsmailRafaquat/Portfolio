let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Toggle navbar visibility when menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Highlight active section in navbar when scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            });
        }
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get user input values
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "923145797747"; // Replace with your WhatsApp number (without '+')

    let whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission!* \n\n` +
        `*Name:* ${name} \n` +
        `*Email:* ${email} \n` +
        `*Phone:* ${phone} \n` +
        `*Subject:* ${subject} \n` +
        `*Message:* ${message}`
    );

    // Detect if user is on a mobile device
    let isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

    // Use "whatsapp://" for mobile and "https://api.whatsapp.com" for desktop
    let whatsappURL = isMobile
        ? `whatsapp://send?phone=${whatsappNumber}&text=${whatsappMessage}`
        : `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
});



