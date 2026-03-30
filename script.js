document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const introVideo = document.getElementById('intro-video');
    const navbar = document.getElementById('navbar');

    // Handle Video Ending
    introVideo.addEventListener('ended', () => {
        // Fade out splash screen
        splashScreen.style.opacity = '0';
        
        // Show main content immediately so it's there when splash fades
        mainContent.classList.remove('hidden');

        // Remove splash screen from DOM after fade transition completes (1s)
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000);
    });

    // Optional: Allow users to click the video to skip the intro
    splashScreen.addEventListener('click', () => {
        introVideo.pause();
        splashScreen.style.opacity = '0';
        mainContent.classList.remove('hidden');
        setTimeout(() => { splashScreen.style.display = 'none'; }, 1000);
    });

    // Navbar Scroll Effect (Transparent to Solid Black)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#141414';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});