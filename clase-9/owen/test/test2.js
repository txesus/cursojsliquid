var re = /[0-9]{8}(-*)[TRWAGMYFPDXBNJZSQVHLCKET]{1}/i;
var array = ['12345678-A', '11223344A', 'A11223344', '1234567K']

var result;

var assert = require('assert');
describe('Array', function() {
  describe('#test()', function() {
    it('should return true if DNI is correct', function() {
        var testeo = true;
        for (var i = 0; i < array.length; i++) {
            result = re.test(String(array[i]).toLowerCase());
            console.log("["+result+"]" + " is " + array[i]);
            if(result === false) 
              testeo = false;
        }
        assert.equal(testeo, true);
    });
  });
});