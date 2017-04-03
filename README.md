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

## Theme
The theme chosen for the game is Rio 2014 (World Soccer Championship).

## Functionalties
* Use key events to listen for the letters that the players will type.

* Display the following on the page:

  * Press any key to get started!

  * Wins: (# of times user guessed the word correctly).

  * If the word is Germany, display it like this when the game starts: _ _ _ _ _ _ _.

  * As the user guesses the correct letters, reveal them: G e r m _ _ y.

  * Number of Guesses Remaining: (# of guesses remaining for the user).

  * Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

  * After the user wins/loses the game should automatically choose another word and make the user play it.

  * Play a sound or song when the user guesses their word correctly. The song chosen is the Rio 2014 theme song.

  * Write some stylish CSS rules to make a design that fits the game's theme.

  * Organize the game code as an object, except for the key events to get the letter guessed. 

  * Save the whole game and it's properties in an object.

  * Save any of the game's functions as methods, and call them underneath the object declaration using event listeners.

  * Place your global variables and functions above your object.

  * The game code is done one piece at a time!

  * Pseudocode of the program is written as the app is broken down into tiny, manageable fragments -- this makes the whole coding process much less frustrating and a veritable Mach number faster. 
