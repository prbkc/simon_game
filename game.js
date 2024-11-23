var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 1;


function playSound(name) {
    $('#' + name).fadeOut(100).fadeIn(100);
    var colorSound = new Audio('sounds/' + name + '.mp3');
    colorSound.play();
}


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $('h1').text('Level: ' + level);
    // level++;
    userClickedPattern = [];


}

$(document).keydown(function () {
    nextSequence();

});

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}


// check which button is pressed
$('.btn').click(function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    if (userClickedPattern[userClickedPattern.length - 1] != gamePattern[userClickedPattern.length - 1]) {
        $('body').addClass('game-over');

        var wrongSound = new Audio('sounds/wrong.mp3');
        wrongSound.play();

        var finalScore = level - 1;

        $('h1').text("Game Over!");

        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 500);

        setTimeout(function () {
            $('h1').text('Score: ' + (finalScore));
        }, 1000);

       

        setTimeout(function () {
            $('h1').text('Press A Key to Start');
        }, 2000);

        level = 1;
        gamePattern = [];
    }

    if (userClickedPattern.toString() === gamePattern.toString()) {
        setTimeout(function () {
            level++;
            nextSequence();

        }, 1200);

    }
}
);



