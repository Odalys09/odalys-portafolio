(function(){
// app.js — interactividad: tema oscuro, menú móvil y formulario con validación (mailto)
const raiz = document.documentElement;
const $ = (id) => document.getElementById(id);

/* Modo oscuro */
const btnTema = $('tema');
const oscuro = () => raiz.dataset.theme === 'dark' || (raiz.dataset.theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
function pintarTema() {
  const o = oscuro();
  btnTema.textContent = o ? '☀' : '☾';
  btnTema.setAttribute('aria-pressed', String(o));
  btnTema.setAttribute('aria-label', o ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}
try { const g = localStorage.getItem('tema'); if (g) raiz.dataset.theme = g; } catch (e) {}
pintarTema();
btnTema.addEventListener('click', () => {
  raiz.dataset.theme = oscuro() ? 'light' : 'dark';
  try { localStorage.setItem('tema', raiz.dataset.theme); } catch (e) {}
  pintarTema();
});

/* Menú hamburguesa */
const btnMenu = $('boton-menu'), menu = $('menu');
function cerrar() {
  menu.classList.remove('abierto');
  btnMenu.setAttribute('aria-expanded', 'false');
  btnMenu.setAttribute('aria-label', 'Abrir menú');
}
btnMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  btnMenu.setAttribute('aria-expanded', String(abierto));
  btnMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});
menu.addEventListener('click', (e) => { if (e.target.tagName === 'A') cerrar(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('abierto')) { cerrar(); btnMenu.focus(); }
});

/* Formulario: validación y envío por correo (mailto) */
const form = $('form'), estado = $('estado');
const reglas = {
  nombre: (v) => v.trim().length < 2 ? 'Escribe tu nombre (mínimo 2 letras).' : '',
  correo: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Escribe un correo válido, por ejemplo nombre@correo.com.',
  mensaje: (v) => v.trim().length < 10 ? 'Escribe un mensaje de al menos 10 caracteres.' : '',
};
function validar(campo) {
  const el = form.elements[campo], msg = reglas[campo](el.value);
  $('e-' + campo).textContent = msg;
  el.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}
Object.keys(reglas).forEach((c) => form.elements[c].addEventListener('blur', () => validar(c)));
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let primero = null;
  Object.keys(reglas).forEach((c) => { if (!validar(c) && !primero) primero = form.elements[c]; });
  if (primero) { estado.textContent = 'Revisa los campos marcados.'; primero.focus(); return; }
  estado.textContent = 'Listo. Se abrirá tu app de correo para enviar el mensaje.';
  const n = form.elements.nombre.value.trim();
  const asunto = encodeURIComponent('Mensaje desde tu portafolio — ' + n);
  const cuerpo = encodeURIComponent(form.elements.mensaje.value.trim() + '\n\n' + n + ' (' + form.elements.correo.value.trim() + ')');
  location.href = 'mailto:rendon.pelaez.odalys@gmail.com?subject=' + asunto + '&body=' + cuerpo;
  form.reset();
});
})();
