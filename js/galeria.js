(function () {
// galeria.js — vista ampliada de la galería con <dialog>: abrir, navegar y cerrar
const raiz = document.documentElement;
try { const g = localStorage.getItem('tema'); if (g) raiz.dataset.theme = g; } catch (e) {}

const botones = Array.from(document.querySelectorAll('.miniatura'));
const visor = document.getElementById('visor');
const imagen = document.getElementById('visor-img');
const pie = document.getElementById('visor-pie');
let actual = 0;

function mostrar(i) {
  actual = (i + botones.length) % botones.length;
  const b = botones[actual];
  imagen.src = b.dataset.grande;
  imagen.alt = b.dataset.alt;
  imagen.width = Number(b.dataset.ancho);
  imagen.height = Number(b.dataset.alto);
  pie.textContent = b.dataset.titulo + ' (' + (actual + 1) + ' de ' + botones.length + ')';
}

botones.forEach((b, i) => b.addEventListener('click', () => { mostrar(i); visor.showModal(); }));
document.getElementById('anterior').addEventListener('click', () => mostrar(actual - 1));
document.getElementById('siguiente').addEventListener('click', () => mostrar(actual + 1));
document.getElementById('cerrar').addEventListener('click', () => visor.close());
visor.addEventListener('click', (e) => { if (e.target === visor) visor.close(); });
visor.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') mostrar(actual - 1);
  if (e.key === 'ArrowRight') mostrar(actual + 1);
});
visor.addEventListener('close', () => botones[actual].focus());
})();
