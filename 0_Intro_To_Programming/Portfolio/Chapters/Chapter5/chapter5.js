var item1;
var item2;
var item3;
var heading
var item
alert("You can change Name and List Items");
//document.getElementById("firstThing").onclick = new_item();



function new_item(){


item =prompt("Enter new item");
update_item();

}
function update_item(){
    document.getElementById("firstThing").innerHTML =item;

}


function new_Heading(){
    
heading = prompt("Enter a new Heading");
updateHeading();

}

function updateHeading(){


    document.getElementById("myName").innerHTML =heading;

}





function newList() {
    item1 = prompt("Enter a new first thing");
    item2 = prompt("Enter a new second thing");
    item3 = prompt("Enter a new third thing");
    item4 = prompt("Enter a new forth thing");
    item5 = prompt("Enter a new fifth thing");

    updateList();
}

function updateList() {


    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
    document.getElementById("fourthThing").innerHTML = item4;
    document.getElementById("fifthThing").innerHTML = item5;


}
