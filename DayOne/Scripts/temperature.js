function getTemperature(temp) {
    // Using ternary operator
    const status = temp >= 30 ? "HOT" : "Cold";
    console.log(status);
}

getTemperature(45);
getTemperature(20);

