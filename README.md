# Project1
Create a flappy bird style game that can then be multiplayer

setup:
create a ground, sky, a flying object and obstacles 
-This is done in CS

flying object will then fly through the map and try to avoid the tunnels
-This is done using .getelement by Id or add divs for the tunnels 
-move the tunnels  forward towards the left of the screen and make them appear at random heights (using math random)
-create the tunnels and makee them move across the pixels 
-flyig object is being pushed down by gravity (subtract the amount of pixels unless the space bar is clicked then move up by adding px)

create a jump function
-this function will allow for the sace bar to be used to move the object against gravity

-create a board telling you how many lives you have left

-create a landing page for the start of the game

-try to give sound to the game

-once game is over, give an option for reset button



Issues I ran into:
- Generating random pole heights:
Originally I was going to use some login from (logic 01) to generate a new pole method. It was not working with my code as his was written differently. I then realized through our class notes for scope, it had to be done within the function and I had to use the correct px dimensions to get it to work.

- Pole timing interval:
I had a similar issue here. The timing interval was not getting called, I could not figure out why. Once I reffered back to my notes and in comparison to the bird timer, I realized it was being called within the function rahter than outside the function & if statment. I was also missing the function and only thought I needed to insert the milliseconds.

- Generating new Poles every 3.1 seconds:
contrary to what I believed before (in pole timing interval), the from from left var needed to be within the scope of the function for it to work. 

- Stop making new poles when game is over:
the game was creating poles when the game was already over, wrapped the add element pole life in an if statment. Made a conditional, If the bird has hit the ground or the pole then the game is over stop generating new poles

- Bird/Pole collision:
I am trying to use the same logic for bird and pole collision as bird and ground collision but it was not working. ended up adding an if statment that will calulate the placment of the pole vs my bird. I was having trouble with this and was about to give up. The game was ending every time it flew over a pole. I messed around with the pixel numbers  and got it to somewhere reasonable





site sources:
- Key up events: https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
- Key Codes: https://keycode.info/
- Generate random obstacle height logic 01: 
https://github.com/Beat0154/FlappyBird/blob/master/script.js
- generate random obstacle hight logic 02:
https://stackoverflow.com/questions/54263302/how-do-i-make-random-generating-objects-come-on-my-screen
**// used a little bit of both (01 and 02) to make it work with my code**

- Timing functions: https://tmdarneille.gitbook.io/seirfx/javascript/01functions/03timing-functions
- CSS Transform property: https://www.w3schools.com/cssref/css3_pr_transform.asp
- Gap between pole logic: https://www.w3schools.com/JSREF/prop_style_columngap.asp
