var expect = require('chai').expect;

describe('comprobarBarco', function () {

    var claseBarco = require('../barco').barco;
    it('debería devolver que no hay ningún barco en la coordenada pasada', function () {

        
        var barco = new claseBarco();
        barco.hundirBarco();
        expect(barco.obtenerEstadoHundido()).to.be.true;

    });

});
