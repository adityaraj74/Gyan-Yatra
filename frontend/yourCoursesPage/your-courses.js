document.addEventListener('DOMContentLoaded', () => {
    const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || [];

    if (purchasedCourses.length > 0) {
        const coursesContainer = document.getElementById('courses-container');

        purchasedCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course-card');
            courseElement.innerHTML = `
                <img src="${course.img}" alt="${course.name}" class="course-image">
                <h3 class="course-title">${course.name}</h3>
                <button class="access-button" data-course-id="${course.id}">Access Course</button>
            `;
            coursesContainer.appendChild(courseElement);
        });

        document.querySelectorAll('.access-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const courseId = event.target.getAttribute('data-course-id');
                const selectedCourse = purchasedCourses.find(course => course.id === parseInt(courseId, 10));
                localStorage.setItem('selectedCourseVideos', JSON.stringify(selectedCourse.youtubeLinks));
                window.location.href = '../video-accessPage/video-access.html';
            });
        });
    } else {
        document.querySelector('.container').innerHTML = '<p>No purchased courses available. Please go back and buy a course.</p>';
    }
});
