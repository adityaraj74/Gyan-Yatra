const courses = [
    {
        id: 1,
        img: '../images/java.png',
        name: 'Advanced Java',
        detail: 'This is best course  of Java Programming available in market.',
        price: '₹999',
        duration: '3 months',
        batchTiming: 'Mon-Fri, 6-8 PM',
        validity: '6 months',
        description: 'A Java programming course is designed to teach students the fundamentals of programming using Java. Online Java programming Full Certification Course will provide a comprehensive introduction to Java fundamental principles and help build a solid foundation for further learning.',
        youtubeLinks: [
            'PIvOfcR77Q',
            'CyGodpqcd4'
        ]
    },
    {
        id: 2,
        img: '../images/python.png',
        name: 'Master In Python',
        detail: 'This is best course Of Python available in market.',
        price: '₹399',
        duration: '4 months',
        batchTiming: 'Mon-Fri, 7-9 PM',
        validity: '8 months',
        description: 'Rapidly develop feature-rich applications using Python built-in statements, functions, and collection types. Structure code with classes, modules, and packages that leverage object-oriented features.',
        youtubeLinks: [
            'PIvOfc77SQ',
            'CyGodpcid4'
        ]
    },
    {
        id: 3,
        img: '../images/cpp.png',
        name: 'Champion C++',
        detail: 'This is best course Of C++ Programming available in market.',
        price: '₹199',
        duration: '4 months',
        batchTiming: 'Mon-Fri, 7-9 PM',
        validity: '8 months',
        description: 'Master the fundamentals and advanced concepts of C++ programming, building a strong foundation for software development.',
        youtubeLinks: [
            
            'CyGodpcid4'
        ]
    },
    {
        id: 4,
        img: '../images/dsa.png',
        name: 'Dashing DSA',
        detail: 'This is best course Of Data Structure And Algorithm available in market.',
        price: '₹3599',
        duration: '8 months',
        batchTiming: 'Mon-Fri, 7-9 PM',
        validity: '12 months',
        description: 'Strong Foundation for Programming: DSA is the bedrock of computer science. Understanding how data is organized (data structures) and manipulated (algorithms) empowers you to solve problems efficiently.',
        youtubeLinks: [
            'PIOfcR77SQ',
            'Cyodpqcid4'
        ]
    },
    {
        id: 5,
        img: '../images/mern.png',
        name: 'MERN Stack',
        detail: 'This is best course Of MERN Stack available in market.',
        price: '₹3999',
        duration: '6 months',
        batchTiming: 'Mon-Fri, 7-9 PM',
        validity: '9 months',
        description: 'The MERN stack is a collection of technologies that comprise a full-stack capable of building applications with JavaScript. Because JavaScript is a front-end programming language, developers need additional tools in order to ensure functionality on the back end. MongoDB, Express, React, and Node.',
        youtubeLinks: [
            'PIOfcR7SQ',
            'CyGodpqcd4'
        ]
    },
    {
        id: 6,
        img: '../images/ai.png',
        name: 'Artificial Intelligence',
        detail: 'This is best course Of Artificial Intelligence available in market.',
        price: '₹5999',
        duration: '9 months',
        batchTiming: 'Mon-Fri, 7-9 PM',
        validity: '15 months',
        description: 'The Artificial Intelligence ( AI) course provides the students with in-depth knowledge of both basic and advanced concepts of machine learning, networks, and data science. .',
        youtubeLinks: [
            'PIvOfcR77SQ',
            'CyGodpqcid4'
        ]
    }
];

const courseCardsContainer = document.getElementById('course-cards');

courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.courseId = course.id;

    card.innerHTML = `
        <img src="${course.img}" alt="${course.name}">
        <div class="card-content">
            <div class="card-title">${course.name}</div>
            <div class="card-detail">${course.detail}</div>
            <div class="card-price">${course.price}</div>
        </div>
    `;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotationY = (x - rect.width / 2) / 14; // Adjust sensitivity here
        const rotationX = (y - rect.height / 2) / 14; // Adjust sensitivity here
        card.style.transform = `rotateY(${rotationY}deg) rotateX(${-rotationX}deg) translateZ(40px)`;
    });

    // Reset transform on mouseleave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
    card.addEventListener('click', () => {
        localStorage.setItem('selectedCourse', JSON.stringify(course));
        window.location.href = '../course-detailPage/course-detail.html';
    });

    courseCardsContainer.appendChild(card);
});
