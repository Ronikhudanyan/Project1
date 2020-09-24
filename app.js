document.addEventListener('DOMContentLoaded' , () => {
    const gameWindow = document.querySelector('.game-window')
    const terrain= document.querySelector('.terrain')
    const bird = document.querySelector('.bird')

    // set up the positioning of the bird once the page is loaded
    let downForce = 2
    let birdFromLeft = 290 //I want the bird to start in the middle of the window, if the W of my window is 700 -60 ps for the bird = 290 for middle
    let birdFromBottom = 100 //bird starts floating 100 px from the bottom
    let randomPoleHeight = Math.random() * 60  /* every time the page is reloaded a new obstacle is generated at a random height */
    let poleFromLeft = 700 //start making poles at the farthest end of the sky
    let poleFromBottom = randomPoleHeight // so it appears to be floating off the ground
    //adding start game styling so bird will start in a specific position on the window
    function startGame() {
        birdFromBottom -= downForce // subtracts 2 px each time the space bar is not clicked, gives the effect of falling bird
        bird.style.left = birdFromLeft + 'px'
        bird.style.bottom = birdFromBottom + 'px' 
        
    
        }
        let birdTimer = setInterval(startGame, 19) //everything above to happen every 19 ms

        function spaceBar(e) {           //insuring only the spacebar can be used
            if(e.keyCode === 32) {
                float()
            }
        }
        
        
        function float() {       //Function that is moving the bird up and forward when space bar is clicked
            if(birdFromBottom<420)birdFromBottom += 50 //as long as bird is under 480 px we can continue jumping this is to stop bird from leaving window
            bird.style.bottom = birdFromBottom + 'px' //adds px everytime the float function is invoked
            
        }
    
        document.addEventListener('keyup', spaceBar)

        function createPole() {
            const pole = document.createElement('div') /*  creating a div */
            pole.classList.add('pole') 
            gameWindow.appendChild(pole) // creating a div called pole and appending it to our game window container
            pole.style.left = poleFromLeft + 'px'   // move closer to left 
            pole.style.bottom = poleFromBottom + 'px'

            function poleRoll() { //each time move obstacle is invoked the obstacle will move 2PX to the left
                poleFromLeft -=2
                pole.style.left = poleFromLeft + 'px'
                
    
                if (poleFromLeft === -60) {
                    clearInterval(poleTimer)
                    gameWindow.removeChild(pole)
                    
                }
                
                
            }
              let poleTimer = setInterval(poleRoll, 19) //moves the obstacle every 19 ms as the object is flying closer to it
              setTimeout(createPole, 3100) /* every 3.1 seconds when the obstacle has moved off the board, generate a new one */







        }   
        createPole()


})