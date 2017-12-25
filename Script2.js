var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var line = document.getElementById('line');

var timer;


stopButton.onclick = function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timer);
    line.style.width = 0;
    line.innerHTML = " ";
}

startButton.onclick = function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    animateLine();
}

function animateLine() {
    var i = 0;

    timer = setInterval(function() {
        line.style.width = (parseFloat(line.style.width || 0) + 1.70) + '%';
        line.innerHTML = ++i + " сек";
        if (60 == i) {
            stopButton.click();
            alert("Время вышло!!!!!!!");
        }

    }, 1000);
}