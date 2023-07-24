var chartColors = ["#CEC011", "#CD5233", "#355188", "#437800"];
var valueData = [25, 35, 20, 20];

function allValues() {
    var pieSum = 0;
    for (var a = 0; a < valueData.length; a++) {
        pieSum += (typeof valueData[a] == 'number') ? valueData[a] : 0;
    }

    return pieSum;
}

function drawPieChart() {
    var canvas;
    var ctx;
    var lastend = 0;
    var pieSum = allValues();

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.Width, canvas.height);

    for (var i = 0; i < valueData.length; i++) {
        ctx.fillStyle = chartColors[i];
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.arc(200, 150, 150, lastend, lastend + (Math.PI * 2 * (valueData[i] / pieSum)), false);
        ctx.lineTo(200, 150);
        ctx.fill();
        lastend += Math.PI * 2 * (valueData[i] / pieSum);
    }
}

function nowDraw() {
    valueData[1] = document.getElementById("first").value;
    valueData[2] = document.getElementById("second").value;
    valueData[3] = document.getElementById("third").value;
    valueData[4] = document.getElementById("fourth").value;

    plotData();
}
document.getElementById("redraw").onclick = nowDraw;

drawPieChart();
