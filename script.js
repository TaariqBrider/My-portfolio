document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is fully loaded and parsed');

    const handleHeadingClick = (event) => {
        alert(`You clicked on: ${event.target.textContent}`);
    };

    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach((heading) => {
        heading.addEventListener('click', handleHeadingClick);
    });

    const skillBars = document.querySelectorAll('.skill-inner');
    
    skillBars.forEach(skillBar => {
        const targetWidth = parseInt(skillBar.style.width);
        
        const animateBar = () => {
            skillBar.style.width = '0'; // Reset width to 0 for animation effect
            let currentWidth = 0;
            const interval = setInterval(() => {
                if (currentWidth >= targetWidth) {
                    clearInterval(interval); // Stop the interval when the target width is reached
                    setTimeout(animateBar, 1000); // Wait for 1 second before repeating the animation
                } else {
                    currentWidth++;
                    skillBar.style.width = currentWidth + '%';
                }
            }, 50); // Adjust the interval timing as needed for smoother animation
        };

        animateBar(); // Start the animation
    });
});