"use strict"

let again = "y";

do {
    const miles = parseInt(prompt("Enter miles driven"));
    const gallons = parseInt(prompt("Enter gallons of gas used"));

    if (miles > 0 && gallons > 0) {

        const mpg = parseFloat(miles / gallons);
        const html = `<p>${miles} miles on ${gallons}
        gallons = ${mpg.toFixed(2)} MPG </p>`;

        document.write(html);
    }
    else {

        alert("One or both entries are invalid");
    }


    again = prompt("repeat entries (y/n)", "y");
}
while (again == "y");