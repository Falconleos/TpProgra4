# SmartLibrary 1.0

Aplicación web desarrollada para la gestión eficiente de un catálogo de libros, implementada con JavaScript moderno (ES6+), módulos, programación orientada a objetos (POO), HTML5 y CSS3.

## Autor
**Leonel Federico Soto**

## Características Principales
* **Programación Orientada a Objetos (POO):** Utilización de la clase `Book` con campos privados y métodos de encapsulamiento:
  * **Atributos privados:** `#id`, `#title`, `#author`, `#genre`, `#year`, `#isFavorite`, `#isBorrowed`.
  * **Métodos Getters:** `getId()`, `getTitle()`, `getAuthor()`, `getGenre()`, `getYear()`, `getIsFavorite()`, `getIsBorrowed()`.
  * **Métodos Setters:** `setTitle()`, `setAuthor()`, `setGenre()`, `setYear()`, `setIsFavorite()`, `setIsBorrowed()`.
* **Gestión de Libros (CRUD):** 
  * Alta de nuevos libros a través de un formulario con validación personalizada en JavaScript.
  * Modificación de registros existentes mediante una ventana modal interactiva.
  * Eliminación de elementos de la lista con diálogo de confirmación.
* **Estados Interactivos:** Control dinámico de casillas para marcar y desmarcar libros como *Favoritos* o *Prestados*.
* **Sistema de filtrado:** Búsqueda en tiempo real adaptable por título, autor, género, año, favoritos y libros prestados usando métodos de arreglos (filter, findIndex, forEach, push, splice).
* **Panel de Control (Dashboard):** Métricas actualizadas en tiempo real que reflejan el total de libros almacenados y el total de elementos mostrados tras aplicar filtros.
## Funcionalidad Extra / Valor Agregado
* **Modal de Edición Interactiva:** Como mejora adicional más allá de los requerimientos mínimos, se implementó una ventana flotante (modal) dinámica para la edición en tiempo real de los datos de cada libro (`title`, `author`, `genre`, `year`). Esto permite modificar la información de manera fluida y limpia, actualizando automáticamente la tarjeta correspondiente en la interfaz sin necesidad de recargar la página ni perder el estado actual de los filtros.
### Uso de `dispatchEvent` (Investigación propia)
Investigué por mi cuenta cómo usar `dispatchEvent` para simular eventos desde el código. Lo usé porque cuando marcaba un libro como favorito o prestado con un filtro activo, la pantalla no se actualizaba sola. Con `filter.dispatchEvent(new Event('input'))` logro que el buscador se ejecute solo y me ahorré repetir código para refrescar las tarjetas.

## Tecnologías Utilizadas
* **HTML5:** Marcado estructurado para formularios, menús de navegación, paneles y modales.
* **CSS3:** Maquetación responsiva basada en **CSS Grid** para la estructura principal de la interfaz y **Flexbox** para la alineación interna de tarjetas y componentes.
* **JavaScript (ES6 Modules):** Código modularizado y separado por responsabilidades técnicas.

## Estructura de Carpetas y Archivos
```text
/
├── index.html
├── CSS/
│   └── style.css
└── JSS/
    ├── app.js
    ├── data.js
    ├── render.js
    └── Model/
        └── Book.js

