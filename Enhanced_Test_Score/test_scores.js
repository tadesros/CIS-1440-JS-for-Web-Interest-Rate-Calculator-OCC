"use strict"

//Declare and initialize an array to hold test scores from user
const scores = [];

//use do-while loop to get scores from the user and store in array
//initialize score to zero
let score = 0;
//Initialize highest score
let highestScore = 0;

do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        //scores.length actually index of next element. 
        //Arrays start indexing at zero
        scores[scores.length] = score;
    }
    else if (score != -1) {
        alert("Score must by a valid number from 0 through 100");
    }
}
while (score != -1);


if (scores.length > 0) {
    //use a for-in loop to add each score to total and dislay it
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //Calculate and display average score
    const average = parseInt(total / scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}

for (let val of scores) {
    if (val > highestScore) {
        highestScore = val;
    }

}
document.write(`<p>Highest score is ${highestScore}</p>`);