class ColorGame{
  constructor(){
    this.game = document.getElementById("game");
    this.menu = document.getElementById("menu");
    this.targetColorElement = document.getElementById("color");
    this.tableElement = document.getElementById("colorsTable");
  }

  startGame(difficulty){
    this.difficulty=difficulty;
    this.colors = this.generateColors(difficulty);
    this.displayColors(this.targetColor(this.colors));

    this.menu.style.display = "none";
    this.game.style.display = "block";
  }
  
  generateColors(difficulty){
    const lengthColors = difficulty === 'easy' ? 3:6;
    const colors = [];

    if(lengthColors == 3){
      for (let i = 0; i < lengthColors; i++) {
        colors.push(this.randomColorEasy());
      }
    }
    
    return colors;
  }

  randomColorEasy(){
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);

    r=this.depureColor(r);
    g=this.depureColor(g);
    b=this.depureColor(b);

    return (r+g+b);
  }

  randomColorHard(){
    
  }

  depureColor(str){
    if (str.length < 2) {
      return str.padStart(2, '0');
    }
    return str;
  }
  
  targetColor(colors){
    let colorsLength = colors.length;
    let target = colors[Math.floor(colorsLength*Math.random())];
  
    return target;
  }

  displayColors(pickedColor){
    this.targetColorElement.innerText = pickedColor;
    this.colors.forEach(color=>{
      const colorBox = document.createElement("div");
      colorBox.className = "color-box";
      colorBox.style.backgroundColor = `#${color}`;

      this.tableElement.appendChild(colorBox)
    })
  }
}

const game = new ColorGame();
game.menu.style.display='block';
