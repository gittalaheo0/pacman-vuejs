const game = new Vue({
	el: "#app",
	data: { 
		pacmanSetinterval: null,
		pacmanKilledModeSettimeout: null,
		enemySetinterval: null,
		gameIsRunning: false,
		pacmanDie: false,
		score: 0,
		ctrl: {
			currentMap: [
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
			],
			map: {
				show: false,
				random: true,
				name: '',
				item: [
					{
						name: "blank",
						detail: [
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						],
					},
					{
						name: "map2",
						detail: [
						 [0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,2	,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						],
					},
					{
						name: "map3",
						detail: [
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
						],
					},
				],
			},
			difficulity: "easy", //hard, normal

		},
		pacman: {
			x: null,
			y: null,
			mode: "",
			trend: null,
			killedMode: false,
		},
		enemy:[  // 4 enemy when start
			{x: null, y: null},
			{x: null, y: null},
			{x: null, y: null},
			{x: null, y: null},
		],
		timing: 280, // speed game run (milisecond)
		timeCounter: 0, // speed game run (milisecond)

	},
	created: function () {
	},
	methods:{
		// common function for all object
		gameInit(){
			this.createWallAndFood()    // wall and food created
			this.createPacmanDistance()   // pacman created
			this.createEnemyDistance()    // enemy created

			// show play ground
			this.gameIsRunning = true;

			// pacman and enemy start running
			this.enemyMove();
			this.pacmanMove();
		},
		// change map
		changeMap(item){
			this.ctrl.currentMap = item.detail;
			this.ctrl.map.name = item.name;
			this.ctrl.map.random = false;
			this.ctrl.map.show = false
		},

		// playground function
		createWallAndFood(){
			// setting difficulity
			// create map if random map selected
			let hardIndex = 0.8; // closer to 0 , create more wall
			// change hardIndex
			switch (this.ctrl.difficulity) {
				case "normal":
					hardIndex = 0.75;
					this.timing = 200; // decrease the time run
					break;
				case "hard":
					hardIndex = 0.7
					this.timing = 100; // decrease the time run
					break;
			}
			if(this.ctrl.map.random){
				// random food in map
				this.ctrl.currentMap.forEach((row,i)=>{
					row.forEach((itemInRow,j)=>{
						// setting wall by random box to 2:wall or 0:normal food or 3:super food
						let randomTypeFood = Math.random() > 0.97 ? 3 : 1;
						this.ctrl.currentMap[i][j] = Math.random() > hardIndex ? 2 : randomTypeFood;
					})
				})
			}else{
				// random food in map
				this.ctrl.currentMap.forEach((row,i)=>{
					row.forEach((itemInRow,j)=>{
						// setting wall by random box to 2:wall or 0:normal food or 3:super food
						if(itemInRow!=2){ // except wall
							let randomTypeFood = Math.random() > 0.97 ? 3 : 1;
							this.ctrl.currentMap[i][j] = randomTypeFood							
						}
					})
				})
			}
		},

		// pacman function
		createPacmanDistance(){
			this.pacman.x = (this.ctrl.currentMap[0].length-1)%2==0 ? (this.ctrl.currentMap[0].length-1)/2 : (this.ctrl.currentMap[0].length)/2;
			this.pacman.y = (this.ctrl.currentMap.length-1)%2==0 ? (this.ctrl.currentMap.length-1)/2 : (this.ctrl.currentMap.length)/2;
			//clear wall and food in pacman initial distance
			this.ctrl.currentMap[this.pacman.y][this.pacman.x] = 0;
		},
		pacmanMove(){
			// setTimeout to run after trend
			this.pacmanSetinterval = setInterval(function(){
				switch (this.pacman.trend) {
					case null:
						break;
					case "up":
						if(this.pacman.y==0 && this.ctrl.currentMap[this.ctrl.currentMap.length-1][this.pacman.x]==2){ // if pacman hit the corner have the wall
							this.pacman.trend = null // pacman stop
						}else if(this.pacman.y==0 && this.ctrl.currentMap[this.ctrl.currentMap.length-1][this.pacman.x]!=2){ // if pacman hit the corner with no wall
							this.pacman.y = this.ctrl.currentMap.length-1;
						}else if(this.ctrl.currentMap[this.pacman.y-1][this.pacman.x]==2){ // if pacman hit the wall
							this.pacman.trend = null // pacman stop
						}else{ // if pacman dont hit anything
							this.pacman.y--
						}
						break;
					case "down":
						if(this.pacman.y==this.ctrl.currentMap.length-1 && this.ctrl.currentMap[0][this.pacman.x]==2){ // if pacman hit the corner have the wall
							this.pacman.trend = null // pacman stop
						}else if(this.pacman.y==this.ctrl.currentMap.length-1 && this.ctrl.currentMap[0][this.pacman.x]!=2){ // if pacman hit the corner with no wall
							this.pacman.y = 0;
						}else if(this.ctrl.currentMap[this.pacman.y+1][this.pacman.x]==2){ // if pacman hit the wall
							this.pacman.trend = null // pacman stop
						}else{ // if pacman dont hit anything
							this.pacman.y++
						}
						break;
					case "right":
						if(this.pacman.x==this.ctrl.currentMap[0].length-1 && this.ctrl.currentMap[this.pacman.y][0]==2){ // if pacman hit the corner have the wall
							this.pacman.trend = null // pacman stop
						}else if(this.pacman.x==this.ctrl.currentMap[0].length-1 && this.ctrl.currentMap[this.pacman.y][this.ctrl.currentMap[0].length-1]!=2){ // if pacman hit the corner with no wall
							this.pacman.x = 0;
						}else if(this.ctrl.currentMap[this.pacman.y][this.pacman.x+1]==2){ // if pacman hit the wall
							this.pacman.trend = null // pacman stop
						}else{ // if pacman dont hit anything
							this.pacman.x++
						}
						break;
					case "left":
						if(this.pacman.x==0 && this.ctrl.currentMap[this.pacman.y][this.ctrl.currentMap[0].length-1]==2){ // if pacman hit the corner have the wall
							this.pacman.trend = null // pacman stop
						}else if(this.pacman.x==0 && this.ctrl.currentMap[this.pacman.y][this.ctrl.currentMap[0].length-1]!=2){ // if pacman hit the corner with no wall
							this.pacman.x = this.ctrl.currentMap[0].length-1;
						}else if(this.ctrl.currentMap[this.pacman.y][this.pacman.x-1]==2){ // if pacman hit the wall
							this.pacman.trend = null // pacman stop
						}else{ // if pacman dont hit anything
							this.pacman.x--
						}
						break;
				};
				// console.log(this.pacman.x, this.pacman.y);
				this.pacmanEat() // eat food
				this.timeCounter+=this.timing;
			}.bind(this), this.timing)
		},
		pacmanEat(){
			if(this.ctrl.currentMap[this.pacman.y][this.pacman.x]==1){
				this.score++;
				console.log(this.score);
			}
			if(this.ctrl.currentMap[this.pacman.y][this.pacman.x]==3){
				this.score++;
				// set time for killed mode
				this.activeKilledMode()
				console.log(this.score);
			}
			this.ctrl.currentMap[this.pacman.y][this.pacman.x]=0; // clear food
		},
		activeKilledMode(){
			if(this.pacman.killedMode){ // if kiled mode is activating
				clearTimeout(this.pacmanKilledModeSettimeout)
				this.pacmanKilledModeSetinterval = setTimeout(function(){
					this.pacman.killedMode = false
				}.bind(this), this.timing+6000)				
			}else{  // if kiled mode is not activating
				this.pacman.killedMode = true;
				this.pacmanKilledModeSettimeout = setTimeout(function(){
					this.pacman.killedMode = false
				}.bind(this), this.timing+6000)				
			}
		},

		// enemy function
		createEnemyDistance(){
			this.enemy.forEach(function(ghost) {
				// random enemy distance
				ghost.x = Math.round(Math.random()*this.ctrl.currentMap[0].length-2)
				ghost.y = Math.round(Math.random()*this.ctrl.currentMap.length-2)
				// clear wall
				this.ctrl.currentMap[ghost.y][ghost.x] = 1
			}.bind(this));

		},
		createNewEnemy(){
			let newEnemy = {x: null, y: null};
			//random location
			newEnemy.x = Math.round(Math.random()*this.ctrl.currentMap[0].length-2);
			newEnemy.y = Math.round(Math.random()*this.ctrl.currentMap.length-2);
			// clear wall
			this.ctrl.currentMap[newEnemy.y][newEnemy.x] = 0;
			this.enemy.push(newEnemy)
		},
		showEnemy(j,i){
			return this.enemy.find(e=>{return (e.x==j && e.y==i)})
		},
		enemyMove(){
			// setTimeout to run after trend
			this.enemySetinterval = setInterval(function(){
				this.enemy.forEach(function(item) {
					let trend = Math.ceil(Math.random()*4);   // rnadom 1:up 2:down 3:left 4:right
					// check wall and corner before ghost move
					// ghost move
					this.activeEnemyMove(item, trend)
					// check impact with pacman
					this.enemyImpactChecking(item)
				}.bind(this))				
			}.bind(this), this.timing)
		},
		activeEnemyMove(enemy, trend){
			switch (trend) {
				case 1: //up
					if(enemy.y==0 && this.ctrl.currentMap[this.ctrl.currentMap.length-1][enemy.x]==2){ // if ghost hit the corner have the wall
						return
					}else if(enemy.y==0 && this.ctrl.currentMap[this.ctrl.currentMap.length-1][enemy.x]!=2){ // if ghost hit the corner with no wall
						enemy.y = this.ctrl.currentMap.length-1;
					}else if(this.ctrl.currentMap[enemy.y-1][enemy.x]==2){ // if ghost hit the wall
						return // ghost stop
					}else{ // if enemy dont hit anything
						enemy.y--
					}
					break;
				case 2: // down
					if(enemy.y==this.ctrl.currentMap.length-1 && this.ctrl.currentMap[0][enemy.x]==2){ // if ghost hit the corner have the wall
						return
					}else if(enemy.y==this.ctrl.currentMap.length-1 && this.ctrl.currentMap[0][enemy.x]!=2){ // if ghost hit the corner with no wall
						enemy.y = 0;
					}else if(this.ctrl.currentMap[enemy.y+1][enemy.x]==2){ // if ghost hit the wall
						return // ghost stop
					}else{ // if enemy dont hit anything
						enemy.y++
					}
					break;
				case 3: //left
					if(enemy.x==this.ctrl.currentMap[0].length-1 && this.ctrl.currentMap[enemy.y][0]==2){ // if ghost hit the corner have the wall
						return
					}else if(enemy.x==this.ctrl.currentMap[0].length-1 && this.ctrl.currentMap[enemy.y][0]!=2){ // if ghost hit the corner with no wall
						enemy.x = 0;
					}else if(this.ctrl.currentMap[enemy.y][enemy.x+1]==2){ // if ghost hit the wall
						return // ghost stop
					}else{ // if enemy dont hit anything
						enemy.x++
					}
					break;
				case 4: //right
					if(enemy.x==0 && this.ctrl.currentMap[enemy.y][this.ctrl.currentMap[0].length-1]==2){ // if ghost hit the corner have the wall
						return
					}else if(enemy.x==0 && this.ctrl.currentMap[enemy.y][this.ctrl.currentMap[0].length-1]!=2){ // if ghost hit the corner with no wall
						enemy.x = 0;
					}else if(this.ctrl.currentMap[enemy.y][enemy.x-1]==2){ // if ghost hit the wall
						return // ghost stop
					}else{ // if enemy dont hit anything
						enemy.x--
					}
					break;
			}
		},
		enemyImpactChecking(item){
			// if distance bettwen pacman and enemy equal 0
			if((item.x==this.pacman.x && item.y==this.pacman.y)||(item.x==this.pacman.x+1 && item.y==this.pacman.y)||(item.x==this.pacman.x-1 && item.y==this.pacman.y)||(item.x==this.pacman.x && item.y==this.pacman.y+1)||(item.x==this.pacman.x && item.y==this.pacman.y-1)){ //pacman hit enemy
				if(this.pacman.killedMode){ // if pacman is having killed mode
					this.deleteEnemy(item)
				}else{  // if pacman have no killed mode
					this.pacmanDie = true
				}
			}
		},
		deleteEnemy(item){
			let deleteEnemy = this.enemy.find(e=>{return (e.x==item.x&&e.y==item.y)})
			let newEnemyList = [];
			this.enemy.forEach(function(e){
				if(deleteEnemy!=e){
					newEnemyList.push(e)
				}
			})
			this.enemy = newEnemyList;
		},

		// controller option
		changeDifficulity(){
			switch (this.ctrl.difficulity) {
				case "easy":
					this.ctrl.difficulity = "normal"
					break;
				case "normal":
					this.ctrl.difficulity = "hard"
					break;
				case "hard":
					this.ctrl.difficulity = "easy"
					break;
			}
		},

		// css for objects
		randomColor(){
			return `rgba(${Math.round(Math.random()*225)},${Math.round(Math.random()*225)},${Math.round(Math.random()*225)},${Math.random()})`
		},
	},

	watch:{
		pacmanDie(){
			if(this.pacmanDie){
				clearInterval(this.pacmanSetinterval)
				clearInterval(this.enemySetinterval);
			}
		},
		gameIsRunning(){
			if(!this.gameIsRunning){
				// reset all
				location.reload();
			}
		},
		score(){
			// score divide enough 25 >> create new enemy
			if(this.score%25==0){
				this.createNewEnemy()
				this.score+=1
			}
		},
	},
	directives: {
	  pacman: {
	    inserted: function (el) {
	    	// for(let e of el.children[0].children){e.style.animationDuration = this.timing*0.001 + "s"}
	    	
	    	console.log(el.children[0].children);
	    	if(game.pacman.trend == "up"){
	      		el.style.transform = "rotate(90deg)"
	    	}else if(game.pacman.trend == "right"){
	      		el.style.transform = "rotate(180deg)"
	    	}else if(game.pacman.trend == "down"){
	      		el.style.transform = "rotate(-90deg)"
	    	}
	    }
	  }
	}
})

document.onkeyup = function (event) {
	switch (event.keyCode) {
		case 37:
			game.pacman.trend = "left"
		break;
		case 38:
			game.pacman.trend = "up"
		break;
		case 39:
			game.pacman.trend = "right"
		break;
		case 40:
			game.pacman.trend = "down"
		break;
	}
};