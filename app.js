document.addEventListener('DOMContentLoaded' , () => {
    const gameWindow = document.querySelector('.game-window')
    const terrain = document.querySelector('.terrain')
    const bird = document.querySelector('.bird')
    const playerDisplay = document.querySelector('.score')
    // set up the positioning of the bird once the page is loaded
    
    let birdFromLeft = 290 //I want the bird to start in the middle of the window, if the W of my window is 700 -60 ps for the bird = 290 for middle
    let birdFromBottom = 100 //bird starts floating 100 px from the bottom
    let downForce = 2
    let isGameOver = false
    let gap = 440
    let counter = 0
    // let randomPoleHeight = Math.random() * 60  /* every time the page is reloaded a new obstacle is generated at a random height */
    // let poleFromLeft = 700 //start making poles at the farthest end of the sky
    // let poleFromBottom = randomPoleHeight // so it appears to be floating off the ground
    //adding start game styling so bird will start in a specific position on the window
    function startGame() {
        birdFromBottom -= downForce // subtracts 2 px each time the space bar is not clicked, gives the effect of falling bird
        bird.style.bottom = birdFromBottom + 'px' 
        bird.style.left = birdFromLeft + 'px'
        
        
        }
            let birdTimer = setInterval(startGame, 21) //everything above to happen every 19 ms

        function spaceBar(e) {           //insuring only the spacebar can be used
            if(e.keyCode === 32) {
                float()
            }
        }
        
        
        function float() {       //Function that is moving the bird up and forward when space bar is clicked
            if(birdFromBottom<420) birdFromBottom += 50 //as long as bird is under 480 px we can continue jumping this is to stop bird from leaving window
            bird.style.bottom = birdFromBottom + 'px' //adds px everytime the float function is invoked
            console.log(birdFromBottom)
            
        }
    
        document.addEventListener('keyup', spaceBar)

        function createPole() {
            //let poleFromLeft = 700 //messing around with Scope
            let poleFromLeft = 700 //start making poles at the farthest end of the sky
            let randomPoleHeight = Math.random() * 60  //creates a random pole that is with the Width of 60 (because 60 is what i have as the width in css)
            //let poleFromLeft = 700 //start making poles at the farthest end of the sky
            let poleFromBottom = randomPoleHeight // so it appears to be floating off the ground
            //const abovePole = document.createElement('div')
            const pole = document.createElement('div') /*  creating a div */
            const abovePole = document.createElement('div')
            if(!isGameOver){
            pole.classList.add('pole') 
            abovePole.classList.add('abovePole')
            counter++;
            playerDisplay.innerText = 'Score:' + counter
            
            
            }
            gameWindow.appendChild(pole) // creating a div called pole and appending it to our game window container
            gameWindow.appendChild(abovePole)
            pole.style.left = poleFromLeft + 'px'   // move closer to left 
            abovePole.style.left = poleFromLeft + 'px'
            pole.style.bottom = poleFromBottom + 'px'
            abovePole.style.bottom = poleFromBottom + gap + 'px'

            function poleRoll() { //each time move obstacle is invoked the obstacle will move 2PX to the left
                poleFromLeft -=2
                pole.style.left = poleFromLeft + 'px'
                abovePole.style.left = poleFromLeft + 'px'
                
    
                if (poleFromLeft === -4) {  //removes pole when the pole hits end of window
                    clearInterval(poleTimer)
                    gameWindow.removeChild(pole)
                    gameWindow.removeChild(abovePole)
                    
                } // if poles are between 200 and 280 px position and bird is at 194 < pole 194  or bird 194 > 341
                if(
                    poleFromLeft > 200 && poleFromLeft < 280 && birdFromLeft === 290 && (birdFromBottom < poleFromBottom + 153 || birdFromBottom > poleFromBottom + gap - 202) || birdFromBottom === 0) {  
                        // if the bird hits the terrain or the poles then invoke youLost, comparing pixels to decide when collision happens
                    youLost()
                    clearInterval(poleTimer)
                }
                console.log(counter)
                
                
            }
              let poleTimer = setInterval(poleRoll, 21) //moves the obstacle every 19 ms as the object is flying closer to it
              if (!isGameOver) setTimeout(createPole, 3100) //if game over is false then continue making new poles every 3.1 milliseconds



        }   
        createPole()

        function youLost (){
            clearInterval(birdTimer)
            isGameOver = true
            document.removeEventListener('keyup', spaceBar)
        }

})