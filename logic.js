class ColorGame {
  constructor() {
    // Referencias a elementos del DOM
    this.game = document.getElementById("game");
    this.menu = document.getElementById("menu");
    this.targetColorElement = document.getElementById("color");
    this.tableElement = document.getElementById("colorsTable");
  }

  startGame(difficulty) {
    // Configura la dificultad y genera los colores
    this.difficulty = difficulty;
    this.colors = this.generateColors(difficulty);
    this.displayColors(this.targetColor(this.colors));

    // Oculta el menú y muestra el juego
    this.menu.style.display = "none";
    this.game.style.display = "block";
  }
  
  generateColors(difficulty) {
    // Determina la cantidad de colores según la dificultad
    const lengthColors = difficulty === 'easy' ? 3 : 6;
    const colors = [];

    // Genera colores para la dificultad fácil
    if (lengthColors == 3) {
      for (let i = 0; i < lengthColors; i++) {
        colors.push(this.randomColorEasy());
      }
    } else {
      // Genera colores para la dificultad difícil
      let targetColor = this.randomColorEasy();
      let randomPosition = Math.floor(Math.random() * 6);
      for (let i = 0; i < lengthColors; i++) {
        if (i == randomPosition) {
          colors.push(targetColor);
        } else {
          colors.push(this.randomColorHard(targetColor));
        }
      }
    }
    console.log(colors);
    return colors;
  }

  randomColorEasy() {
    // Genera un color aleatorio fácil
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);

    r = this.depureColor(r);
    g = this.depureColor(g);
    b = this.depureColor(b);

    return (r + g + b);
  }

  randomColorHard(targetColor) {
    // Genera un color parecido al color objetivo (dificultad difícil)
    let result = [];
    for (let i = 0; i < targetColor.length; i += 2) {
      result.push(targetColor.substr(i, 2));
    }
    
    let r = Math.floor(Math.random() * parseInt(result[0], 16)).toString(16);
    let g = Math.floor(Math.random() * parseInt(result[1], 16)).toString(16);
    let b = Math.floor(Math.random() * parseInt(result[2], 16)).toString(16);

    r = this.depureColor(r);
    g = this.depureColor(g);
    b = this.depureColor(b);

    return (r + g + b);
  }

  depureColor(str) {
    // Asegura que el color tenga dos dígitos
    if (str.length < 2) {
      return str.padStart(2, '0');
    }
    return str;
  }

  targetColor(colors) {
    // Selecciona un color objetivo aleatorio de la lista de colores
    let colorsLength = colors.length;
    let target = colors[Math.floor(colorsLength * Math.random())];
  
    return target;
  }

  displayColors(pickedColor) {
    // Muestra los colores y añade event listeners para los clicks
    this.targetColorElement.innerText = pickedColor;
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');

    this.colors.forEach(color => {
      const colorBox = document.createElement("div");
      colorBox.className = "color-box";
      colorBox.style.backgroundColor = `#${color}`;
      colorBox.addEventListener('click', () => {
        // Muestra el modal de acierto o error
        if (color == pickedColor) {
          modalText.innerText = '¡ADIVINASTE!';
          modalText.classList.add('textCorrect');
          modal.style.display = 'block';
        } else {
          modalText.innerText = '¡INCORRECTO!';
          modalText.classList.remove('textCorrect');
          modal.style.display = 'block';
        }
      });

      this.tableElement.appendChild(colorBox);
    });
  }

  closeModal() {
    // Cierra el modal cuando se hace clic en el botón de cerrar
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  returnToMenu() {
    // Recarga la página y regresa al menú principal
    location.reload();
    this.game.style.display = 'none';
    this.menu.style.display = 'block';
  }
}

// Inicializa el juego y muestra el menú principal
const game = new ColorGame();
game.menu.style.display = 'block';
