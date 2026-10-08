(function () {
// paletas.js — generador de paletas: crea 5 colores al azar, permite fijarlos y copiar su código
const raiz = document.documentElement;
try { const g = localStorage.getItem('tema'); if (g) raiz.dataset.theme = g; } catch (e) {}

const lista = document.getElementById('paleta');
const estado = document.getElementById('estado');
const botonGenerar = document.getElementById('generar');
const TOTAL = 5;
const colores = new Array(TOTAL).fill('#000000');
const botonesColor = [];
const casillas = [];

/* HSL (grados, %, %) a código hexadecimal */
function hslAHex(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const aHex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return ('#' + aHex(f(0)) + aHex(f(8)) + aHex(f(4))).toUpperCase();
}

/* Luminancia relativa (WCAG) para elegir texto blanco o negro con buen contraste */
function luminancia(hex) {
  const canal = (i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * canal(1) + 0.7152 * canal(3) + 0.0722 * canal(5);
}
function textoSobre(hex) {
  const L = luminancia(hex);
  const contrasteConNegro = (L + 0.05) / 0.05;
  const contrasteConBlanco = 1.05 / (L + 0.05);
  return contrasteConNegro >= contrasteConBlanco ? '#000000' : '#FFFFFF';
}

/* Esquemas: distancias de tono respecto a un tono base */
const ESQUEMAS = [
  [0, 20, 40, -20, -40],      // análogos
  [0, 120, 240, 60, 180],     // triada
  [0, 180, 30, 210, -30],     // complementarios
  [0, 72, 144, 216, 288]      // equilibrados
];
const azar = (min, max) => min + Math.random() * (max - min);

function generar() {
  estado.textContent = '';
  const base = Math.random() * 360;
  const esquema = ESQUEMAS[Math.floor(Math.random() * ESQUEMAS.length)];
  for (let i = 0; i < TOTAL; i++) {
    if (!casillas[i].checked) {
      colores[i] = hslAHex((base + esquema[i] + 360) % 360, azar(45, 80), azar(30, 75));
    }
  }
  pintar();
}

function pintar() {
  colores.forEach((hex, i) => {
    const b = botonesColor[i];
    b.style.backgroundColor = hex;
    b.style.color = textoSobre(hex);
    b.textContent = hex;
    b.setAttribute('aria-label', 'Copiar el color ' + hex);
  });
}

/* Copiar al portapapeles, con alternativa si el navegador no lo permite */
function copiar(hex) {
  const aviso = () => { estado.textContent = 'Copiado ' + hex; };
  const alternativa = () => {
    const t = document.createElement('textarea');
    t.value = hex; t.setAttribute('readonly', '');
    t.style.position = 'absolute'; t.style.left = '-9999px';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); aviso(); }
    catch (e) { estado.textContent = 'No se pudo copiar. El código es ' + hex; }
    document.body.removeChild(t);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(hex).then(aviso).catch(alternativa);
  } else { alternativa(); }
}

/* Construir las 5 tarjetas una sola vez */
for (let i = 0; i < TOTAL; i++) {
  const li = document.createElement('li');
  li.className = 'color';
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'copiar';
  b.addEventListener('click', () => copiar(colores[i]));
  const label = document.createElement('label');
  label.className = 'fijar';
  const c = document.createElement('input');
  c.type = 'checkbox';
  c.setAttribute('aria-label', 'Fijar el color ' + (i + 1));
  label.appendChild(c);
  label.appendChild(document.createTextNode('Fijar'));
  li.appendChild(b); li.appendChild(label); lista.appendChild(li);
  botonesColor.push(b); casillas.push(c);
}

botonGenerar.addEventListener('click', generar);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); generar(); }
});
generar();
})();
