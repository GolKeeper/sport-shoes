const swiper = new Swiper('.Reviews-slider', {
    loop: true,
    slidesPerView: 1,     // По умолчанию показываем один слайд (для мобильных)
    spaceBetween: 30,
    simulateTouch: true,  // Включаем перетаскивание мышкой на десктопе
    touchRatio: 1,        // Чувствительность перетаскивания (1 — стандартная)
    grabCursor: true,     // Меняет курсор на "руку" при наведении на слайдер
    autoplay: {           // Настраиваем автопереключение
        delay: 5000,       // Переключение каждые 5 секунд
        disableOnInteraction: false,  // Продолжать автоплей даже при взаимодействии пользователя
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 999px
        999: {
            slidesPerView: 3, // На десктопе показываем три слайда
            spaceBetween: 30, // Можно изменить расстояние между слайдами, если нужно
        }
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
});


// Получаем модальное окно
const modal = document.getElementById("promoModal");

// Получаем кнопку, которая открывает модальное окно
const btn = document.querySelector(".Button__main");

// Получаем элемент <span>, который закрывает модальное окно
const span = document.getElementsByClassName("promo-modal__close")[0];

// Получаем форму и сообщение об успешной отправке
const form = document.getElementById("promoForm");
const successMessage = document.getElementById("successMessage");

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Здесь можно добавить код для отправки данных на сервер

    // Скрываем форму и показываем сообщение об успешной отправке
    form.style.display = "none";
    successMessage.style.display = "block";

    // Опционально: закрыть модальное окно через несколько секунд
    setTimeout(function() {
        modal.style.display = "none";
        form.style.display = "block"; // Показываем форму снова
        successMessage.style.display = "none"; // Скрываем сообщение
    }, 4000); // Закрыть через 3 секунды
}










