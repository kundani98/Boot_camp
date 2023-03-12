

// var myDay = prompt("Enter your favorite day of the week!").toLowerCase();

// var theResponse;

// switch (myDay) {
//  case "monday":
//  theResponse = "Ack!";
//  break;
//  case "tuesday":
//  theResponse = "Taco day!";
//  break;
//  case "wednesday":
//  theResponse = "Halfway there!";
//  break;
//  case "thursday":
//  theResponse = "It’s the new Friday!";
//  break;
//  case "friday":
//  theResponse = "TGIF! Yeah!";
//  break;
//  case "saturday":
//  theResponse = "What a day!";
//  break;
//  case "sunday":
//  theResponse = "Sunday = Funday!";
//  break;
//  default:
//  theResponse = "I haven’t heard of that one!";
//  break;
// }
// alert (theResponse); 

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
d.setDate(01);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
     todayDate.innerHTML = d.toDateString();

}

function displayActivity() {
    // todo: find out the day of the week.
    var dayOfWeek = d.getDay();
    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
       var youShould;
       switch (dayOfWeek) {
       case 0:
       youShould = "Take it easy. You’ve earned it.";
       break;
       case 1:
       youShould = "Gotta do what ya gotta do!";
       break;
       case 2:
       youShould = "Take time to smell the roses!";
       break;
       case 3:
       youShould = "Don’t forget to eat breakfast!";
       break;
       case 4:
       youShould = "Learn something new today!";
       break;
       case 5:
       youShould = "Make a list of things you like to do.";
       break;
       case 6:
       youShould = "Do one thing from your list of things you like to do.";
       break;
       default:
       youShould = "Hmm. Something has gone wrong.";
       break;
       }
      
       // output the value of youShould into the thingToDo div
       document.getElementById("thingToDo").innerHTML = youShould;
   
}