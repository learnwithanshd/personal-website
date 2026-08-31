const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const contactForm = document.getElementById("contactForm");

        contactForm.reset();

    });

}