// let array = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
// console.log(array);
// let fahrenheit = [];
// for (let i = 0; i < array.length; i++) {
//     fahrenheit.push((array[i] - 32) * (5 / 9));
// }

// console.log(fahrenheit);

// Start with an array of restaurant menus and create a new array with only the menus with prices greater than $15 (from the :price key).
// For example, [{name: "Kelaguen Plate", price: 12}, {name: "Red Rice Bowl", price: 5}, {name: "Seafood Combo", price: 18}] becomes [{name: "Seafood Combo", price: 18}].

let menu = [{name: "Kelaguen Plate", price: 12}, {name: "Red Rice Bowl", price: 5}, {name: "Seafood Combo", price: 18}, {name: "Chicken Nuggets", price: 5}, {name: "Meat Lover's Pizza", price: 15.50}];
let newMenu = [];

for (let i = 0; i < menu.length; i++) {
    if (menu[i].price > 15) {
        newMenu.push(menu[i]);
    }
}

console.log(newMenu);