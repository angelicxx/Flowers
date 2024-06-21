document.addEventListener('DOMContentLoaded', () => {
    // Анимация при наведении на изображения цветов
    const items = document.querySelectorAll('.promo-item, .flower-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    // Анимация при фокусе на поле ввода на странице контактов
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    nameInput.addEventListener('focus', () => {
        nameInput.style.borderColor = '#28a745';
    });

    nameInput.addEventListener('blur', () => {
        nameInput.style.borderColor = '#ccc';
    });

    messageInput.addEventListener('focus', () => {
        messageInput.style.borderColor = '#28a745';
    });

    messageInput.addEventListener('blur', () => {
        messageInput.style.borderColor = '#ccc';
    });

    // Обработчик нажатия клавиш
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            alert('Escape key pressed!');
        }
    });

    // Автоматическое переключение слайдов для сотрудников
    let currentSlide = 0;
    const slides = document.querySelectorAll('.employee-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Автоматическое переключение слайдов каждые 5 секунд
});
