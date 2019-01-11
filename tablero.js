
var numBarcos = 4;


class tablero {

    
    constructor(nombreTablero) {
        this.fila = 10;
        this.columa = 10;
        this.nombreTablero = nombreTablero;
        
        this.arrayTablero = new Array(this.columa);
        this.barcos = new Array(4);

        
        for(let i = 0; i <= this.fila; ++i){
            this.arrayTablero[i] = new Array(this.columa);
            for(let j = 0; j <= this.columa; ++j){
                this.arrayTablero[i][j] = 'o';
            }
        }


    }

    manejador(e) {

        if(numBarcos > 0){
            --numBarcos;
            this.textContent = "b";

        }
        else if(numBarcos == 0){
            quitarManejador();
            //aniadir bandera para comprobar en el index si ha aacabdo  de poner los barcos. si ha acabado habilitar el otro mapa de juebo
        }
        else{
            this.textContent = "x";
        }


        alert(this.fila);
        alert(this.columa);
        this.tablero.prueba(this.fila, this.columa);
    };

    
    prueba(fila,columa){
        this.arrayTablero[fila][columa] = 'x';
        alert(this.nombreTablero);
    }

    


    dibujarTablero() {
        var tablero = document.getElementById(this.nombreTablero);
        var contador = 0;

        while (tablero.hasChildNodes()) {
            tablero.removeChild(tablero.firstChild);
        }

        for (let s = 0; s < this.fila + 1; s++) {
            var fila = document.createElement("tr");
            for (let r = 0; r < this.columa + 1; r++) {
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
                    
                    col.tablero = this;
                    //col.textContent = contador;
                    //col.addEventListener("click", this.manejador);
                    //col.removeEventListener("click",manejador); quita el manejador
                    this.arrayTablero[s][r] = col;
                    contador++;
                }
            }

            tablero.appendChild(fila);
        }
        //this.aniadirManejador();
        //this.darEventoClick();
    };


    aniadirManejador(){

        for (let i = 2; i < this.arrayTablero.length; i++) {
            for (let j = 2; j < this.arrayTablero[i].length; j++) {
                this.arrayTablero[i][j].addEventListener("click", this.manejador);
            }
        }
    }

    quitarManejador(){

        for (let i = 2; i < this.arrayTablero.length; i++) {
            for (let j = 2; j < this.arrayTablero[i].length; j++) {
                this.arrayTablero[i][j].removeEventListener("click", this.manejador);
            }
        }
    }



}