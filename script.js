const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Gracias. Este formulario es una demostración; para recibir mensajes, conecta un servicio de formularios o añade el correo oficial antes de publicar.';
});
