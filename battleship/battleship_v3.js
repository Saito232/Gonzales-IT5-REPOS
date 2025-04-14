// Generate a random starting location for a 3-cell ship (within a 0-6 grid)
var randomLoc = Math.floor(Math.random() * 5); // Ensures the ship fits (max start at index 4)
var shipLocation = [randomLoc, randomLoc + 1, randomLoc + 2]; // The ship occupies 3 consecutive cells

let guess;
let hits = 0;       // Tracks successful hits
let guesses = 0;    // Tracks total user attempts
let isSunk = false; // Game continues until the ship is sunk

// Main game loop: runs until the ship is sunk or the user cancels
while (isSunk == false) {
  // Prompt the player to enter a guess
  guess = prompt('Ready!, Aim!, Fire! 🎯 (Enter Number 0-6)');

  // Handle cancel input (user exits the game)
  if (guess == null) {
    alert('Next Time I guess.');
    break;
  }

  // Convert input string to a number
  guess = parseInt(guess, 10);

  // Validate input: ensure it's a number between 0 and 6
  if (isNaN(guess) || guess < 0 || guess > 6) {
    alert('Please Enter a Valid Number (0 - 6!)');
    continue; // Ask again if input is invalid
  }

  guesses++; // Count every valid attempt

  // Check if the guess hits part of the ship
  const hitIndex = shipLocation.indexOf(guess);

  if (hitIndex !== -1) {
    alert('Hit!');
    shipLocation.splice(hitIndex, 1); // Remove the hit cell from the ship's location
    hits++;

    // Check if all ship parts have been hit
    if (shipLocation.length === 0) {
      isSunk = true;
      alert('Ship is successfully sunk');
    }
  } else {
    alert('Miss!');
  }
}

// Calculate and display game statistics after the game ends
var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats =
  'You took ' +
  guesses +
  ' guesses to sink the battleship! ' +
  '\n' +
  'Accuracy: ' +
  accuracy +
  '%';

alert(stats);
