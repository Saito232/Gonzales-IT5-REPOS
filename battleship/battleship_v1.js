var location3 = 4;
var location4 = 5;
var location5 = 6;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready!, Aim! Fire! (Enter Number 0-6");

    if (guess < 0 || guess > 6) {
    alert("Please Enter a Valid Cell Number!");
    }else{
        guesses = guesses + 1;

        if (guess == location3 || guess == location4 || guess == location5){
            hits = hits + 1;
            alert("Hit!");

                if (hits == 3) {
                    isSunk = true;
                    alert("You Sunk my Battleship");
                }
        }else{
            alert("Miss!");
        }
    }
}

var stats = "You Sank my battleship at: " + guesses + "guesses" + "And your accuracy is : " + (3/guesses);

alert(stats);