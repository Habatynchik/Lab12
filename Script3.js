var checkButton = document.getElementById('check');
var stop = document.getElementById('stop');
var mainImg = document.getElementById('field');
var basketball = document.getElementById('basketball');
var tennis = document.getElementById('tennis');
var football = document.getElementById('football');


checkButton.onclick = function checkResult() {
    if (checkPlace([basketball, football, tennis]) == true) {
        alert("Nice");
        stop.click();
    }

}


function checkScript() {
    if (checkPlace(checkPlace([basketball, football, tennis]) == true)) return true;
    else return false;
}

function checkPlace(e) {
    var imgWidth = mainImg.width;
    var tmpWidth = imgWidth / 3;
    var array = [0];

    for (var i = 1; i < 4; i++) {
        array[i] = array[i - 1] + tmpWidth;
    }

    for (i = 0; i < 3; i++) {
        if (!(e[i].getBoundingClientRect().left > array[i] && e[i].getBoundingClientRect().right <= array[i + 1])) {

            //  alert(e[i].getBoundingClientRect().left  + " __>__ " + array[i]);
            //  alert(e[i].getBoundingClientRect().right  + " __<__ " + array[i+1]);
            return false;
        }
    }

    return true;
}
