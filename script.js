// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо! Менеджер свяжется с вами в течение 10 минут.\n\n(В реальном сайте данные отправлялись бы на сервер или в Telegram.)');
  this.reset();
});