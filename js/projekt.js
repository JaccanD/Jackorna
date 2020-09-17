init = function() {
    // Variabler och Funktioner
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');


    var SquatButton = new CanvasButton(0, 100, 0, 100);
    var pushupButton = new CanvasButton(0, 10, 0, 10);
    var shoulderPressButton = new CanvasButton(0, 20, 0, 20);
    var bicepsCurlButton = new CanvasButton(0, 30, 0, 30);
    var sittupButton = new CanvasButton(0, 40, 0, 40);
    var dumbBellButton = new CanvasButton(0, 50, 0, 50);
    
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
        this.active = true;
    }

    checkClick(x, y) {
        if (!this.active) {
            return false;
        }
        if (this.xStart <= x && this.xEnd >= x) {
            if (this.yStart <= y && this.yEnd >= y) {
                return true;
            }
        }
        return false;
    }
}
window.addEventListener("load", init);