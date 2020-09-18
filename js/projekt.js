init = function() {
    // Variabler och Funktioner
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');

    var squatButton = new CanvasButton(0, 200, 0, 200);
    var pushupButton = new CanvasButton(0, 10, 0, 10);
    var shoulderPressButton = new CanvasButton(0, 20, 0, 20);
    var bicepsCurlButton = new CanvasButton(0, 30, 0, 30);
    var sittupButton = new CanvasButton(0, 40, 0, 40);
    var dumbBellButton = new CanvasButton(0, 50, 0, 50);
    var mainScreenButtons = [squatButton, pushupButton, shoulderPressButton, bicepsCurlButton, sittupButton, dumbBellButton];
    
    var option1Button = new CanvasButton(0, 800, 0, 600, false);
    var option2Button = new CanvasButton(0, 10, 0, 10, false);
    var option3Button = new CanvasButton(0, 10, 0, 10, false);
    var quizScreenButtons = [option1Button, option2Button, option3Button];
    setMainScreen = function(active){
        console.log("Ändrar main screen");
        for(var i = 0; i < mainScreenButtons.length; i++){
            mainScreenButtons[i].active = active;
        } 
    }
    setQuizScreen = function(active){
        console.log("Ändrar Quiz screen");
        for(var i = 0; i < quizScreenButtons.length; i++){
            quizScreenButtons[i].active = active;
        } 
    }
    processClick = function(event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.x - rect.left;
        var y = event.y - rect.top;
        if(mainScreenButtons[0].active){
            if(squatButton.checkClick(x, y)){

            }
            if(pushupButton.checkClick(x,y)){

            }
            if(shoulderPressButton.checkClick(x,y)){

            }
            if(bicepsCurlButton.checkClick(x,y)){

            }
            if(sittupButton.checkClick(x,y)){

            }
            if(dumbBellButton.checkClick(x,y)){

            }
            return;
        }
        if(quizScreenButtons[0].active){
            if(option1Button.checkClick(x,y)){
                console.log("Nu i Quizzet.");
            }



            return;
        }   
        else {
            console.log("Inte en knapp");
        }
    }

    // Kod som körs
    canvas.addEventListener("click", processClick);
}

//här har jack skrivit(om något går åt helvete!)

function reloadGame() {
    location.reload();
}
//här slutade jack

// Klasser
class CanvasButton {
    constructor(xStart, xEnd, yStart, yEnd) {
        this.xStart = xStart;
        this.xEnd = xEnd;
        this.yStart = yStart;
        this.yEnd = yEnd;
        if(arguments.length == 4)
            this.active = true;
        else{
            this.active == arguments[4];
        }
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