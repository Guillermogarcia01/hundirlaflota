

var tableroJugador1;
var tableroJugador2;
var editando = true;
var direccionBarco;
var longitudBarcos = [5, 4, 4, 3, 2];
var barcoSiguiente = 0;
var posicionesAtacadas = new Array();

function manejador(e) {

    if (editando) {

        comprobarDireccionBarcoAPoner();
        if (!tableroJugador1.ponerBarcoAMano(longitudBarcos[barcoSiguiente], this.fila, this.columna, direccionBarco)) {
            alert("error al poner un barco, posicion no permitida");
            return;
        } else {
            barcoSiguiente++;
        }

        tableroJugador1.retsarUnBarcoAColocar();
        if (tableroJugador1.obtenerBarcosAColocar() != 0) {

        } else {
            editando = false;
            tableroJugador2 = new tablero("tablero2", true);
            dibujarTablero(tableroJugador2);
            quitarManejador(tableroJugador1);
            tableroJugador2.generarBarcosAleatorio();
            document.getElementById("dirVertical").hidden = true;
            document.getElementById("dirhorizontal").hidden = true;
            document.getElementById("textVertical").hidden = true;
            document.getElementById("textHorizontal").hidden = true;
            //aniadirManejador(tableroJugador2);
            //generar barcos aleatorios del tablero 2

        }
    }
    else {

        if (tableroJugador2.comprobarAtaque(this.fila, this.columna)) {
            alert("tocado wey");
            this.textContent = "O";

            if (tableroJugador2.comprobarHundido())
                alert("barco hundido");

            if (tableroJugador2.comprobarFinJUego())
                alert("fin del juego");


        } else {
            this.textContent = "X";
        }
        quitarManejadorAUnaPosicion(tableroJugador2, this.fila, this.columna);

        //quitar el listener de una posicion
    }

    atacar();
    /*alert(this.fila);
    alert(this.columa);
    this.tablero.prueba(this.fila, this.columa);*/
};



function atacar() {

    do {
        posX = generarNumeroAleatorio();
        posY = generarNumeroAleatorio();

        var posicionesAtaque = posX.toString() + posY.toString();
        //alert(posicionesAtaque);
        var posicionExistente = false;


        for (let i = 0; i < posicionesAtacadas.length; ++i) {
            if (posicionesAtacadas[i] == posicionesAtaque) {
                posicionExistente =  true;
            }
        }


    } while (posicionExistente);




    tableroJugador1.arrayTablero[posX][posY].textContent = "a";

}





function generarNumeroAleatorio() {
    return Math.floor((Math.random() * 10) + 1);
}

function comprobarDireccionBarcoAPoner() {
    if (document.getElementById('dirVertical').checked) {
        direccionBarco = 'v';
    } else if (document.getElementById('dirhorizontal').checked) {
        direccionBarco = 'h';
    }
}

function aniadirManejador(tablero) {

    for (let i = 1; i < tablero.arrayTablero.length; i++) {
        for (let j = 1; j < tablero.arrayTablero[i].length; j++) {
            tablero.arrayTablero[i][j].addEventListener("click", manejador);
        }
    }
}

function quitarManejadorAUnaPosicion(tablero, posX, posY) {
    tablero.arrayTablero[posX][posY].removeEventListener("click", manejador);
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
                col.columna = r;

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
    tableroJugador1 = new tablero("tablero1", false);
    dibujarTablero(tableroJugador1);
    tableroJugador1.generarBarcosAleatorio();
    tableroJugador2 = new tablero("tablero2", true);
    quitarManejador(tableroJugador1);
    dibujarTablero(tableroJugador2);
    tableroJugador2.generarBarcosAleatorio();
    editando = false;
}

function iniciarMetodoJuegoAMano() {
    document.getElementById("metodoJuegoAleatorio").hidden = true;
    document.getElementById("metodoJuegoMano").hidden = true;
    document.getElementById("dirVertical").hidden = false;
    document.getElementById("dirhorizontal").hidden = false;
    document.getElementById("textVertical").hidden = false;
    document.getElementById("textHorizontal").hidden = false;
    tableroJugador1 = new tablero("tablero1", false);
    dibujarTablero(tableroJugador1);


}


function inicio() {

    //tableroJugador1 = new tablero("tablero1");

    //dibujarTablero(tableroJugador1);
    //aniadirManejador(tableroJugador1);

    //tableroJugador2.dibujarTablero();


}


function ponerBarcosAleatorios() {

    tableroJugador1.generarBarcosAleatorio();

}


