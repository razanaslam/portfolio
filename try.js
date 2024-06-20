document.getElementById('submit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    

    if (name === '' || email === '' || subject.length===10 || message === '') {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        
        return false;
    }

    // Proceed with email sending
    sendEmail(name, email, subject, message);
    
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  re.test(String(email).toLowerCase());
}
      true;