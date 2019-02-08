var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
var array = ['demo@demo.com', 'demo_demo@demo.com.ar', 'demo-demo12312@sub.dom.com.ar', 'demo@novalido', 'novalido>@demo.com', 'demo@novalido-.com', 'demo@-novalido.com']

var result;

var assert = require('assert');
describe('Array', function() {
  describe('#test()', function() {
    it('should return true if all array is ok', function() {
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