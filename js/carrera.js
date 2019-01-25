function Carrera( content, firer ) {
	document.getElementById(element).addEventLister('click', this.empezar);

	this.now = Date.now();

	this.empezar = function() {

	};

	this.frames = function() {
		setInterval(function() {
      let timePassed = this.now - start;

      banana.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
	}
}

var MiCarrera('#container', '#boton');