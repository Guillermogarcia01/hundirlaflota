var expect = require('chai').expect;

describe('compruebo metodos de la clase barco', function () {

    var claseBarco = require('../barco').barco;

    it('Coloco un barco y compruebo que no está hundido', function () {

        var barco = new claseBarco();
        expect(barco.obtenerEstadoHundido()).to.be.false;

    });
    it('Pruebo a hundir un barco y comprobar que está hundido', function () {

        var barco = new claseBarco();
        barco.hundirBarco();
        expect(barco.obtenerEstadoHundido()).to.be.true;

    });

    it('Compruebo el correcto funcionamiento de las vidas', function () {

        var barco = new claseBarco(4,2,2,'v');
        barco.restarUnaVida();
        expect(barco.obtenerVidas()).to.equal(3);

    });
    


});
