var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "blue",
    year: 2022,
    bodyStyle: "Luxury Car",
    price: 80000
}

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;