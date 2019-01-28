// Empty JS for your own code to be here
function Carrera( bananas, firer ) {
	numRunners = 3;

	getMaxWidth = function( distance, randoms, winner ) {
		var step = randoms[(winner - 1)];
		var floor= Math.floor(distance/step);

		return step*floor; 
	};

	movement = function( randoms, winner ) {
		var mochilos 	= {};
		var moved 		= {};
		for (var i = 1; i < numRunners+1; i++) {
			mochilos[bananas+i] = document.getElementById(bananas+i);
			moved['left'+i] = 0;
		}

		// Total width
		var distance 	= banana1.parentNode.clientWidth;
		var largest 	= getMaxWidth( distance, randoms, winner );  

	  var timer = setInterval(function() {
			if( moved['left'+ winner ] > largest)
			{				
				clearInterval(timer);
	    	alert( 'Ha ganado el mochilo '+winner+'!!!!!' );
				return;									      
	    }
	    else
	    {
	    	for (var i = 1; i < numRunners+1; i++) {
					moved['left'+i] += randoms[(i-1)];
					mochilos[bananas+i].style.left = moved['left'+i] + 'px';
				}
	    }
    }, 20);
	};

	getRandoms = function() {
		var randoms = [];
		var winner 	= 0;
		var max 		= 0;
		while(randoms.length < numRunners){
	    var r 		= Math.floor(Math.random()*20) + 1;	    
	    if(randoms.indexOf(r) === -1)
	    {
	    	randoms.push(r);	
	    	max = ( r > max ) ? r : max;
	    }
		}
		winner = randoms.indexOf(max) + 1;

		return { 'randoms': randoms, 'winner': winner };
	}
	

	empezar = function() {
		numRunners = document.querySelectorAll('#platanero .banana').length;

    for (var i = 1; i < numRunners+1; i++) {
			document.getElementById(bananas+i).style.left = '0px';
		}	
		
		var runners = getRandoms();

		movement( runners.randoms, runners.winner );				
	};

	document.getElementById(firer).addEventListener('click', empezar);
}

var MiCarrera = new Carrera('banana', 'boton');