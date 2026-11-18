
// contact form
const contactForm = document.querySelector('#contactForm');

// message area
const formMessage = document.querySelector('#formMessage');

// if/else form
if (contactForm) {

    // 
    contactForm.addEventListener('submit', function(event) {

        //
        event.preventDefault();

        //
        if (contactForm.checkValidity()) {

            //
            formMessage.textContent =
                'Thank you! Your message has been received.';

            //
            contactForm.reset();

        } else {

            //
            formMessage.textContent =
                'Please complete all fields correctly.';

        }

    });



}
