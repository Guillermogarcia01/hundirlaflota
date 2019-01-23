var expect = require('chai').expect;

describe('compruebo metodos de la clase tablero', function () {

    var claseTablero = require('../tablero').tablero;
    var barco = require('../barco').barco;

    it('Coloco un barco y compruebo que no está hundido', function () {

        var tablero = new claseTablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo

        tablero.ponerBarcoAleatorio(4);
        expect(tablero.comprobarHundido()).to.be.false;

    });
    
    
    

}); 
