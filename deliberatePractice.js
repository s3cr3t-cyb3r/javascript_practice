// Start with an array of strings and create a new array with each string's length.
// For example, ["Hagåtña", "Dededo", "Yigo", "Tamuning"] becomes [7, 6, 4, 8].

let cities = ["Hagåtña", "Dededo", "Yigo", "Tamuning"];
let lengths = [];

for (i = 0; i < cities.length; i++) {
    lengths.push(cities[i].length);
}

console.log(lengths);

// Use a nested loop to convert an array of village-beach pairs into a single flattened array.
// For example, [["Tumon", "Ypao"], ["Merizo", "Cocos"], ["Talofofo", "Talofofo Bay"]] becomes 
// ["Tumon", "Ypao", "Merizo", "Cocos", "Talofofo", "Talofofo Bay"].

let villageBeaches = [["Tumon", "Ypao"], ["Merizo", "Cocos"], ["Talofofo", "Talofofo Bay"]];
let array = [];

for (i = 0; i < villageBeaches.length; i++) {
    for (j = 0; j < villageBeaches[i].length; j++) {
        array.push(villageBeaches[i][j]);
    }
}

console.log(array);

// Write a program to store the type of beach (public, hotel, or private) and the day of the week (weekday or weekend). Then calculate the parking fee based on the following conditions:
// If the beach is public, parking is always free regardless of the day.
// If the beach is a hotel beach and it's a weekday, parking is $5. On weekends, hotel beach parking is $10.
// If the beach is private, parking is $15 on weekdays and $25 on weekends.

let beachType = "public";
let day = "weekend";

if (beachType == "private") {
    if (day == "weekend") {
        console.log("Parking fee: $25");
    } else if (day == "weekday") {
        console.log("Parking fee: $15");
    } else {
        console.log("Not a valid day.");
    }
} else if (beachType == "hotel") {
    if (day == "weekend") {
        console.log("Parking fee: $10");
    } else if (day == "weekday") {
        console.log("Parking fee: $5");
    } else {
        console.log("Not a valid day.");
    }
} else if (beachType == "public") {
    console.log("Free of charge.");
} else {
    console.log("Not a valid beach type.")
}