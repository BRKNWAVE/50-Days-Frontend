// Panel active interactions
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
};

//Stars for BG
// Function to generate a random number within a range
 function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create and append stars to the body
function createStars() {
    const body = document.body;
    const numStars = 100; // Adjust the number of stars as needed

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        star.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
        star.style.top = `${getRandomNumber(0, window.innerHeight)}px`;
        star.style.animation = `twinkle ${getRandomNumber(2, 5)}s linear infinite`;

        body.appendChild(star);
    }
}

createStars();

// Bokeh Animation

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create and append bokeh-style circles to the body
function createBokehCircles() {
    const body = document.body;
    const numCircles = 20; // Adjust the number of circles as needed

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        const size = getRandomNumber(20, 100);
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = getRandomColor();
        circle.style.position = 'absolute';
        circle.style.opacity = '0.5'; // Semi-transparent

        circle.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
        circle.style.top = `${getRandomNumber(0, window.innerHeight)}px`;

        // Apply a floating animation
        circle.style.animation = `float ${getRandomNumber(5, 15)}s linear infinite`;

        body.appendChild(circle);
    }
}

createBokehCircles();