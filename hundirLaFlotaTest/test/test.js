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

    it('Coloco un barco y compruebo el número de barcos', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        expect(tableroPrueba.obtenerBarcosColocados()).to.equal(1);

    });

    it('Coloco todos los barcos y compruebo el número de barcos', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(5);
        tableroPrueba.ponerBarcoAleatorio(4);
        tableroPrueba.ponerBarcoAleatorio(4);
        tableroPrueba.ponerBarcoAleatorio(3);
        tableroPrueba.ponerBarcoAleatorio(2);

        expect(tableroPrueba.obtenerBarcosColocados()).to.equal(5);

    });


    it('Coloco un barco y compruebo que no está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo

        tableroPrueba.ponerBarcoAleatorio(4);
        expect(tableroPrueba.comprobarHundido()).to.be.false;

    });

    it('Coloco un barco y lo ataco, fallado', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué

        
        expect(tableroPrueba.comprobarAtaque((cordenadasXBarco[0]-1), (cordenadasYBarco[0]-1))).to.be.false;

    });

    it('Coloco un barco y lo ataco, comprobando que le doy', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué

        
        expect(tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0])).to.be.true;

    });

    it('Coloco un barco y le ataco, comprobando que no está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0])
        
        expect(tableroPrueba.comprobarHundido()).to.be.false;

    });

    it('Coloco un barco y le ataco a dos posiciones, comprobando que no está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1]);
        
        expect(tableroPrueba.comprobarHundido()).to.be.false;

    });

    it('Coloco un barco y le ataco a tres posiciones, comprobando que no está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[2], cordenadasYBarco[2]);
        
        expect(tableroPrueba.comprobarHundido()).to.be.false;

    });

    it('Coloco un barco y le ataco hasta hundirlo, comprobando que está hundido', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0])
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1])
        tableroPrueba.comprobarAtaque(cordenadasXBarco[2], cordenadasYBarco[2]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[3], cordenadasYBarco[3]);

        expect(tableroPrueba.comprobarHundido()).to.be.true;

    });

    it('Comrpuebo que no genera barcos aleatorios', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        
        expect(tableroPrueba.obtenerBarcosColocados()).to.equal(0);

    });

    it('Genero todos los barcos aleatorios', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.generarBarcosAleatorio();

        expect(tableroPrueba.obtenerBarcosColocados()).to.equal(5);

    });

    it('Coloco un barco a mano y compruebo que esta correcto', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo

        expect(tableroPrueba.ponerBarcoAMano(5,2,2,'v')).to.be.true;

    });

    it('Coloco dos barco a mano y compruebo que esta correcto', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');


        expect(tableroPrueba.ponerBarcoAMano(4,4,4,'v')).to.be.true;

    });

    it('Coloco tres barco a mano y compruebo que esta correcto', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');
        tableroPrueba.ponerBarcoAMano(4,4,4,'v');

        expect(tableroPrueba.ponerBarcoAMano(4,9,2,'h')).to.be.true;

    });
    
    it('Coloco cuatro barco a mano y compruebo que esta correcto', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');
        tableroPrueba.ponerBarcoAMano(4,4,4,'v');
        tableroPrueba.ponerBarcoAMano(4,9,2,'h');

        expect(tableroPrueba.ponerBarcoAMano(3,2,8,'v')).to.be.true;

    });

    it('Coloco todos los barcos a mano y compruebo que esta correcto', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');
        tableroPrueba.ponerBarcoAMano(4,4,4,'v');
        tableroPrueba.ponerBarcoAMano(4,9,2,'h');
        tableroPrueba.ponerBarcoAMano(3,2,8,'v');

        expect(tableroPrueba.ponerBarcoAMano(2,8,8,'h')).to.be.true;

    });
    
    it('Coloco un barco y le ataco, compruebo que el juego sigue', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0])
        
        expect(tableroPrueba.comprobarFinJUego()).to.be.false;

    });

    it('Coloco un barco y le ataco a dos posiciones, compruebo que el juego sigue', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1]);
        
        expect(tableroPrueba.comprobarFinJUego()).to.be.false;

    });

    it('Coloco un barco y le ataco a tres posiciones, compruebo que el juego sigue', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[2], cordenadasYBarco[2]);
        
        expect(tableroPrueba.comprobarFinJUego()).to.be.false;

    });

    it('Coloco un barco y le ataco hasta hundirlo, compruebo que el juego sigue', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAleatorio(4);

        var cordenadasXBarco = tableroPrueba.obtenerCordenadasXBarco(0); //el 0 es que obtengo del primer barco que coloqué
        var cordenadasYBarco = tableroPrueba.obtenerCordenadasYBarco(0); //el 0 es que obtengo del primer barco que coloqué
        tableroPrueba.comprobarAtaque(cordenadasXBarco[0], cordenadasYBarco[0])
        tableroPrueba.comprobarAtaque(cordenadasXBarco[1], cordenadasYBarco[1])
        tableroPrueba.comprobarAtaque(cordenadasXBarco[2], cordenadasYBarco[2]);
        tableroPrueba.comprobarAtaque(cordenadasXBarco[3], cordenadasYBarco[3]);
        tableroPrueba.comprobarHundido();

        expect(tableroPrueba.comprobarFinJUego()).to.be.true;

    });


    it('Coloco un barco y trato de colocar otro en la misma posicion, impidiendomelo', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');
        
        
        expect(tableroPrueba.comprobarSiColisionaAlPonerBarco(5,2,2,'v')).to.be.false;

    });

    it('Coloco un barco y trato de colocar otro cruzandolo, impidiendomelo', function () {

        var tableroPrueba = new tablero("nombre", true);//el segundo parametro es para indicarle que es la máquina, pero realmente no afecta ahora mismo
        tableroPrueba.ponerBarcoAMano(5,2,2,'v');
        
        
        expect(tableroPrueba.comprobarSiColisionaAlPonerBarco(5,2,1,'h')).to.be.false;

    });

});
