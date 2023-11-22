// Execute when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    var header = document.querySelector('header');

    // Change the background color when the mouse hovers over the header
    header.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue'; // Background color when hovered
    });

    // Restore the original background color when the mouse leaves
    header.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Remove the background color, revert to original CSS style
    });

    // Create an element to display the time
    var timeDisplay = document.createElement('div');
    header.appendChild(timeDisplay);

    // Function to update the time
    function updateTime() {
        var currentTime = new Date();
        timeDisplay.textContent = 'Current Time: ' + currentTime.toLocaleTimeString();
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Update the time immediately on first load
    updateTime();

    // Create an animation effect to display each letter of the title sequentially
    var headerText = document.querySelector('header h1');
    var letters = headerText.textContent.split('');
    headerText.textContent = '';
    letters.forEach(function(letter, index) {
        var span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        headerText.appendChild(span);
        setTimeout(function() {
            span.style.opacity = '1';
        }, 100 * index); // Each letter appears sequentially with a 100ms interval
    });

    // Add a feedback form
    var feedbackForm = document.createElement('form');
    feedbackForm.innerHTML = `
        <h3>Contact Me</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
    `;
    document.body.appendChild(feedbackForm);

    // Display a thank you message when the form is submitted
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        alert('Thank you for your feedback!');
        feedbackForm.reset(); // Reset the form
    });
});
