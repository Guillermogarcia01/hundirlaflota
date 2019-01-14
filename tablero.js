
var barcosPuestos =  false;

class tablero {

    
    constructor(nombreTablero) {
        this.fila = 10;
        this.columa = 10;
        this.nombreTablero = nombreTablero;
        this.numBarcos = 4;

        

        this.arrayTablero = new Array(this.columa);
        this.barcos = new Array(4);

        
        for(let i = 0; i <= this.fila; ++i){
            this.arrayTablero[i] = new Array(this.columa);
            for(let j = 0; j <= this.columa; ++j){
                this.arrayTablero[i][j] = 'o';
            }
        }


    }

    

    
    prueba(fila,columa){
        this.arrayTablero[fila][columa] = 'x';
        alert(this.nombreTablero);
    }


    

    obtenerBarcosFlas(){
        return barcosPuestos;
    }

    obtenerNumBarcos(){
        return this.numBarcos;
    }

    restarUnBarco(){
        this.numBarcos--;
    }

}