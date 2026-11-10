const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});


function changeSlide(button, direction) {
    const slider = button.closest('.project-image');
    const slides = slider.querySelectorAll('.project-slides img');
    const indicators = slider.querySelectorAll('.slide-indicators span');

    let current = [...slides].findIndex(slide =>
        slide.classList.contains('active')
    );

    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');

    let next = (current + direction + slides.length) % slides.length;

    slides[next].classList.add('active');
    indicators[next].classList.add('active');
}

function goToSlide(indicator, index) {
    const slider = indicator.closest('.project-image');
    const slides = slider.querySelectorAll('.project-slides img');
    const indicators = slider.querySelectorAll('.slide-indicators span');

    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}
