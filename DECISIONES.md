# DECISIONES — Portafolio de Odalys Rendon

Aquí explico POR QUÉ tomé cada decisión, para entenderla si vuelvo a este código en seis meses.

## 1. Estructura de secciones
Inicio, Sobre mí, Galería, Habilidades, Formación y Contacto. Es el orden del capítulo 1.12. La sección de proyectos se llama "Galería" porque mi tema es el arte, pero conserva el id `#proyectos`.

## 2. Identidad visual
- **Idea central:** una galería de arte. La sección de inicio muestra un cuadro enmarcado con formas abstractas y una placa de museo con mi nombre, como las que hay junto a las obras. Las tarjetas de la galería usan una franja de color arriba, como una etiqueta de obra.
- **Paleta:**
  - Magenta `#b3125a` (claro) / `#ff8dbd` (oscuro): color principal, tomado de los colores intensos de la pintura.
  - Azul cobalto `#1f4fd8` (claro) / `#8fb0ff` (oscuro): acento que contrasta con el magenta.
  - Amarillo `#f2b705`: tercer color primario, solo en detalles.
  - Fondo `#f7f4fb` / `#14101b`, superficie `#ffffff` / `#201929` y texto `#1d1626` / `#f1ecf7`.
- **Contraste:** pendiente de verificar en WebAIM Contrast Checker (mínimo 4.5:1). Anotar resultados:
  - [ ] Texto sobre fondo (claro): ____
  - [ ] Texto sobre fondo (oscuro): ____
  - [ ] Botón principal: ____

## 3. Tipografía
- **Syne** para títulos: es expresiva y tiene carácter de cartel artístico.
- **Karla** para el texto: es sencilla y se lee bien en pantallas pequeñas.
- Ambas tienen alternativas del sistema por si Google Fonts no carga.

## 4. Layout
- Mobile-first: se diseña primero para celular y se amplía a partir de 48rem.
- Galería y habilidades en 3 columnas en escritorio, 1 en celular.
- Etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`) en lugar de `div` genéricos. El cuadro de inicio es una `figure` con su `figcaption`.

## 5. Interactividad (4 funciones mínimas)
1. Menú hamburguesa en móvil (con `aria-expanded` y cierre con Esc).
2. Formulario de contacto con validación y mensajes de error claros.
3. Smooth scroll al hacer clic en los enlaces del menú.
4. Modo oscuro con un botón que cambia las custom properties y recuerda la preferencia.

## 6. Envío del formulario
Es un sitio estático: al enviar, el formulario abre la app de correo con el mensaje listo (`mailto`). Así se puede publicar gratis en Netlify o GitHub Pages.

## 7. Feedback recibido
- Persona 1: ____
- Persona 2: ____
- Qué cambié a partir de sus comentarios: ____
