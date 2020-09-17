init = function() {
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');


    var SquatButton = new CanvasButton(0, 1, 0, 1);
    alert(SquatButton.xEnd);
    context.beginPath();
    context.moveTo(80, 280);
    context.lineTo(360, 50);
    context.lineWidth = 10;
    context.strokeStyle = '#aa00aa';
    context.stroke();

    processClick = function(event) {

    }
    canvas.addEventListener("click", processClick);
}
class CanvasButton {
    constructor(xStart, xEnd, yStart, yEnd) {
        this.xStart = xStart;
        this.xEnd = xEnd;
        this.yStart = yStart;
        this.yEnd = yEnd;
    }

    checkClick(x, y) {
        if (xStart <= x && xEnd >= x) {
            if (yStart <= y && yEnd >= y) {
                return true;
            }
        }
        return false;
    }
}
window.addEventListener("load", init);
