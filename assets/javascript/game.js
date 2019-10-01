$(document).ready(function () {
    var total = 0;
    var crystalOne = Math.floor((Math.random() * 12) + 1);
    var crystalTwo = Math.floor((Math.random() * 12) + 1);
    var crystalThree = Math.floor((Math.random() * 12) + 1);
    var crystalFour = Math.floor((Math.random() * 12) + 1);
    var computerGuess = Math.floor((Math.random() * 100) + 19);
    var wins = 0;
    var losses = 0;

    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
    console.log("=======");
    console.log(total);

    // generate a beginning value
    $("#random-number").text(computerGuess);
    console.log(computerGuess);

    // update total scores based on button clicks
    $("#crystal1").on("click", function () {
        total = total + crystalOne
        $("#total-score-text").text(total);
    });

    $("#crystal2").on("click", function () {
        total = total + crystalTwo
        $("#total-score-text").text(total);
    });

    $("#crystal3").on("click", function () {
        total = total + crystalThree
        $("#total-score-text").text(total);
    });

    $("#crystal4").on("click", function () {
        total = total + crystalFour
        $("#total-score-text").text(total);
    });

    // reset function
    


    // decide and display wins & losses
    $(".btn").on("click", function () {        
        if (total === computerGuess) {
            wins++;
            $("#wins-text").text("Wins: " + wins);
        } else if (total > computerGuess) {
            losses++;
            $("#losses-text").text("Losses: " + losses);
        }
    });
})