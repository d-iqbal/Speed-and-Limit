/// Test Code:
console.log("A grade of 99% is a letter grade of " + letterGrade(99) + ".");
console.log("A grade of 75% is a letter grade of " + letterGrade(75) + ".");
console.log("A grade of 40% is a letter grade of " + letterGrade(40) + ".");

/// Test Code Output:
"A grade of 99% is a letter grade of A."
"A grade of 75% is a letter grade of B."
"A grade of 40% is a letter grade of F."

// Define function letterGrade
function letterGrade(percentGrade) {
    console.log(percentGrade);
    if (percentGrade >= 80) {
        return "A";
    } else if (percentGrade >= 70) {
        return "B";
    } else if (percentGrade >= 60) {
        return "C";
    } else if (percentGrade >= 50) {
        return "D";
    } else {
        return "F";
    }
}

////////////////////////////////////////////////////////////////////////////////////

/// Test Code:
console.log("A temperature of 32 Fahrenheit is " + fahrToCels(32) + " Celsius.");
console.log("A temperature of 68 Fahrenheit is " + fahrToCels(68) + " Celsius.");
console.log("A temperature of 80 Fahrenheit is " + fahrToCels(80) + " Celsius.");

/// Test Code Output:
"A temperature of 32 Fahrenheit is 0 Celsius."
"A temperature of 68 Fahrenheit is 20 Celsius."

/// Define function

function fahrToCels(fahrTemp) {
    return ((fahrTemp - 32) * 5/9);
}

//////////////////////////////////////////////////////////////// Importnat

/// Test Code:
console.log("Going 80 km/h in a 60 km/h zone results in: " + determineTicket(80, 60) + ".");
console.log("Going 70 km/h in a 30 km/h zone results in: " + determineTicket(70, 30) + ".");
console.log("Going 50 km/h in a 50 km/h zone results in: " + determineTicket(50, 50) + ".");

/// Test Code Output:
"Going 80 km/h in a 60 km/h zone results in: Small Ticket."
"Going 70 km/h in a 30 km/h zone results in: Big Ticket."
"Going 50 km/h in a 50 km/h zone results in: No Ticket."

/// Define function

function determineTicket(speed, limit) {
    if (speed > 70 && limit == 30) {
        return "Big Ticket";

    } else if (speed > 80 && limit == 60) {
        return "Small Ticket"

    } else if (speed == 50 && limit == 50) {
        return "No ticket"
    } 
}


///////////////////////////////////////////////////////////////////////////////////////

// Test Code:
// Test if 10 is divisible by 5
if (isDivisible(10, 5)) {
    console.log("10 is divisible by 5");
} else {
    console.log("10 is NOT divisible by 5");
}
 
// Test if 11 is divisible by 2
if (isDivisible(11, 2)) {
    console.log("11 is divisible by 2");
} else {
    console.log("11 is NOT divisible by 2");
}

/// Test Code Output:
"10 is divisible by 5"
"11 is NOT divisible by 2"

// Define function

 

/////////////////////////////////////////////////////////////////////////////////////////

/// Test Code:
console.log("The sum of 1 + 2 + … + 1000 is " + arithmeticSum(1, 1000, 1) + ".");
console.log("The sum of 10 + 15 + … + 50 is " + arithmeticSum(10, 50, 5) + ".");

/// Test Code Output:
"The sum of 1 + 2 + … + 1000 is 500500."
"The sum of 10 + 15 + … + 50 is 270."

// Define function




///////////////////////////////////////////////////////////////////////////////////////

/// Test Code:
console.log("5 constrained between 1-10 is " + constrain(5, 1, 10) + ".");
console.log("20 constrained between 20-50 is " + constrain(20, 20, 50) + ".");
console.log("7 constrained between 10-15 is " + constrain(7, 10, 15) + ".");
console.log("101 constrained between 1-100 is " + constrain(101, 1, 100) + ".");

/// Test Code Output:
"5 constrained between 1-10 is 5."
"20 constrained between 20-50 is 20."
"7 constrained between 10-15 is 10."
"101 constrained between 1-100 is 100."

// Define function




///////////////////////////////////////////////////////////////////////////////////////