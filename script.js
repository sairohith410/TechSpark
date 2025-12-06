document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.textContent = '✕';
            } else {
                menuIcon.textContent = '☰';
            }
        });
    }

    // --- 3. SCROLL ANIMATION OBSERVER (FIXED REPLAY) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Card enters screen: Animate In
                entry.target.classList.add('show');
            } else {
                // Card leaves screen: Reset (Allows animation to play again)
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% visible
    });

    const hiddenElements = document.querySelectorAll('.card');
    hiddenElements.forEach((el) => observer.observe(el));
});

// --- 4. MODAL LOGIC (For Events Page) ---
function openForm(url) {
    const modal = document.getElementById('formModal');
    const iframe = document.getElementById('googleForm');
    
    if(modal && iframe) {
        iframe.src = url;
        modal.style.display = 'block';
        // Disable page scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeForm() {
    const modal = document.getElementById('formModal');
    const iframe = document.getElementById('googleForm');
    
    if(modal && iframe) {
        modal.style.display = 'none';
        iframe.src = ''; // Stop video/reset form
        // Re-enable page scrolling
        document.body.style.overflow = 'auto';
    }
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target == modal) {
        closeForm();
    }
}
