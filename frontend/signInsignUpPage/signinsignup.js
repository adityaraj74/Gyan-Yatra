const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Assuming you have an event listener for the sign-up form submission
document.querySelector('.sign-up form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    if (name && email && password) {
        // Register the user (this is just a placeholder, replace with actual logic)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('userName', name);
        window.location.href = '../homePage/home-page.html';
    } else {
        alert('All fields are required for registration.');
    }
});

document.querySelector('.sign-in form').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    // Verify the user's credentials (this is just a placeholder, replace with actual logic)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('userName', user.name);
        window.location.href = '../homePage/home-page.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
