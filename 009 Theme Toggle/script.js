const sunMoonContainer = document.querySelector('.sun-moon-container');
const themeToggleButton = document.querySelector('.theme-toggle-button');
const buttonText = themeToggleButton.querySelector('span'); // Select text separately

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Get current rotation and update sun-moon animation
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);

    // Toggle button text based on current theme
    if (document.body.classList.contains('dark')) {
        buttonText.innerText = 'Light Theme';
    } else {
        buttonText.innerText = 'Dark Theme';
    }
});
