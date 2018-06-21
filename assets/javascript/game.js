var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 12;
var guessCount = [];
var setCompPick = "";

document.onkeyup = function(event){
    var userPick = String.fromCharCode(event.keyCode).toLowerCase();

    if (guesses == 12){
        var compPick = compChoices[Math.floor(Math.random() * compChoices.length)];
        setCompPick = compPick;
        console.log(compPick);
    }


    var userCheck = guessCount.indexOf(userPick);

    if(userCheck < 0){
        if (userPick == setCompPick){

            wins++;
            guesses = 12;
            guessCount= [];
        } else{
            guessCount.push(userPick);
            guesses--;
        }
    }

    if (guesses == 0){
        losses++;
        guesses = 12;
        guessCount = [];
    }

    var index = "<p> What letter am I thinking of </p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Remaining: " + guesses + "</p>" +
    "<p> What you have guessed thus far: " + guessCount + "</p>";

    document.querySelector('#gameplay').innerHTML = index;
}