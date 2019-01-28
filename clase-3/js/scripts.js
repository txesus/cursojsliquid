function carrera( bananas, firer ) {		
    document.getElementById(firer).addEventListener('click', this.frames);

	this.empezar = function() {
		
		// Aqui montamos los random

	};

	this.frames = function() {
		var banana1 = document.getElementById(bananas+'1');
		var banana2 = document.getElementById(bananas+'2');
		var banana3 = document.getElementById(bananas+'3');
		var banana4 = document.getElementById(bananas+'4');
console.log(banana4);
		setInterval(function() {
			var start = this.now = Date.now();

      var timePassed = Date.now() - start;

      document.getElementById(banana4).style.left = timePassed / 5 + 'px';

      

    }, 20);
	}
};

var MiCarrera = new carrera('banana', 'boton');