init = function() {
    // Variabler och Funktioner
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');


    var SquatButton = new CanvasButton(0, 100, 0, 100);



    processClick = function(event) {
        if (SquatButton.checkClick(event.x, event.y)) {
            console.log("Tryckte på knappen");
        }
    }

    // Kod som körs
    context.beginPath();
    context.moveTo(80, 280);
    context.lineTo(360, 50);
    context.lineWidth = 10;
    context.strokeStyle = '#aa00aa';
    context.stroke();
    canvas.addEventListener("click", processClick);
}

// Klasser
class CanvasButton {
    constructor(xStart, xEnd, yStart, yEnd) {
        this.xStart = xStart;
        this.xEnd = xEnd;
        this.yStart = yStart;
        this.yEnd = yEnd;
    }

    checkClick(x, y) {
        if (this.xStart <= x && this.xEnd >= x) {
            if (this.yStart <= y && this.yEnd >= y) {
                return true;
            }
        }
        return false;
    }
}
window.addEventListener("load", init);