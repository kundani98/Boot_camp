/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/


var trainSpeed = 250;
var trainPosition = 0;
var animation;
/*
todo: Listen for click events on the train element and 
call a function named speedUp when they happen.
*/
var train = document.getElementById("train");
train.addEventListener("click", speedUp);

/*
todo: Listen for click events on the stop button element 
and call a function called stopTrain when they 
happen.
*/
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

/*
todo: Check whether the train is already going as fast 
as it can. If not, increase the speed.
 */
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 50;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("You crashed");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 260) {
        console.log("Whew! That was close!");
        alert("You almost crashed");
        clearInterval(animation);
        
    }
}



