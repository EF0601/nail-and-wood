var finishTime1 = 1000;
var finishTime2 = 10000;
var finishTime3 = 5000;


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, finishTime1/100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        move();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var j = 0;
function move2() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, finishTime2/100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
        move2();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var k = 0;
function move3() {
  if (k == 0) {
    k = 1;
    var elem = document.getElementById("myBar3");
    var width = 1;
    var id = setInterval(frame, finishTime3 / 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        k = 0;
        move3();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


move();
move2();
move3();
