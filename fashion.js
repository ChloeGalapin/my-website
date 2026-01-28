// Fashion page carousel functionality

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dots = Array.from(document.querySelectorAll('.dot'));
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to move to a specific slide
    function moveToSlide(targetIndex) {
        // Update the track position
        track.style.transform = `translateX(-${targetIndex * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[targetIndex].classList.add('active');
        
        currentSlide = targetIndex;
    }

    // Next button
    nextButton.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        moveToSlide(nextSlide);
    });

    // Previous button
    prevButton.addEventListener('click', () => {
        const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        moveToSlide(prevSlide);
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });

    // Optional: Auto-play carousel (uncomment if you want it)
    // setInterval(() => {
    //     const nextSlide = (currentSlide + 1) % totalSlides;
    //     moveToSlide(nextSlide);
    // }, 5000); // Changes slide every 5 seconds
});
