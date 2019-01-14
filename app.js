

var tableroJugador1;
var tableroJugador2;
var editando = true;



function manejador(e) {

    if (editando) {
        tableroJugador1.restarUnBarco();
        this.textContent = "b";
        if(tableroJugador1.obtenerNumBarcos() != 0){

        }
        else{
            editando = false;
            tableroJugador2 = new tablero("tablero2");
            dibujarTablero(tableroJugador2);
            quitarManejador(tableroJugador1);
            //aniadirManejador(tableroJugador2);
            //generar barcos aleatorios del tablero 2
            
        }
    }
    else {
        this.textContent = "x";
        //quitar el listener de una posicion
    }


    /*alert(this.fila);
    alert(this.columa);
    this.tablero.prueba(this.fila, this.columa);*/
};


function aniadirManejador(tablero) {

    for (let i = 1; i < tablero.arrayTablero.length; i++) {
        for (let j = 1; j < tablero.arrayTablero[i].length; j++) {
            tablero.arrayTablero[i][j].addEventListener("click", manejador);
        }
    }
}



function quitarManejador(tablero) {

    for (let i = 2; i < tablero.arrayTablero.length; i++) {
        for (let j = 2; j < tablero.arrayTablero[i].length; j++) {
            tablero.arrayTablero[i][j].removeEventListener("click", manejador);
        }
    }
}


function dibujarTablero(tableroTMP) {
    var tablero = document.getElementById(tableroTMP.nombreTablero);
    var contador = 0;

    while (tablero.hasChildNodes()) {
        tablero.removeChild(tablero.firstChild);
    }

    for (let s = 0; s < tableroTMP.fila + 1; s++) {
        var fila = document.createElement("tr");
        for (let r = 0; r < tableroTMP.columa + 1; r++) {
            var col = document.createElement("td");
            fila.appendChild(col);
            if (s === 0 && r === 0) {
            } else if (s === 0 && r !== 0) {
                col.textContent = String.fromCharCode(65 + r);
            } else if (r === 0 && s !== 0) {
                col.textContent = s;

            } else {
                col.fila = s;
                col.columa = r;

                col.tablero = tableroTMP;
                //col.textContent = contador;
                col.addEventListener("click", manejador);
                //col.removeEventListener("click",manejador); quita el manejador
                tableroTMP.arrayTablero[s][r] = col;
                contador++;
            }
        }

        tablero.appendChild(fila);
    }
    //this.aniadirManejador();
    //this.darEventoClick();
};


window.onload = function () {
    document.getElementById("dirVertical").hidden = true;
    document.getElementById("dirhorizontal").hidden = true;
    document.getElementById("textVertical").hidden = true;
    document.getElementById("textHorizontal").hidden = true;
    inicio();
}



function iniciarMetodoJuegoAleatorio() {
    document.getElementById("metodoJuegoAleatorio").hidden = true;
    document.getElementById("metodoJuegoMano").hidden = true;

}

function iniciarMetodoJuegoAMano() {
    document.getElementById("metodoJuegoAleatorio").hidden = true;
    document.getElementById("metodoJuegoMano").hidden = true;
    document.getElementById("dirVertical").hidden = false;
    document.getElementById("dirhorizontal").hidden = false;
    document.getElementById("textVertical").hidden = false;
    document.getElementById("textHorizontal").hidden = false;
}


function inicio(){

    tableroJugador1 = new tablero("tablero1");

    dibujarTablero(tableroJugador1);
    //aniadirManejador(tableroJugador1);

    //tableroJugador2.dibujarTablero();
   
    
}



