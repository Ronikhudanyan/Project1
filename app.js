document.addEventListener('DOMContentLoaded' , () => {
    const gameWindow = document.querySelector('.game-window')
    const terrain= document.querySelector('.terrain')
    const bird = document.querySelector('.bird')

    // set up the positioning of the bird once the page is loaded
    let downForce = 2
    let birdFromLeft = 290 //I want the bird to start in the middle of the window, if the W of my window is 700 -60 ps for the bird = 290 for middle
    let birdFromBottom = 100 //bird starts floating 100 px from the bottom

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






})   