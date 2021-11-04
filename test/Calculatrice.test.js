let assert = require('assert');
const calculatrice = require('../js/Calculatrice.js');

describe('Addition', () => {
    it('should return 10', () => {
        let res = calculatrice.ajouter(5, 5);
        assert.equal(res, 10);
        /*
        res = calculatrice.ajouter(5,62);
        assert.equal(res, 670, "vaut 67");
        */
    });

    it('should return 0', () => {
        let res = calculatrice.ajouter(5, -5);
        assert.equal(res, 0);
    });
});

describe('Subtraction', () => {
    it('should return 10', () => {
        let res = calculatrice.soustraire(20, 10);
        assert.equal(res, 10);
    });
    /*
    it('divide by 0', () => {
        let res = calculatrice.soustraire(20, 0);
        assert.equal(res, 10);
    });
    */
});

describe('Multiplication', () => {
    it('should return 10', () => {
        let res = calculatrice.multipliquer(1, 10);
        assert.equal(res, 10);
    });
});

describe('Division', () => {
    it('should return 10', () => {
        let res = calculatrice.diviser(100, 10);
        assert.equal(res, 10);
    });
});

/*
describe('Wait', () => {
    it('should exist', () => {
        assert.notEqual(calculatrice.wait, undefined)
    });
    it('should wait seconds', function(){
        calculatrice.wait(1500, function(time){
            assert.equal(time, 56);
            done();
        });
    });
});
*/