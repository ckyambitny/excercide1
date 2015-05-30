jest.dontMock('../main');

   var calc = require('../main');
describe('General', function() {
 it('Ciastko', function() {
    var result = calc(5).value();
   expect(result).toBe(5);
 });
    it('Dodaje wartosc', function (){
        var result = calc(5).add(8).value();
        expect(result).toBe(13);
    });
    it('Mnozy', function() {
        var result = calc(5).multiply(5).value();
        expect(result).toBe(25); 
    });

});
