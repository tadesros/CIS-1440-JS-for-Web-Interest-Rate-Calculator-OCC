"use strict"

let again = "y";

do {

    //Get investment
    let investment = 0;
    do {
        investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 100000));
    }
    while (isNaN(investment) || investment <= 0);

    //Get Rate
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while (isNaN(rate) || rate <= 0 || rate > 15);

    //Get years
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while (isNaN(years) || years <= 0);

    document.write(`<h4>Investment amount = ${investment}  Interest rate = ${rate}  Years= ${years} </h4>`);

    //Calc future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
        document.write(`<p>Year = ${i} Interest = ${rate} Value = ${futureValue.toFixed(2)}</p>`);
    }

    again = prompt("repeat entries (y/n)", "y");

}
while (again == "y");


