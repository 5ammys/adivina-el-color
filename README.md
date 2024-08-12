Adivina el Color

Este proyecto es un juego web en el que el usuario debe adivinar el color correcto entre varias opciones basadas en su código hexadecimal. 
El juego tiene dos niveles de dificultad: fácil y difícil, donde los colores en el nivel difícil son más similares entre sí. 
El proyecto está implementado en JavaScript puro y manipula el DOM para mostrar los elementos de la interfaz de usuario.

Descripción:
El juego presenta una lista de colores generados aleatoriamente, y el jugador debe seleccionar cuál de ellos coincide con el código hexadecimal mostrado. 
Dependiendo de la dificultad seleccionada, los colores serán más o menos similares, lo que aumenta la dificultad del juego.

Funcionalidades:
Selección de dificultad: fácil o difícil.
Generación automática de colores según la dificultad.
Verificación del color seleccionado.
Mensajes de acierto o error mostrados en un modal.
Opciones para reiniciar el juego o regresar al menú principal.

Estructura del Proyecto:
El proyecto está compuesto principalmente por la clase ColorGame, que maneja la lógica del juego. La estructura básica del proyecto es la siguiente:

color-view.html (Contiene la estructura básica de la interfaz de usuario.)

styles.css (Define el estilo visual del juego, incluyendo el diseño del modal y los colores.)

script.js (Contiene la lógica del juego implementada en la clase ColorGame.)

README.md (Documentación del proyecto.)

Cómo Funciona:
1. Inicialización
Al iniciar el juego, se muestran las opciones de dificultad. Dependiendo de la selección del usuario,
se generan una cantidad específica de colores (3 para fácil, 6 para difícil).

3. Generación de Colores:
La generación de colores se maneja mediante las funciones randomColorEasy y randomColorHard. En el nivel fácil, los colores se generan completamente al azar.
En el nivel difícil, los colores se generan de manera similar, pero con pequeñas variaciones basadas en un color objetivo,
lo que los hace más difíciles de distinguir entre sí.

4. Mostrar Colores y Verificar Selección:
Los colores generados se muestran en la interfaz de usuario. Al hacer clic en uno de ellos, se compara con el color objetivo. Si el usuario adivina correctamente,
se muestra un mensaje de éxito; de lo contrario, se muestra un mensaje de error.

6. Modal de Resultado:
El modal muestra el resultado del intento del usuario (acierto o error) y permite cerrar el modal o reiniciar el juego.

7. Reiniciar y Regresar al Menú:
El usuario puede reiniciar el juego o regresar al menú principal para cambiar la dificultad.

Cómo Usar:
Clona o descarga el repositorio en tu máquina local.
Abre color-view.html en tu navegador.
Selecciona la dificultad del juego.
Intenta adivinar el color correcto haciendo clic en los colores mostrados.
Observa si tu elección fue correcta a través del modal que se despliega.
Desarrollo y Proceso
Concepto Inicial
El proyecto comenzó con la idea de crear un juego simple que permitiera a los usuarios practicar su capacidad para reconocer colores en formato hexadecimal. La principal motivación fue desarrollar un juego interactivo utilizando JavaScript puro, sin depender de frameworks externos.

Diseño de la Interfaz:
La interfaz fue diseñada de manera simple, con un menú para seleccionar la dificultad y un tablero de juego donde se muestran los colores. Se utilizó CSS básico para el estilo, y la interacción con el usuario se maneja mediante eventos de clic.

Lógica del Juego:
La lógica principal se encuentra en la clase ColorGame, la cual fue iterada varias veces para mejorar la experiencia del usuario y la precisión en la generación de colores en el nivel difícil.

Implementación del Modal:
El modal que muestra el resultado fue implementado utilizando métodos básicos del DOM, permitiendo mostrar mensajes dinámicos dependiendo del resultado del juego.
