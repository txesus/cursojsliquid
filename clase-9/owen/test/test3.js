var re = /(?=(?:.*\d){2})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[!@#$%^&*(),.?":{}|<>]){1})\S{6,20}/i;
var array = ['Password44$', 'password']

var result;

var assert = require('assert');
describe('Array', function() {
  describe('#test()', function() {
    it('should return true if Password is correct', function() {
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