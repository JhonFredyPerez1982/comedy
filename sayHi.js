let foto = document.getElementById('exerciseN2');
let canvas = foto.getContext("2d");
const hello = document.querySelector('.hi1');
hello.style.margin = "-510px 0px";

let nIntervId;
nIntervId = setInterval(flashText, 800);

function flashText() {
    const Elem = document.getElementById("exerciseN1");
    if (Elem.className === "AnswerMakeitrealExercise1") {
        Elem.className = "l";
    } else {
        Elem.className = "AnswerMakeitrealExercise1";
    }
}
let nube2 = "imagenes/nube2.png";
        imagen= new Image();
        imagen.src = nube2;
        imagen2= new Image();
        imagen2.src = nube2;
        imagen3= new Image();
        imagen3.src = nube2;
        imagen4= new Image();
        imagen4.src = nube2;
        imagen5= new Image();
        imagen5.src = nube2;
        imagen6= new Image();
        imagen6.src = nube2;        
        imagen.addEventListener("load", cargar2);
        imagen2.addEventListener("load", cargar2);
        imagen3.addEventListener("load", cargar2);
        imagen4.addEventListener("load", cargar2);
        imagen5.addEventListener("load", cargar2);
        imagen6.addEventListener("load", cargar2);
function cargar2() {
        canvas.drawImage(imagen, 0, 0);
        canvas.drawImage(imagen2, 500, 0);
        canvas.drawImage(imagen3, 0, 400);
        canvas.drawImage(imagen4, 1000, 0);
        canvas.drawImage(imagen5, 500, 400);
        canvas.drawImage(imagen6, 1000, 400);
    }

