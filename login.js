document.addEventListener('DOMContentLoaded', function(event) {

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = loginForm.querySelector('[name="username"]').value;
            const password = loginForm.querySelector('[name="password"]').value;
            const email = loginForm.querySelector('[name="email"]').value;
            const response = await fetch(
                "http://localhost:8080/api/auth/login", {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email
                })
            });
            const json = await response.json();
            console.log('json=', json);
        })
    }



});
