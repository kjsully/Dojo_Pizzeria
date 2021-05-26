function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("stuffed", "red", "sharp cheddar", ["pineapple", "kiwi", "banana"]);
console.log(p2);

var p3 = pizzaOven("thin", "BBQ", "giraffe cheese", ["onions", "peaches", "bacon"]);
console.log(p3);