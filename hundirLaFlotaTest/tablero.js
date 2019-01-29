

var barco = require('./barco').barco;
var barcosPuestos = false;
const numBarcos = 5;

class tablero {


    constructor(nombreTablero, maquina) {
        this.fila = 10;
        this.columa = 10;
        this.nombreTablero = nombreTablero;
        this.numBarcos = 0;
        this.barcosAColocar = 5;
        this.maquina = maquina; //variable para saber si es la maquina o es el jugador

        this.barcos = new Array(numBarcos);
        this.arrayTablero = new Array(this.columa);


        for (let i = 0; i <= this.fila; ++i) {
            this.arrayTablero[i] = new Array(this.columa);
            for (let j = 0; j <= this.columa; ++j) {
                this.arrayTablero[i][j] = 'o';
            }
        }


    }

    obtenerBarcosAColocar() {
        return this.barcosAColocar;
    }

    retsarUnBarcoAColocar() {
        this.barcosAColocar--;
    }

    comprobarHundido() {

        for (let i = 0; i < this.numBarcos; ++i) {
            var barcoAComprobar = this.barcos[i];


            if (barcoAComprobar.obtenerVidas() == 0 && barcoAComprobar.obtenerEstadoHundido() == false) {
                barcoAComprobar.hundirBarco();
                return true;
            }

        }
        return false;


    }

    comprobarFinJUego() {
        for (let i = 0; i < this.numBarcos; ++i) {
            var barcoAComprobar = this.barcos[i];

            if (barcoAComprobar.obtenerEstadoHundido() == false) {
                return false;
            }
        }
        return true;

    }

    comprobarAtaque(cordenadaXAtaque, cordenadasYAtaque) {

        for (let i = 0; i < this.numBarcos; ++i) {
            var cordenasXBarco = this.barcos[i].obtenerCordenadasX();
            var cordenasYBarco = this.barcos[i].obtenerCordenadasY();

            for (let j = 0; j < this.barcos[i].obtenerLongitud(); ++j) {
                if (cordenasXBarco[j] == cordenadaXAtaque && cordenasYBarco[j] == cordenadasYAtaque) {
                    this.barcos[i].restarUnaVida();
                    
                    return true;
                }
            }

        }
        return false;

    }



    prueba(fila, columa) {
        this.arrayTablero[fila][columa] = 'x';
        alert(this.nombreTablero);
    }

    generarBarcosAleatorio() {
        //creo el barco de 5 posiciones
        this.ponerBarcoAleatorio(5);
        //creo el barco de 4 posiciones
        this.ponerBarcoAleatorio(4);
        //creo el barco de 4 posiciones
        this.ponerBarcoAleatorio(4);
        //creo el barco de 3 posiciones
        this.ponerBarcoAleatorio(3);
        //creo el barco de 2 posiciones
        this.ponerBarcoAleatorio(2);

    }

    ponerBarcoAMano(tamanio, posX, posY, direccion) {

        //es doce porque empieza en 1 por tanto 10 posiciones seria el 11
        if (direccion == 'v') {
            if (posX + tamanio < 12) {
                if (!this.comprobarSiColisionaAlPonerBarco(tamanio, posX, posY, direccion))
                    return false;
            }else{
                return false;
            }
        }
        else {
            if (posY + tamanio < 12) {
                if (!this.comprobarSiColisionaAlPonerBarco(4, posX, posY, direccion))
                    return false;
                
            }else{
                return false;
            }
        }

        var barcoGenerado = new barco(tamanio, posX, posY, direccion);
        this.barcos[this.numBarcos] = barcoGenerado;
        //this.pintarBarco(this.barcos[this.numBarcos]);
        this.numBarcos++;
        return true;

    }

    ponerBarcoAleatorio(tamanio) {

        //ponermos primero el de 5 casillas
        var correcto = false;
        var direccion = this.obtenerDireccionBarco();
        do {
            var posX = this.generarNumeroAleatorio();
            var posY = this.generarNumeroAleatorio();
            if (direccion == 'v') {
                if (posX + tamanio < 12) {
                    if (!this.comprobarSiColisionaAlPonerBarco(tamanio, posX, posY, direccion))
                        correcto = false;
                    else
                        correcto = true;
                }
            }
            else {
                if (posY + tamanio < 12) {
                    if (!this.comprobarSiColisionaAlPonerBarco(4, posX, posY, direccion))
                        correcto = false;
                    else
                        correcto = true;
                }
            }

        } while (!correcto);
        var barcoGenerado = new barco(tamanio, posX, posY, direccion);
        this.barcos[this.numBarcos] = barcoGenerado;
        if(!this.maquina)
            this.pintarBarco(this.barcos[this.numBarcos]);
        
        correcto = false;
        this.numBarcos++;

    }

 

    comprobarSiColisionaAlPonerBarco(longitudBarco, posX, posY, direccion) {

        if (direccion == 'v')
            posX--;
        else
            posY--;

        longitudBarco += 2;

        var posXInicio = posX;
        var posYInicio = posY;

        for (let i = 0; i < this.numBarcos; ++i) {
            var barcoAComprobar = this.barcos[i];
            var posisicionesX = barcoAComprobar.obtenerCordenadasX();
            var posisicionesY = barcoAComprobar.obtenerCordenadasY();

            var longitudBarcoTMP = barcoAComprobar.obtenerLongitud();
            var longitudArray = barcoAComprobar.obtenerLongitud();
            longitudArray--;

            if (barcoAComprobar.obtenerDireccion() == 'v') {
                var aux = posisicionesX[longitudArray];
                aux++
                posisicionesX[longitudBarcoTMP] = aux;
                posisicionesY[longitudBarcoTMP] = posisicionesY[longitudArray];
            }
            else {
                var aux = posisicionesY[longitudArray];
                aux++
                posisicionesY[longitudBarcoTMP] = aux;
                posisicionesX[longitudBarcoTMP] = posisicionesX[longitudArray];

            }

            longitudBarcoTMP++;

            for (let k = 0; k < longitudBarco; ++k) {
                for (let j = 0; j < longitudBarcoTMP; ++j) {
                    if (posX == posisicionesX[j] && posY == posisicionesY[j]) {
                        return false;
                    }
                }

                if (direccion == 'v')
                    posX++;
                else
                    posY++;
            }
            posX = posXInicio;
            posY = posYInicio;

        }
        return true;
    }


    generarNumeroAleatorio() {
        return Math.floor((Math.random() * 10) + 1);
    }

    pintarBarco(barco) {

        var cordenadasX = barco.obtenerCordenadasX();
        var cordenadasY = barco.obtenerCordenadasY();


        for (let i = 0; i < barco.obtenerLongitud(); ++i) {
            this.arrayTablero[cordenadasX[i]][cordenadasY[i]].textContent = 'b';
        }

    }

    obtenerDireccionBarco() {
        var num = Math.floor((Math.random() * 2));
        if (num == 0)
            return 'v';
        else
            return 'h';

    }

    obtenerBarcosFlas() {
        return barcosPuestos;
    }

    obtenerNumBarcos() {
        return this.numBarcos;
    }

    restarUnBarco() {
        this.numBarcos--;
    }

    obtenerBarcosColocados(){
        return this.numBarcos;
    }

    obtenerCordenadasXBarco(numBarco){
        return this.barcos[numBarco].obtenerCordenadasX();
    }
    obtenerCordenadasYBarco(numBarco){
        return this.barcos[numBarco].obtenerCordenadasY();
    }

}

module.exports.tablero = tablero;
