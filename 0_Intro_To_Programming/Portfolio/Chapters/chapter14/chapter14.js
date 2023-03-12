/// listen for button clicks

var placeOrderButn = document.getElementById("placeOrder");
placeOrderButn.addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas");
    var typePizza = document.getElementById("typePizza");
    var deliveryCity = document.getElementById("deliveryCity");
    var displayTotal = document.getElementById("displayTotal");
    var birthday = document.getElementById("displayTotal");

    numPizzas = numPizzas.value;
    typePizza = typePizza.value;
    deliveryCity = deliveryCity.value;
    birthday = birthday.value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity,birthday);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    }

    else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice + "</p>";
    }
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    // display the output
    displayTotal.innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // todo: calculate extraCharge, if there is one.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity) {
    var deliveryPrice = 0;

    // todo: calculate delivery price, if there is one
    if ((deliveryCity === "Anytown") && (orderPrice > 10)) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    return deliveryPrice;
}