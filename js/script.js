document.addEventListener("DOMContentLoaded", () => {
    
    // --- Typewriter Effect ---
    const textArray = ["Robotics Enthusiast.", "Mechanical Designer.", "AI Researcher."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const delayBetweenWords = 2000;
    const typewriterElement = document.getElementById("typewriter");

    function type() {
        const currentWord = textArray[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? eraseSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }
    
    // Start typewriter effect
    setTimeout(type, 1000);


    // --- Scroll Reveal Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '🌓';
        }
    });

    // --- Back to Top ---
    const backToTopBtn = document.getElementById('back-to-top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Hide Navbar on Scroll Down ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Downscroll - hide
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Upscroll - show
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});
