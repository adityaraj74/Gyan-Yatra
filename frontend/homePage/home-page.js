document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const registerLink = document.getElementById('register-link');
    const registerDiv = document.getElementById('register');
    const yourCoursesLink = document.getElementById('your-courses-link');

    // Check if the user is signed in
    const isSignedIn = localStorage.getItem('isSignedIn');
    const userName = localStorage.getItem('userName');

    if (isSignedIn === 'true') {
        signupBtn.textContent = 'Sign Out';
        signupBtn.href = '#';
        registerDiv.innerHTML = `<a href="#" id="user-name">${userName}</a>`;
        yourCoursesLink.classList.remove('hidden');
    }

    signupBtn.addEventListener('click', (e) => {
        if (isSignedIn === 'true') {
            e.preventDefault();
            localStorage.removeItem('isSignedIn');
            localStorage.removeItem('userName');
            localStorage.removeItem('purchasedCourses');
            signupBtn.textContent = 'Sign Up Now';
            signupBtn.href = '../signInsignUpPage/signinsignup.html';
            registerDiv.innerHTML = '<a href="../signInsignUpPage/signinsignup.html" id="register-link">REGISTER</a>';
            yourCoursesLink.classList.add('hidden');
            alert('You have been signed out.');
        }
    });
});
