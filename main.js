// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Check if the link targets the grant search form
        if (this.getAttribute('href') === '#find-grants') { 
            // Get the grant search form element
            const grantSearchForm = document.querySelector('#find-grants .grant-search-form'); 

            // Scroll to the grant search form with smooth behavior
            grantSearchForm.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // For other links, scroll to the regular target element
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
