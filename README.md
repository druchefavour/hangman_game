# Hangman Game Application

## Overview

In this project, a Hangman game is create. The app runs in the browser, and feature dynamically updated HTML powered by your JavaScript code.

##Procedure

* Create a new GitHub repo called hangman_game, then clone it to the computer.

* Inside the local hangman_game folder, create the following: ```index.html```, ```composer.json``` and ```index.php```.

* Fill in the appropriate content in the ```composer.json``` and ```index.php``` files to be able to deploy the game to Heroku when it is finished.

* While still in the hangman_game directory, make a folder called assets.

* Navigate into the assets folder, then make three additional folders: ```javascript```, ```css``` and ```images```.

* In the javascript folder, make a file called ```game.js```.

* In the css folder, make a file called ```style.css```.

* Also in the css folder, make a file called ```reset.css```. Paste into it the code from the [Meyerweb reset stylesheet](http://cssreset.com/scripts/eric-meyer-reset-css/).
* In the images folder, save the images used in the app.

* Push the above changes to GitHub.

* Push the game to Heroku using the following:
  * heroku login
  * heroku create
  * git push heroku master

Hangman

Watch the demo.

Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

Use key events to listen for the letters that your players will type.

Display the following on the page:

Press any key to get started!

Wins: (# of times user guessed the word correctly).

If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

As the user guesses the correct letters, reveal them: m a d o _ _ a.

Number of Guesses Remaining: (# of guesses remaining for the user).

Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

After the user wins/loses the game should automatically choose another word and make the user play it.
Hangman Game Bonuses

Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.
HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and it's properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.
Remember: global variables, then objects, then calls.
Definitely talk with a TA or your instructor if you get tripped up during this challenge.
A Few Tips

IMPORTANT: Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. Always code one piece at a time!
Pseudocode your program and break the app down into tiny, manageable fragments -- this'll make the whole coding process much less frustrating and a veritable Mach number faster. Otherwise you'll be chipping away at a giant chunk of abstraction for way too many hours.
This is a common workflow for programmers of all levels. Best start adapting this into your development routine now before your future projects become more complex.
Remember:
Split the whole program into many distinct, pseudocoded problems.
Focus on one of the smaller problems and solve it.
Only when you solve one problem should you then move onto your next problem.
When you encounter bugs (and we all do), console.log will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman switch gears to work on the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We'll gladly help!

Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.

That said, coding a functional app that also looks pretty would be impressive.
Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.

Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.