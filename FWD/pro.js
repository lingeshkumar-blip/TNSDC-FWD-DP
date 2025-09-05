
    // Wait for the DOM content to load
    document.addEventListener("DOMContentLoaded", function() {
        // Get the form and form elements
        const form = document.querySelector('form');
        const nameInput = document.querySelector('input[type="text"][placeholder="Your name"]');
        const emailInput = document.querySelector('input[type="email"]');
        const messageInput = document.querySelector('input[type="text"][placeholder="Message"]');
        const button = form.querySelector('button');

        // Create a div to display messages
        const messageDiv = document.createElement('div');
        messageDiv.style.marginTop = '10px';
        messageDiv.style.color = 'red'; // Color for error message
        form.appendChild(messageDiv);

        // Form submission event listener
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Clear any previous messages
            messageDiv.textContent = '';

            // Check if any field is empty
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                messageDiv.textContent = 'Please fill all fields!';
                messageDiv.style.color = 'red'; // Error message color
            } else {
                // Display a success message
                messageDiv.textContent = 'Submitted successfully!';
                messageDiv.style.color = 'white'; // Success message color

                // Optionally clear the form after submission
                form.reset();
            }
        });
    });

