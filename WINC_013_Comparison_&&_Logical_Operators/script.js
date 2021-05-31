const age = 30;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 100;

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Je krijgt gratis (vega-)bitterballen")
}
else if (totalAmount > 50 && totalAmount <= 100) {
    console.log("Je krijgt gratis portie nachos")
}
else if (totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne")
}
else console.log("Je krijgt geen gratis items...")

if (age <= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}
else {
    console.log("Geen korting")
}

if (age > 18) {
    console.log("You'are allowed to enter, have fun!")
}
else {
    console.log("Stay out and please leave, thanks")
}

if (isFemale) {
    console.log("Welcome to ladies night")
}
else {
    console.log("See ya, wouldn't wanna be ya")
}

if (driverStatus == "bob") {
    console.log("Drive safe")
}
else {
    console.log("Go walking")
}

if (name == "Sarah" || "Bram") {
    console.log("Gratis Bier voor jou!")
}
else {
    console.log("Helaas, je moet betalen")
}
