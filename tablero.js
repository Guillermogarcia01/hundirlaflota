


var barcosPuestos = false;
const numBarcos = 5;

class tablero {


    constructor(nombreTablero) {
        this.fila = 10;
        this.columa = 10;
        this.nombreTablero = nombreTablero;
        this.numBarcos = 4;

        this.barcos = new Array(numBarcos);
        this.arrayTablero = new Array(this.columa);


        for (let i = 0; i <= this.fila; ++i) {
            this.arrayTablero[i] = new Array(this.columa);
            for (let j = 0; j <= this.columa; ++j) {
                this.arrayTablero[i][j] = 'o';
            }
        }


    }




    prueba(fila, columa) {
        this.arrayTablero[fila][columa] = 'x';
        alert(this.nombreTablero);
    }

    ponerBarcosAleatorios() {

        //ponermos primero el de 5 casillas
        var correcto = false;
        var direccion = this.obtenerDireccionBarco();

        do {
            var posX = this.generarNumeroAleatorio();
            var posY = this.generarNumeroAleatorio();
            if (direccion == 'v') {
                if (5 - posX > 0)
                    correcto = true;
            }
            else {
                if (5 - posY > 0)
                    correcto = true;
            }

        } while (!correcto);
        var barco1 = new barco(5, posX, posY, direccion);
        this.barcos[0] = barco1;
        this.pintarBarco(this.barcos[0]);
        correcto = false;

        //ahora uno de 4 casillas
        direccion = this.obtenerDireccionBarco();
        do {
            var posX = this.generarNumeroAleatorio();
            var posY = this.generarNumeroAleatorio();
            if (direccion == 'v') {
                if (6 - posX > 0) {
                    if(!this.comprobarSiColisionaAlPonerBarco(4, posX, posY, direccion))
                        correcto = false;
                    else
                        correcto = true;
                }
            }
            else {
                if (6 - posY > 0) {
                    if(!this.comprobarSiColisionaAlPonerBarco(4, posX, posY, direccion))
                        correcto = false;
                    else
                        correcto = true;
                }
            }

        } while (!correcto);
        var barco2 = new barco(4, posX, posY, direccion);
        this.barcos[1] = barco2;
        this.pintarBarco(this.barcos[1]);
        correcto = false;

    }


    comprobarSiColisionaAlPonerBarco(longitudBarco, posX, posY, direccion) {

        for (let i = 0; i < this.barcos.length; ++i) {
            var barcoAComprobar = this.barcos[i];
            var posisicionesX = barcoAComprobar.obtenerCordenadasX();
            var posisicionesY = barcoAComprobar.obtenerCordenadasY();

            if (direccion == 'v') {
                if (posY != posisicionesY[0])
                    return true;
                else {
                    for (let j = 0; j < longitudBarco; ++j) {
                        var posXTMP = posX + j;
                        for (let k = 0; k < barcoAComprobar.obtenerLongitud(); ++k) {
                            if (posXTMP == posisicionesX[k])
                                return false;
                        }
                    }
                }

            } else {
                if (posX != posisicionesX[0])
                    return true;
                else {
                    for (let j = 0; j < longitudBarco; ++j) {
                        var posYTMP = posY + j;
                        for (let k = 0; k < barcoAComprobar.obtenerLongitud(); ++k) {
                            if (posYTMP == posisicionesY[k])
                                return false;
                        }
                    }
                }
            }

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

}