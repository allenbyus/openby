// num random 0-255

let numRandom255 = ()=>{
    let num = Math.floor(Math.random()*255);

    return num;
}

let numRandom1 = ()=>{
    let num =(Math.random()*1).toFixed(2);

    return num;
}

let crearCanvas = ()=>{
  var canvas = document.getElementById('canvas');
  let  x=-5;
  let y=-5;
  if (canvas.getContext) {
    var context= canvas.getContext("2d");
    let alto = canvas.height;
    let ancho = canvas.width;
    let j =0;

    for (j =0 ; j<alto/5; j++){

      y+=5;

        for(let i =0; i<ancho/5;i++){
          x+=5;
          context.fillStyle =  `rgba(${numRandom255()},${numRandom255()},${numRandom255()},${numRandom1()})`
          context.fillRect(x,y, 5, 5);
          x+=5;
          context.fillStyle =  `rgba(${numRandom255()},${numRandom255()},${numRandom255()},${numRandom1()})`
          context.fillRect(x, y, 5, 5);
        }
        x =-5;
    }
  }
}
let crearCanvasAjedrez = ()=>{
  var canvas = document.getElementById('canvas');
  let  x=-5;
  let y=-5;
  if (canvas.getContext) {
    var context= canvas.getContext("2d");
    let alto = canvas.height;
    let ancho = canvas.width;
    let j =0;

    for (j =0 ; j<alto/5; j++){

      y+=5;
     if(j % 2 ==0){ //para hacer un tablero de ajedrez

        for(let i =0; i<ancho/5;i++){
          x+=5;
          context.fillStyle =  "rgb(255, 255, 255)";
          context.fillRect(x,y, 5, 5);
          x+=5;
          context.fillStyle =  "rgb(0,0,0)";
          context.fillRect(x, y, 5, 5);
        }
        x =-5;
      }else{
        for(let k =0; k<ancho/5;k++){
          x+=5;
          context.fillStyle = "rgb(0,0,0)";
          context.fillRect(x,y, 5, 5);
          x+=5;
          context.fillStyle =    context.fillStyle =  "rgb(255, 255, 255)";
          context.fillRect(x, y, 5, 5);
        }
        x=-5;
      }
    }
  }
}
window.onload =() =>{
let contador =0;
let intervalo = setInterval(()=>{
  crearCanvas();
  contador++;
  document.getElementById('contador').innerHTML = contador;
  if(contador == 500){
    contador =0;
      document.getElementById('contador').innerHTML = contador;
    clearInterval(intervalo);
     crearCanvasAjedrez()
  }
},20);

}
