// Fashion page carousel functionality

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dots = Array.from(document.querySelectorAll('.dot'));
    
    let currentIndex = 0;
    const totalSlides = slides.length; // 12 slides
    const slidesToShow = 3; // Show 3 at a time
    const slideWidth = slides[0].offsetWidth;
    const gap = 20; // Gap between slides

    // Function to move to a specific index
    function moveToSlide(index) {
        // Calculate how far to move (each slide width + gap)
        const moveAmount = index * (slideWidth + gap);
        track.style.transform = `translateX(-${moveAmount}px)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentIndex = index;
    }

    // Next button - move forward by 3 slides
    nextButton.addEventListener('click', () => {
        const nextIndex = currentIndex + slidesToShow;
        // If we'd go past the end, wrap to beginning
        if (nextIndex >= totalSlides) {
            moveToSlide(0);
        } else {
            moveToSlide(nextIndex);
        }
    });

    // Previous button - move backward by 3 slides
    prevButton.addEventListener('click', () => {
        const prevIndex = currentIndex - slidesToShow;
        // If we'd go before the start, wrap to end
        if (prevIndex < 0) {
            const lastGroup = totalSlides - slidesToShow;
            moveToSlide(lastGroup);
        } else {
            moveToSlide(prevIndex);
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
});
