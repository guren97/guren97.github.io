function sendEmail(event) {
    event.preventDefault();

    const from_name = $('#from_name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    const templateParams = {
        from_name: from_name,
        email: email,
        to_name: "Gwen",
        message: message,
    };

    // Show loading spinner and disable button
    $('#loading-spinner').removeClass('hidden');
    $('#send-button').prop('disabled', true).addClass('opacity-50 cursor-not-allowed');
    $('#success-message').addClass('hidden'); // Hide success message initially

    emailjs.send('service_83ogidg', 'template_7433tpl', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            $('#success-message').removeClass('hidden'); // Show success message
            $('#contact-form')[0].reset();

            // Hide loading spinner and enable button
            $('#loading-spinner').addClass('hidden');
            $('#send-button').prop('disabled', false).removeClass('opacity-50 cursor-not-allowed');

             // Set a timeout to hide the success message after 3 seconds
             setTimeout(() => {
                $('#success-message').addClass('hidden');
            }, 3000); // 3000 milliseconds = 3 seconds
        })
        .catch((error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
}
