var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm")
var rightArm = document.getElementById("rightarm")

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown2);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveLeftRight);


var x = 10;


function moveLeftRight(e) {

    var robotPart = e.target;
    var left = 30;

    var ani = setInterval(frame, 100)



    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 0) {
            clearInterval(ani);
        }
    }

}




function moveRightLeft(e) {

    var robotPart = e.target;
    var left = 50;

    var ani = setInterval(frame, 100)



    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(ani);
        }
    }




}




function moveUpDown(e) {

    var robotPart = e.target;
    var top = 0;

    var ani = setInterval(frame, 100)



    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(ani);
        }
    }
}
function moveUpDown2(e) {

    var robotPart = e.target;
    var top = 0;
    var left

    var ani = setInterval(frame, 100)



    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(ani);
        }
    }
}

x++;
