// Fashion page carousel functionality

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dots = Array.from(document.querySelectorAll('.dot'));
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slidesToShow = 3; // Show 3 slides at once
    const maxSlide = totalSlides - slidesToShow;

    // Function to move to a specific slide
    function moveToSlide(targetIndex) {
        // Ensure we don't go past the last set of slides
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex > maxSlide) targetIndex = maxSlide;
        
        // Calculate percentage based on showing 3 slides
        const movePercentage = (targetIndex / slidesToShow) * 100;
        track.style.transform = `translateX(-${movePercentage}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[targetIndex].classList.add('active');
        
        currentSlide = targetIndex;
    }

    // Next button - move by 3 slides
    nextButton.addEventListener('click', () => {
        const nextSlide = Math.min(currentSlide + slidesToShow, maxSlide);
        moveToSlide(nextSlide);
    });

    // Previous button - move by 3 slides
    prevButton.addEventListener('click', () => {
        const prevSlide = Math.max(currentSlide - slidesToShow, 0);
        moveToSlide(prevSlide);
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
});
