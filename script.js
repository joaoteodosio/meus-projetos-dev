// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto-play
let slideInterval = setInterval(nextSlide, 5000); // 5 segundos

// Botões de navegação
document.getElementById('prevBtn')?.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
document.getElementById('nextBtn')?.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Formulário - mensagem de sucesso
const form = document.querySelector('form');
const sucessoMsg = document.createElement('p');
sucessoMsg.style.color = 'green';
sucessoMsg.style.fontWeight = 'bold';
sucessoMsg.textContent = 'Mensagem enviada com sucesso!';

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Simula envio
  fetch('https://formsubmit.co/ajax/seu-email@email.com', {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      if (response.ok) {
        form.reset();
        form.appendChild(sucessoMsg);
        setTimeout(() => sucessoMsg.remove(), 4000);
      } else {
        alert('Erro ao enviar o formulário.');
      }
    })
    .catch(error => {
      alert('Erro: ' + error.message);
    });
});

// Menu responsivo (opcional)
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav ul');

menuIcon?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
