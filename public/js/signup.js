const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/'); // Redirect to homepage or dashboard after successful signup
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('#signup-btn')
    .addEventListener('click', signupFormHandler);
