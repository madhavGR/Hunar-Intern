document.addEventListener('DOMContentLoaded', () => {
    const courseForm = document.getElementById('courseForm');
    const courseList = document.getElementById('courseList');
    
    // Load courses from local storage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Function to render courses
    function renderCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const li = document.createElement('li');
            li.innerHTML = `<h2>${course.name}</h2><p>${course.details}</p>`;
            courseList.appendChild(li);
        });
    }

    // Event listener for form submission
    if (courseForm) {
        courseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const courseName = document.getElementById('courseName').value;
            const courseDetails = document.getElementById('courseDetails').value;
            const newCourse = {
                name: courseName,
                details: courseDetails
            };
            courses.push(newCourse);
            localStorage.setItem('courses', JSON.stringify(courses));
            renderCourses();
            courseForm.reset();
        });
    }

    // Render courses on courses.html
    if (courseList) {
        renderCourses();
    }
});