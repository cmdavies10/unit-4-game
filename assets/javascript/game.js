$(document).ready(function () {
    var total = 0;
    var crystalOne = Math.floor((Math.random() * 12) + 1);
    var crystalTwo = Math.floor((Math.random() * 12) + 1);
    var crystalThree = Math.floor((Math.random() * 12) + 1);
    var crystalFour = Math.floor((Math.random() * 12) + 1);
    var computerGuess = Math.floor((Math.random() * 100) + 19);
    var wins = 0;
    var losses = 0;

    // generate a beginning value
    $("#random-number").text(computerGuess);
    console.log(computerGuess);

    $("#crystal1").on("click", function () {
        total = total + crystalOne
        $("#total-score-text").text(total);
    });

    // $(".btn").on("click", function () {
    //     var userGuess = Math.floor((Math.random() * 12) + 1);
    //     console.log(userGuess);
    //     total = total + userGuess;
    //     console.log(total);
    // })
    



})