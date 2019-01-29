


class barco{

    constructor(logitud, x, y, direccion){

        this.longitudBarcos = logitud;
        this.x = x;
        this.y = y;
        this.vidas = logitud;
        this.direccion = direccion;
        this.posicionesX = new Array(logitud);
        this.posicionesY = new Array(logitud);
        this.calcularLongitud();
        this.hundido = false;

    };


    calcularLongitud(){
        this.posicionesX[0] = this.x;
        this.posicionesY[0] = this.y;

        if(this.direccion == 'h'){
            for (let i = 0; i < this.longitudBarcos; i++) {
                this.posicionesY[i] = this.y + i;
            }
            for (let i = 0; i < this.longitudBarcos; i++) {
                this.posicionesX[i] = this.x;
            }
        }else{
            for (let i = 0; i < this.longitudBarcos; i++) {
                this.posicionesX[i] = this.x + i;
            }
            for (let i = 0; i < this.longitudBarcos; i++) {
                this.posicionesY[i] = this.y;
            }
        }



    }

    obtenerCordenadasX(){
        return this.posicionesX;
    }

    obtenerCordenadasY(){
        return this.posicionesY;
    }

    obtenerLongitud(){
        return this.longitudBarcos;
    }

    obtenerDireccion(){
        return this.direccion;
    }

    obtenerVidas(){
        return this.vidas;
    }

    obtenerEstadoHundido(){
        return this.hundido;
    }

    hundirBarco(){
        this.hundido = true;
    }

    restarUnaVida(){
        --this.vidas;
    }

}

module.exports.barco = barco;
