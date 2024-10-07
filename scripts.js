document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        const images = card.querySelectorAll('.gallery-image');
        let currentIndex = 0;

        const prevButton = card.querySelector('.prev-btn');
        const nextButton = card.querySelector('.next-btn');

        prevButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            images[currentIndex].classList.add('active');
        });

        nextButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            images[currentIndex].classList.add('active');
        });
    });

    // Booking Form Logic
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get the form values
        const activity1 = document.getElementById('activity1').value;
        const activity2 = document.getElementById('activity2').value;
        const participants = document.getElementById('participants').value;

        // Log the values to the console
        console.log('First Activity:', activity1);
        console.log('Second Activity:', activity2 ? activity2 : 'No second activity selected');
        console.log('Number of Participants:', participants);
    });

    // Terms Button Logic
    const termsButton = document.getElementById('termsButton');
    const submitBooking = document.getElementById('submitBooking');
    
    termsButton.addEventListener('click', function() {
        alert('You have accepted the Terms and Conditions.');
        submitBooking.disabled = false; // Enable the submit button after accepting terms
    });

    // Cookie Consent Logic
    if (!getCookie("cookiesAccepted")) {
        document.getElementById('cookieConsent').style.display = 'block';
    }

    document.getElementById('acceptCookies').addEventListener('click', function() {
        setCookie("cookiesAccepted", "true", 365);
        document.getElementById('cookieConsent').style.display = 'none';
    });

    // Helper functions for cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has already accepted cookies
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }

    // Event listener for the "Accept" button
    document.getElementById('acceptCookies').addEventListener('click', function() {
        setCookie('cookiesAccepted', 'true', 365); // Store cookie acceptance for 365 days
        document.getElementById('cookieConsent').style.display = 'none'; // Hide the consent bar
    });

    // Helper functions to manage cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});


