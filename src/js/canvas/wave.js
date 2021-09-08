
	var Site = Site || {};

	Site.wave = function (canvasID, waterColor) {
		var self = this;

		/** The current dimensions of the screen (updated on resize) */
        var $element = $("#"+canvasID);
		var WIDTH = $element.width();
		var HEIGHT = $element.height();

		/** Wave settings */
		var DENSITY = 0.75;
		var FRICTION = 1.14;
		var MOUSE_PULL = 0.09; // The strength at which the mouse pulls particles within the AOE
		var AOE = 200; // Area of effect for mouse pull
		var DETAIL = Math.round( WIDTH / 60 ); // The number of particles used to build up the wave
		var WATER_DENSITY = 1.07;
		var AIR_DENSITY = 1.02;
		var TWITCH_INTERVAL = 2000; // The interval between random impulses being inserted into the wave to keep it moving



		var mouseIsDown;
		var ms = {x:0, y:0}; // Mouse speed
		var mp = {x:0, y:0}; // Mouse position

		var canvas, context, particles;

		var timeUpdateInterval, twitchInterval;

		/**
		 * Constructor.
		 */
		self.initialize = function() {
			console.log("Water started");

			canvas = document.getElementById( canvasID );

			if (canvas && canvas.getContext) {
				context = canvas.getContext('2d');

				particles = [];

				// Generate our wave particles
				for( var i = 0; i < DETAIL+1; i++ ) {
					particles.push( {
						x: WIDTH / (DETAIL-4) * (i-2), // Pad by two particles on each side
						y: HEIGHT*0.5,
						original: {x: 0, y: HEIGHT * 0.5},
						velocity: {x: 0, y: Math.random()*3}, // Random for some initial movement in the wave
						force: {x: 0, y: 0},
						mass: 10
					} );
				}

				$(canvas).mousemove(mouseMove);
				$(canvas).mousedown(mouseDown);
				$(canvas).mouseup(mouseUp);
				$(window).resize(resizeCanvas);

				timeUpdateInterval = setInterval( timeUpdate, 40 );
				twitchInterval = setInterval( twitch, TWITCH_INTERVAL );

				resizeCanvas();
			}

		};




		/**
		 * Inserts a random impulse to keep the wave moving.
		 * Impulses are only inserted if the mouse is not making
		 * quick movements.
		 */
		function twitch() {
			if( ms.x < 6 || ms.y < 6 ) {
				var forceRange = 15; // -value to +value
				insertImpulse( Math.random() * WIDTH, (Math.random()*(forceRange*2)-forceRange ) );
			}
		}

		/**
		 * Inserts an impulse in the wave at a specific position.
		 *
		 * @param positionX the x coordinate where the impulse
		 * should be inserted
		 * @param forceY the force to insert
		 */
		function insertImpulse( positionX, forceY ) {
			var particle = particles[Math.round( positionX / WIDTH * particles.length )];

			if( particle ) {
				particle.force.y += forceY;
			}
		}

		/**
		 *
		 */
		function timeUpdate(e) {

			var gradientFill = context.createLinearGradient(WIDTH*0.5,HEIGHT*0.2,WIDTH*0.5,HEIGHT);
			gradientFill.addColorStop(0,waterColor);
			gradientFill.addColorStop(1,waterColor);

			context.clearRect(0, 0, WIDTH, HEIGHT);
			context.fillStyle = gradientFill;
			context.beginPath();
			context.moveTo(particles[0].x, particles[0].y);

			var len = particles.length;
			var i;

			var current, previous, next, distance;

			for( i = 0; i < len; i++ ) {
				current = particles[i];
				previous = particles[i-1];
				next = particles[i+1];

				if (previous && next) {

					var forceY = 0;

					forceY += -DENSITY * ( previous.y - current.y );
					forceY += DENSITY * ( current.y - next.y );
					forceY += DENSITY/15 * ( current.y - current.original.y );

					current.velocity.y += - ( forceY / current.mass ) + current.force.y;
					current.velocity.y /= FRICTION;
					current.force.y /= FRICTION;
					current.y += current.velocity.y;

					distance = distanceBetween( mp, current );

					if( distance < AOE ) {
						distance = distanceBetween( mp, {x:current.original.x, y:current.original.y} );

						ms.x = ms.x * 0.98;
						ms.y = ms.y * 0.98;

						current.force.y += (MOUSE_PULL * ( 1 - (distance / AOE) )) * ms.y;
					}

					// cx, cy, ax, ay
					context.quadraticCurveTo(previous.x, previous.y, previous.x + (current.x - previous.x) / 2, previous.y + (current.y - previous.y) / 2);
				}

			}

			context.lineTo(particles[particles.length-1].x, particles[particles.length-1].y);
			context.lineTo(WIDTH, HEIGHT);
			context.lineTo(0, HEIGHT);
			context.lineTo(particles[0].x, particles[0].y);

			context.fill();


			context.fillStyle = "#39c";
			context.beginPath();
			context.fill();
		}

		/**
		 *
		 */
		function getClosestParticle(point){
			var closestIndex = 0;
			var closestDistance = 1000;

			var len = particles.length;

			for( var i = 0; i < len; i++ ) {
				var thisDistance = distanceBetween( particles[i], point );

				if( thisDistance < closestDistance ) {
					closestDistance = thisDistance;
					closestIndex = i;
				}

			}

			return particles[closestIndex];
		}


		/**
		 *
		 */
		function mouseMove(e) {
			e = e.originalEvent;
			ms.x = Math.max( Math.min( e.layerX - mp.x, 40 ), -40 );
			ms.y = Math.max( Math.min( e.layerY - mp.y, 40 ), -40 );

			mp.x = e.layerX;
			mp.y = e.layerY;

		}
		function mouseDown(e) {
			mouseIsDown = true;

			// var len = bubbles.length;
			//
			// var closestIndex = 0;
			// var closestDistance = 1000;
			//
			// for( var i = 0; i < len; i++ ) {
			// 	var thisDistance = DistanceBetween( bubbles[i], mp );
			//
			// 	if( thisDistance < closestDistance ) {
			// 		closestDistance = thisDistance;
			// 		closestIndex = i;
			// 	}
			//
			// }

		}
		function mouseUp(e) {
			mouseIsDown = false;
		}

		/**
		 *
		 */
		function resizeCanvas() {
			WIDTH = $element.width(); //document.documentElement.clientWidth;
			HEIGHT = $element.height(); //document.documentElement.clientHeight;

			canvas.width = WIDTH;
			canvas.height = HEIGHT;

			for( var i = 0; i < DETAIL+1; i++ ) {
				particles[i].x = WIDTH / (DETAIL-4) * (i-2);
				particles[i].y = HEIGHT*0.5;

				particles[i].original.x = particles[i].x;
				particles[i].original.y = particles[i].y;
			}
		}

		/**
		 *
		 */
		function distanceBetween(p1,p2) {
			var dx = p2.x-p1.x;
			var dy = p2.y-p1.y;
			return Math.sqrt(dx*dx + dy*dy);
		}

		return self;
	};

	// var wave = new Wave();
	// wave.Initialize( 'world' );
