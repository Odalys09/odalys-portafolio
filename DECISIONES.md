# DECISIONES — Portafolio de Odalys Rendón Peláez

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
- **Contraste (mínimo exigido: 4.5:1):** calculado con la fórmula de contraste de WCAG, la misma que usa WebAIM Contrast Checker.
  - Modo claro: texto sobre fondo 16.14:1, texto suave sobre fondo 7.25:1, enlace magenta sobre fondo 6.12:1, botón principal (blanco sobre magenta) 6.66:1, azul de acento sobre fondo 6.09:1.
  - Modo oscuro: texto sobre fondo 16.15:1, texto suave sobre fondo 8.96:1, enlace rosa sobre fondo 8.75:1, botón principal (texto oscuro sobre rosa) 8.59:1, azul de acento sobre fondo 8.77:1.
  - Todos pasan el mínimo de 4.5:1.
  - Verificado también en WebAIM: [x ] sí (marca esta casilla cuando lo hagas)

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

## 7. Foto en el inicio
Reemplacé el dibujo abstracto del inicio por mi foto, porque la práctica pide una foto en la sección principal y así quien visita el sitio sabe quién soy. Conservé el marco y la placa de museo para mantener la idea de galería de arte. Ajusté el recorte de la imagen para que mi cara quede completa dentro del marco.

## 8. Proyectos
Elegí mostrar cuatro proyectos, cada uno con imagen, descripción, tecnologías y enlace:
- **Galería digital:** una página con mis dibujos en una cuadrícula y una vista ampliada hecha con la etiqueta `<dialog>`, que se maneja con teclado (flechas y Esc). Cada dibujo tiene una versión pequeña para la cuadrícula y otra más grande para ampliar, así la página carga rápido.
- **Serie de ilustraciones:** cuatro dibujos a mano que comparten una paleta de rosas, violetas y azules con toques de amarillo.
- **Generador de paletas:** crea cinco colores al azar a partir de un tono base, deja fijar los que me gustan y copia el código de cada color. Elige texto blanco o negro según cuál contraste mejor con el color de fondo. Lo desarrollé con ayuda de una IA y revisé cómo funciona cada parte.
- **Portafolio web:** este mismo sitio, publicado en GitHub Pages.

## 9. Accesibilidad y auditoría
- Lighthouse (anota tus resultados finales, deben ser 95 o más):
  - Performance: _98___
  - Accessibility: _100___
  - Best Practices: _100___
  - SEO: _100___
- [x ] HTML validado en el validador de W3C
- [x ] Navegación completa con teclado (Tab, Enter y Esc)
- [x ] Probado con lector de pantalla (Narrador de Windows)
- [x ] Sin errores en la consola de DevTools
- [x ] Probado en celular
- Todas las imágenes tienen texto alternativo descriptivo, hay enlace para saltar al contenido y el foco se ve en todos los elementos interactivos.

## 10. Feedback recibido
- Persona 1 (técnica): _Me comentó que la página tiene una buena estructura y que la navegación es fácil de entender, pero me recomendó revisar la accesibilidad, principalmente el contraste de los colores y la navegación con teclado.___
- Persona 2 (no técnica): _Me comentó que la página se ve muy bonita y que las imágenes ayudan a conocer mejor mi trabajo (mi arte)___
- Qué cambié a partir de sus comentarios (mínimo 2 mejoras): ____

## 11. Uso de la IA
- Qué me ayudó a mejorar la IA: _Me ayudó a identificar errores en el código, mejorar algunos estilos CSS y optimizar las imágenes.___
- Qué sabía yo que la IA no detectó: _Yo conocía los requisitos específicos de la actividad y decidí qué cambios sí correspondían a mi diseño.___
