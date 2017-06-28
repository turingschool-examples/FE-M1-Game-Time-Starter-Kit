/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	document.write(__webpack_require__(1));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var Player = __webpack_require__(2);
	const canvas = document.getElementById('canvas-element');
	const context = canvas.getContext('2d');
	var player1 = new Player(1, canvas.height / 2 - 5, 10, 10, 'blue', true, false);
	var player2 = new Player(canvas.width - 11, canvas.height / 2 - 5, 10, 10, 'red', false, true);
	var playerArray = [player1, player2];

	var p1direction = {
	  x: 1,
	  y: 0
	};

	var p2direction = {
	  x: 1,
	  y: 0
	};

	function gameLoop() {

	  for (let i = 0; i < playerArray.length; i++) {
	    playerArray[i].draw(context);
	    player1.moveRight(p1direction);
	    player1.moveLeft(p1direction);
	    player1.moveUp(p1direction);
	    player1.moveDown(p1direction);
	    player2.moveRight(p2direction);
	    player2.moveLeft(p2direction);
	    player2.moveUp(p2direction);
	    player2.moveDown(p2direction);
	    borderCheck(i);
	  }

	  requestAnimationFrame(gameLoop);
	}

	window.addEventListener('keydown', function (e) {
	  if (e.keyCode === 37) {
	    player1.movingUp = false;
	    player1.movingDown = false;
	    player1.movingRight = false;
	    player1.movingLeft = true;

	    p1direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 39) {
	    player1.movingUp = false;
	    player1.movingDown = false;
	    player1.movingRight = true;
	    player1.movingLeft = false;
	    p1direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 38) {
	    player1.movingUp = true;
	    player1.movingDown = false;
	    player1.movingRight = false;
	    player1.movingLeft = false;

	    p1direction = {
	      x: 0,
	      y: 1
	    };
	  } else if (e.keyCode === 40) {
	    player1.movingUp = false;
	    player1.movingDown = true;
	    player1.movingRight = false;
	    player1.movingLeft = false;

	    p1direction = {
	      x: 0,
	      y: 1
	    };
	  }if (e.keyCode === 65) {
	    player2.movingUp = false;
	    player2.movingDown = false;
	    player2.movingRight = false;
	    player2.movingLeft = true;

	    p2direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 68) {
	    player2.movingUp = false;
	    player2.movingDown = false;
	    player2.movingRight = true;
	    player2.movingLeft = false;

	    p2direction = {
	      x: 1,
	      y: 0
	    };
	  } else if (e.keyCode === 87) {
	    player2.movingUp = true;
	    player2.movingDown = false;
	    player2.movingRight = false;
	    player2.movingLeft = false;

	    p2direction = {
	      x: 0,
	      y: 1
	    };
	  } else if (e.keyCode === 83) {
	    player2.movingUp = false;
	    player2.movingDown = true;
	    player2.movingRight = false;
	    player2.movingLeft = false;

	    p2direction = {
	      x: 0,
	      y: 1
	    };
	  }
	});

	function borderCheck() {
	  //look for collision on border
	  if (player1.x === canvas.width - 10 || player1.x === 0 || player1.y === canvas.height - 10 || player1.y === 0 || player2.x === canvas.width - 10 || player2.x === 0 || player2.y === canvas.height - 10 || player2.y === 0) {

	    roundEnd();
	  }
	}

	function trailCheck() {
	  //look for collision w/ trail
	}

	function roundEnd() {
	  //stop movement of both players
	  //set direction.x and direction.y to 0

	  p1direction = {
	    x: 0,
	    y: 0
	  };
	  p2direction = {
	    x: 0,
	    y: 0
	  };
	}

	function displayRoundWinner() {}

	function newRound() {
	  //put players back in initial position
	}

	function startCountdown() {}
	//start countdown


	// if (blocks[i].x <= canvas.width - 10) {
	//     blocks[i].moveX( direction )}
	//     if (blocks[2].y <= canvas.height - 10){
	//       blocks[2].moveY( direction)
	//     }if (blocks[i].x === canvas.width - 10) {
	//     blocks[i].changeXDirection();
	//   } if (blocks[i].x === 0) {
	//     blocks[i].changeXDirection();
	//   } if (blocks[2].y === canvas.height - 10) {
	//     blocks[2].changeYDirection();
	//   } if (blocks[2].y === 0) {
	//     blocks[2].changeYDirection();
	// }


	requestAnimationFrame(gameLoop);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	class Player {
	  constructor(x, y, width, height, color, directionRight, directionLeft) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	    this.movingRight = directionRight;
	    this.movingLeft = directionLeft;
	    this.movingUp = false;
	    this.movingDown = false;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  moveUp(direction) {
	    if (this.movingUp === true) {
	      this.y -= direction.y;
	    }
	  }

	  moveDown(direction) {
	    if (this.movingDown === true) {
	      this.y += direction.y;
	    }
	  }

	  moveLeft(direction) {
	    if (this.movingLeft === true) {
	      this.x -= direction.x;
	    }
	  }

	  moveRight(direction) {
	    if (this.movingRight === true) {
	      this.x += direction.x;
	    }
	  }
	}

	module.exports = Player;

/***/ })
/******/ ]);