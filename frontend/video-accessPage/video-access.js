document.addEventListener('DOMContentLoaded', () => {
    const videoLinks = JSON.parse(localStorage.getItem('selectedCourseVideos'));

    if (videoLinks && videoLinks.length > 0) {
        const videoContainer = document.getElementById('video-container');
        
        videoLinks.forEach(link => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${link}`;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        });
    } else {
        document.querySelector('.container').innerHTML = '<p>No videos available for this course. Please go back and select a valid course.</p>';
    }
});
