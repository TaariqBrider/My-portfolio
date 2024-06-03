// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is fully loaded and parsed');

    
    const handleHeadingClick = (event) => {
        alert(`You clicked on: ${event.target.textContent}`);
    };

    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach((heading) => {
        heading.addEventListener('click', handleHeadingClick);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const skillBars = document.querySelectorAll('.skill-inner');
    
    skillBars.forEach(skillBar => {
        const width = skillBar.style.width;
        skillBar.style.width = '0'; // Set initial width to 0 for animation effect
        
        // Animate the width
        setTimeout(() => {
            skillBar.style.width = width;
            skillBar.style.transition = 'width 5s ease-in-out'; // Adjust duration and easing as needed
        }, 100); // Slight delay to trigger the animation
    });
});

