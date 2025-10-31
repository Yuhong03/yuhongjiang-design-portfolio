document.addEventListener("DOMContentLoaded", function() {

    // get the function element
    const contactForm = document.querySelector(".contact-form");

    // listen from the from submit event
    contactForm.addEventListener("submit", function(event) {
        // prevent the default from the form input
        event.preventDefault();

        // get the values from the form input
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        
        // simple validation
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
        } else {
            // get the existing contacts from local storage (if it exists)
            const contactKey = `contact_${Date.now()}`;

            // create a new contact object
            const newContact = {
                name: name,
                email: email
            };

            // save the updated contacts array to local storage
            localStorage.setItem(contactKey, JSON.stringify(newContact));

            // confirmation prompt
            alert("Thank you for contacting, " + name + "!");

            // reset the form
            contactForm.reset();
        }
    } )
});