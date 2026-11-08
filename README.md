# El laboratorio del historiador

Laboratorio 3D y recurso de estudio del **Tema 4. El tratamiento y análisis de las fuentes históricas**, de la asignatura Didáctica de las Ciencias Sociales II (Historia), Grado en Educación Primaria, Facultad de Ciencias de la Educación, ULPGC.

Forma parte de la serie de aplicativos por temas de la asignatura, con el mismo patrón que «Cronos y Kairós» (tema 3): índice, escena 3D y ficha; retos; modo docente; modo presentación; guía de estudio; tarjetas de repaso; examen aleatorio y mesa de diseño de actividades.

## Estaciones

| N.º | Estación | Contenido | Objeto 3D |
|---|---|---|---|
| 1 | La lupa y la huella | Qué es una fuente; huella, evidencia e interpretación; deducción e inferencia | Bandeja de arena con huellas y lupa |
| 2 | Las tres bandejas | Fuentes primarias, secundarias y terciarias en relación con la pregunta | Tres bandejas rotuladas |
| 3 | La vitrina de barro | Fuentes materiales: objetos, edificios, obras de ingeniería y restos arqueológicos | Vitrina con vasija genérica y fragmentos |
| 4 | El atril y el magnetófono | Fuentes escritas y orales; historia oral y memoria colectiva | Atril con códice y magnetófono |
| 5 | El caballete y el mapamundi | Fuentes iconográficas, artísticas y cartográficas; Mercator | Caballete, globo y tablero de proporciones |
| 6 | La balanza de pruebas | Atribución, contextualización, corroboración, fiabilidad situada, lectura lateral, IA | Balanza de dos platillos |
| 7 | La caja del tiempo | Progresión por ciclos, currículo de Canarias, evaluación y rúbrica | Arcón y línea de cuerda con tarjetas |

## Uso

- Abrir `index.html` desde un servidor web (GitHub Pages sirve). Three.js 0.160.0 se carga desde jsDelivr.
- Anclas: `#e1` a `#e7`, `#estudio`, `#tarjetas`, `#diseno`, `#examen`, `#glosario`, `#bibliografia`, `#guia`.
- `#docente` activa el modo docente (notas de sesión, preguntas de debate y botones de solución) mientras la pestaña siga abierta.
- El progreso, los apuntes y las respuestas se guardan solo en el navegador de cada persona.

## Estructura

```
index.html
css/estilos.css
js/app.js        interfaz y vistas
js/escena.js     escena 3D procedimental
js/retos.js      motor de retos (clasificar, ordenar, test, numérico)
datos/           contenido: estaciones, examen y glosario, capa de estudio, referencias
```

Para corregir contenido basta con editar los archivos de `datos/`.

## Fuentes y verificación

- Fuentes base: presentación del tema 4 de la asignatura; Cooper (2002), capítulos III y VI; Arias Ferrer y Egea (2022), pp. 121-173; Comes (2006).
- Arias Ferrer y Egea Vivancos (2022): consultado con reconocimiento óptico de caracteres en las pp. 121-173 (alfabetización histórica, retos de la historia en Primaria y «botiquín de recursos») e integrado en las siete estaciones.
- El «Estudio didáctico del empleo de las fuentes en Educación Primaria» se usó como guía de temas. Cada estudio que cita se cotejó el 8-11-2026; solo se incluyen los verificados y se corrigieron atribuciones (por ejemplo, Hämäläinen et al., 2020).
- Currículo de Canarias (Decreto 211/2022, Anexo 2) cotejado literalmente.
- La comparación con los currículos de Inglaterra y Finlandia procede del estudio de la asignatura y no se ha cotejado con los textos oficiales.

## Créditos y licencias

- Contenido: CC BY-NC 4.0.
- Three.js 0.160.0 (licencia MIT). Tipografías Cinzel, Atkinson Hyperlegible y JetBrains Mono (SIL Open Font License).
- Todos los objetos 3D y texturas son procedimentales y no reproducen piezas, obras ni imágenes concretas. Las imágenes de terceros de la presentación no se incluyen.

## Declaración de uso de IA

Recurso elaborado con asistencia de un modelo de inteligencia artificial (Claude, Anthropic) en la redacción y la programación, bajo la dirección y revisión de la docente responsable. Requiere revisión docente antes de su uso con alumnado.

## Versiones

- 1.2 (8-11-2026): integración de Arias Ferrer y Egea (2022) en las siete estaciones, la capa de estudio, el glosario y el examen (39 preguntas).
- 1.1 (8-11-2026): auditoría. Opciones barajadas y distractores reescritos (la respuesta correcta ya no es previsible por posición ni por longitud); `lang="es"`, cabecera de tabla y nombres accesibles corregidos; DOI y datos bibliográficos completados; cita de Cooper ajustada a la p. 117; anglicismos sustituidos.
- 1.0 (8-11-2026): primera versión.
