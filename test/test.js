var expect = require('chai').expect;


describe('compruebo metodos de la clase barco', function () {

    var barco = require('../barco').barco;
    var tablero = require('../tablero').tablero;
    

    it('Coloco un barco y compruebo que no está hundido', function () {

        var barcoPrueba = new barco();
        expect(barcoPrueba.obtenerEstadoHundido()).to.be.false;

    });
    it('Pruebo a hundir un barco y comprobar que está hundido', function () {

        var barcoPrueba = new barco();
        barcoPrueba.hundirBarco();
        expect(barcoPrueba.obtenerEstadoHundido()).to.be.true;

    });

    it('Compruebo el correcto funcionamiento de las vidas', function () {

        var barcoPrueba = new barco(4,2,2,'v');
        barcoPrueba.restarUnaVida();
        expect(barcoPrueba.obtenerVidas()).to.equal(3);

    });

    it('Coloco un barco y compruebo que no está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo

        

        tableroPrueba.ponerBarcoAleatorio(4);
        expect(tableroPrueba.comprobarHundido()).to.be.false;

    });
    


});
