document.addEventListener('DOMContentLoaded', () => {
    const selectedCourse = JSON.parse(localStorage.getItem('selectedCourse'));
    const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || [];

    if (selectedCourse) {
        document.getElementById('course-title').innerText = selectedCourse.name;
        document.getElementById('course-image').src = selectedCourse.img;
        document.getElementById('course-detail').innerText = `Detail: ${selectedCourse.detail}`;
        document.getElementById('course-duration').innerText = `Duration: ${selectedCourse.duration}`;
        document.getElementById('course-timing').innerText = `Batch Timing: ${selectedCourse.batchTiming}`;
        document.getElementById('course-validity').innerText = `Validity: ${selectedCourse.validity}`;
        document.getElementById('course-description').innerText = `Description: ${selectedCourse.description}`;
        document.getElementById('course-price').innerText = `Price: ${selectedCourse.price}`;

        // Check if the course is already purchased
        const isPurchased = purchasedCourses.some(course => course.id === selectedCourse.id);
        const buyButton = document.querySelector('.buy-button');

        if (isPurchased) {
            buyButton.innerText = 'Purchased';
            buyButton.disabled = true;
        } else {
            buyButton.addEventListener('click', () => {
                purchasedCourses.push(selectedCourse);
                localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
                localStorage.setItem('selectedCourseVideos', JSON.stringify(selectedCourse.youtubeLinks));
                alert('Course purchased successfully!');
                buyButton.innerText = 'Purchased';
                buyButton.disabled = true;
                window.location.href = '../video-accessPage/video-access.html';
            });
        }
    } else {
        document.querySelector('.container').innerHTML = '<p>Course not found. Please go back and select a valid course.</p>';
    }
});
