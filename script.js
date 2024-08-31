document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelector('.slider-images');
    const imageWrappers = Array.from(sliderImages.querySelectorAll('.slider-image-wrapper'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    let slideInterval;

    function updateSlider() {
        const imageWidth = imageWrappers[0].offsetWidth; 
        sliderImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            if (currentIndex < imageWrappers.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; 
            }
            updateSlider();
        }, 6000); 
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imageWrappers.length - 1; 
        }
        updateSlider();
        stopAutoSlide(); 
        startAutoSlide(); 
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < imageWrappers.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateSlider();
        stopAutoSlide(); 
        startAutoSlide(); 
    });

    
    updateSlider();
    startAutoSlide(); 
});
