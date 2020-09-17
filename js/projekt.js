init = function() {
    // Variabler och Funktioner
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');

    var SquatButton = new CanvasButton(400, 500, 100, 600);
    var pushupButton = new CanvasButton(0, 10, 0, 10);
    var shoulderPressButton = new CanvasButton(0, 20, 0, 20);
    var bicepsCurlButton = new CanvasButton(0, 30, 0, 30);
    var sittupButton = new CanvasButton(0, 40, 0, 40);
    var dumbBellButton = new CanvasButton(0, 50, 0, 50);

    var mainScreenButtons = [SquatButton, pushupButton, shoulderPressButton, bicepsCurlButton, sittupButton, dumbBellButton];
    var mainScreen = new GameScreen(mainScreenButtons);
    var quizScreen = [];
    switchScreen = function(from, destination) {
        for (var i = 0; from.length; i++) {
            from[i].active = false;
        }
        for (var i = 0; destination.length; i++) {
            destination[i].active = true;
        }

    }
    processClick = function(event) {
        if (mainScreenButtons[0].checkClick(event.x, event.y)) {
            switchScreen(mainScreenButtons, quizScreen);
        }
    }

    // Kod som körs
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
class GameScreen {
    constructor(buttons) {
        this.buttons = buttons;
    }
}
class Quiz {
    constructor(questions, answers) {
        this.questions = questions;
        this.answers = answers;
    }
}

window.addEventListener("load", init);