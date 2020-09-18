init = function() {
    // Variabler och Funktioner

    //JAcks mongolista
    var CorrectAnswer = 0;
    var Question = new String;
    var qNumber = 0;
    var option1 = "";
    var option2 = "";
    var option3 = "";
    var pushups = ["Sätt ner händerna i golvet och flytta bak fötterna. Försök vara så rak i kroppen som möjligt och böj sedan på armarna och för kroppen närmare golvet. När du är precis ovanför golvet så trycker du ifrån med armarna så du hamnar i startpositionen. Att tänka på: Justera distansen mellan händerna för att komma åt olika muskelgrupper. Mindre distans blir mer bröstmuskler och mer distans blir mer axlar/armar. Om det är för tungt kan man istället för fötterna köra med knäna i backen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det korrekta namnet på övningen du precis utförde?"];
    var pushupsAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["Push-ups", "Sit-ups", "chin-ups"]
        ];
    var curls = ["Ha en vikt/vikter i händerna och låt armbågarna peka mot tårna samtidigt som du böjer armarna och för vikten upp mot bröskorgen. Att tänka på: Var rak i ryggen och försök att inte gunga så mycket med överkroppen för att maximera styrketräningen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för biceps?"];
    var curlsAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["musculus biceps brachii", "musculus bicepius", "musculus brachii"]
        ];
    var squats = ["Ställ dig med fötterna pekandes framåt i axelbredd. Böj sedan på benen samtidigt som du håller ryggen rak. Gå så djupt som din rörlighet tillåter och ställ dig sedan rakt upp igen. Att tänka på: Försök att hålla axlarna i en vertikal linje med hälarna för att maximera din styrketräning och undvika skador. Om det känns som att du ska ramla bakåt kan det hjälpa att sträcka ut armarna rakt fram för att hålla balansen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för sätesmuskel?"];
    var squatsAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["Gluteus maximus", "Gluteus backius", "Musculus backius"]
        ];
    var crunches = ["Denna övning utförs ryggliggandes. lyft upp benen och håll dessa i en 90 graders vinkel. Försök sedan att röra huvudet mot knäna genom att böja på magen utan att lyfta ländryggen från backen. Utför detta upprepade gånger för effekt. Att tänka på: Försök att utföra övningen lugnt och kontrollerat och inte snabbt och ryckigt.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Visste du att det är skillnad på sit-ups och crunches? Sit-ups tränar höftböjarna mer än magen och sker när du går från ryggliggandes till sittandes på rumpan.Crunches fokuserar mer på magmusklerna och utförs korrekt om du är ryggliggande och rör dig mot sittande utan att ländryggen lämnar golvet och sedan återgår till ryggliggande när du inte kommer längre upp."];
    var crunchesAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["Jag hade ingen aning", "Jag visste redan detta", "jag hade en liten aning"]
        ];
    var axelpress = ["Denna övning kan utföras sittandes eller stående. Ta en vikt/två vikter i dina händer och se till att din överkropp är i rakt vertikalt läge. Vikterna som du har i händerna ska sedan lyftas rakt upp ovanför dina axlar. När du sträckt upp vikterna så högt du kan för du sedan ner dom mot nyckelbenen och upprepar processen. Att tänka på: Var hela tiden rak i överkroppen och försök att putta ut bröstet utan att svanka med ryggen. bibehåll denna form under hela övningen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är viktigt att tänka på när man utför axelpress för att undvika skador?"];
    var axelpressAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["Spänna bålen", "Släppa ned vikten i golvet från axelhöjd när du är klar", "Att andra som ser dig tycker du ser stark ut"]
        ];
    var dumbbell = ["En dumbbell är ett träningsredskap som man kan använda i många olika övningar. Här är kreativiteten det enda som stoppar en från att träna. Den kan även bytas ut mot till exempel en hink med vatten. Att tänka på: Utför inga övningar som du tycker känns obekvämt eller gör ont. Det kan vara smart att söka upp övningar för att få lite idéer på vad som passar just din träning.", "klicka på kroppen för at gå vidare", "Vad kallas detta träningsredskap?"];
    var dumbbellAnswer = [
            ["OK", "OK", "OK"],
            ["Här ska man klicka på kroppen", "Här ska man klicka på kroppen", "Här ska man klicka på kroppen"],
            ["Dumbbell", "Barbell", "Klot med handtag"]
        ]; 
        
     function setcurls() {
        Question = curls[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
     }   
    function setpushups() {
        Question = pushups[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
    }
    function setsquats() {
        Question = squats[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
    }
    function setcrunches() {
        Question = crunches[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
    }
    function setaxelpress() {
        Question = axelpress[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
    }
    function setdumbbell() {
        Question = dumbbell[qNumber];
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

        if (CorrectAnswer == 1) {
            Option1 = AnswerOptions[qNumber][0];
            Option2 = AnswerOptions[qNumber][1];
            Option3 = AnswerOptions[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = AnswerOptions[qNumber][2];
            Option2 = AnswerOptions[qNumber][0];
            Option3 = AnswerOptions[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = AnswerOptions[qNumber][1];
            Option2 = AnswerOptions[qNumber][2];
            Option3 = AnswerOptions[qNumber][0];
        }
    } 
    //SLUT

    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');
    var quizBg = new Image();
    quizBg.src = "pics/Q_layout.png";

    var squatButton = new CanvasButton(660, 780, 350, 550);
    var pushupButton = new CanvasButton(375, 530, 470, 550);
    var shoulderPressButton = new CanvasButton(320, 440, 225, 430);
    var bicepsCurlButton = new CanvasButton(100, 250, 450, 600);
    var crunchButton = new CanvasButton(465, 625, 360, 460);
    var dumbBellButton = new CanvasButton(200, 260, 300, 420);
    var mainScreenButtons = [squatButton, pushupButton, shoulderPressButton, bicepsCurlButton, crunchButton, dumbBellButton];
    
    var option1Button = new CanvasButton(30, 770, 200, 300, false);
    var option2Button = new CanvasButton(30, 770, 320, 410, false);
    var option3Button = new CanvasButton(30, 770, 430, 520, false);
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
    drawQuizScreen = function(){
        context.drawImage(quizBg, 0, 0);
    }
    processClick = function(event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.x - rect.left;
        var y = event.y - rect.top;
        if(mainScreenButtons[0].active){
            if(squatButton.checkClick(x, y)){
                drawQuizScreen();
                setMainScreen(false);
                setQuizScreen(true);
            }
            if(pushupButton.checkClick(x,y)){
                console.log("Pushups!");
            }
            if(shoulderPressButton.checkClick(x,y)){
                console.log("ShoulderPress!");
            }
            if(bicepsCurlButton.checkClick(x,y)){
                console.log("BicepsCurld!");
            }
            if(crunchButton.checkClick(x,y)){
                console.log("Sittups!");
            }
            if(dumbBellButton.checkClick(x,y)){
                console.log("Dumbbell!");
            }
            return;
        }
        if(quizScreenButtons[0].active){
            if(option1Button.checkClick(x,y)){
                console.log("Nu i Quizzet.");
                context.clearRect(0, 0, 800, 600);
                setQuizScreen(false);
                setMainScreen(true);
            }
            if(option2Button.checkClick(x,y)){
                console.log("Svar 2");
            }
            if(option3Button.checkClick(x,y)){
                console.log("Svar 3");
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