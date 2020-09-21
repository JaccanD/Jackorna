init = function() {
    // Variabler och Funktioner

    //JAcks mongolista
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var quizBg = new Image();
    quizBg.src = "pics/Q_layout.png";
    var bodyImg = new Image();
    bodyImg.src = "pics/human.png";
    var FMJ = new Image();
    FMJ.src = "pics/FMJ.png";

    // Ska inte behövas men javascript gonna javascript
    var bicepsImage = new Image();
    bicepsImage.src = "pics/body_biceps.png";
    var crunchesImage = new Image();
    crunchesImage.src = "pics/body_crunches.png";
    var pushupsImage = new Image();
    pushupsImage.src = "pics/body_pushups.png";
    var shoulderImage = new Image();
    shoulderImage.src = "pics/body_shoulder.png";
    var squatsImage = new Image();
    squatsImage.src = "pics/body_squats.png";
    var dbImage = new Image();
    dbImage.src = "pics/DB.png";
    
    var pointCounter = document.getElementById("Points");
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

    var bodyButon1 = new CanvasButton(0, 100, 0, 100, false);
    var bodyButon2 = new CanvasButton(0, 100, 0, 100, false);
    var bodyButon3 = new CanvasButton(0, 100, 0, 100, false);
    var bodyButtons = [bodyButon1, bodyButon2, bodyButon3];

    var points = 0;
    var CorrectAnswer = 0;
    var Question = new String;
    var qNumber = 0;
    var Option1 = "";
    var Option2 = "";
    var Option3 = "";
    var currentQuiz = null;
    var textpos1 = -100;
    var textpos2 = 100;
    var textpos3 = 210;
    var textpos4 = 320;
    var quizArray = new Array();
    var pushups = ["Sätt ner händerna i backen och flytta bak fötterna. Ner och nudda näsan i golvet och kom sedan upp till raka armar. Ge mig 10 repetitioner! NU! sätt händerna närmare varandra för att öka belastningen på bröstmusklerna.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det korrekta namnet på övningen du precis utförde?"];
    var pushupsAnswer = [
        ["Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!"],
        ["1", "2", "3"],
        ["Push-ups", "Sit-ups", "chin-ups"]
    ];
    var pushupsQuiz = new Quiz(pushups, pushupsAnswer, "Breast");
    quizArray.push(pushupsQuiz);
    var curls = ["Ta en vikt/vikter i händerna och låt armbågarna peka mot tårna samtidigt som du böjer armarna och för vikten upp mot bröstkorgen svagis. Var rak i ryggen och ge tusan i att inte gunga så mycket med överkroppen för att maximera styrketräningen. KÖR!", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för biceps?"];
    var curlsAnswer = [
        ["Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!"],
        ["1", "2", "3"],
        ["musculus biceps brachii", "musculus bicepius", "musculus brachii"]
    ];
    var curlsQuiz = new Quiz(curls, curlsAnswer, "Arms");
    quizArray.push(curlsQuiz);
    var squats = ["Ställ dig med fötterna axelbrett och böj på benen! Gå ner djupt och upp till nästan raka ben igen. Böj inte på ryggen, gröngöling! Axlarna ska vara i linje rakt ovanför hälarna hela tiden. Använd armarna för att hjälpa till med balansen. 10 repetitioner… NU!!", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för sätesmuskel?"];
    var squatsAnswer = [
        ["Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!"],
        ["2", "1", "3"],
        ["Gluteus maximus", "Gluteus backius", "Musculus backius"]
    ];
    var squatsQuiz = new Quiz(squats, squatsAnswer, "Legs");
    quizArray.push(squatsQuiz);
    var crunches = ["Ner i ryggliggandes. Lyft upp benen och håll dessa i en 90 graders vinkel. För huvudet mot knäna genom att böja på magen utan att lyfta ländryggen från backen. minst 10 repetitioner!! klara, färdiga KÖR!!", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Visste du att det är skillnad på sit-ups och crunches? Sit-ups tränar höftböjarna mer än magen och sker när du går från ryggliggandes till sittandes på rumpan.Crunches fokuserar mer på magmusklerna och utförs korrekt om du är ryggliggande och rör dig mot sittande utan att ländryggen lämnar golvet och sedan återgår till ryggliggande när du inte kommer längre upp."];
    var crunchesAnswer = [
        ["Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!"],
        ["2", "1", "3"],
        ["crunches har mer fokus på mage", "Det är samma sak", "sit-ups har mer fokus på mage"]
    ];
    var crunchesQuiz = new Quiz(crunches, crunchesAnswer, "Abs");
    quizArray.push(crunchesQuiz);
    var shoulderpress = ["Ta en vikt/två vikter i dina händer och se till att din överkropp är i rakt vertikalt läge. Vikterna ska du lyfta upp högt. Ut med bröstet och spänn skinkorna. När du sträckt upp vikterna så högt du kan tar du ner dom mot nyckelbenen och upprepar processen. 6 repetitioner. 3..2..1.. LETS GO!!", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är viktigt att tänka på när man utför axelpress för att undvika skador?"];
    var shoulderpressAnswer = [
        ["Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!", "Utför övningen och klicka sedan HÄR!"],
        ["1", "2", "3"],
        ["Spänna bålen", "Släppa ned vikten i golvet från axelhöjd när du är klar", "Att andra som ser dig tycker du ser stark ut"]
    ];
    var shoulderpressQuiz = new Quiz(shoulderpress, shoulderpressAnswer, "Shoulders");
    quizArray.push(shoulderpressQuiz);
    var dumbbell = ["En dumbbell är ett träningsredskap som man kan använda i många olika övningar. Här är kreativiteten det enda som stoppar en från att träna. Den kan även bytas ut mot till exempel en hink med vatten. Utför aldrig några övningar som du tycker känns obekvämt eller gör ont. Du kan söka upp övningar för att få lite idéer på vad som passar just din träning.", "Vad kallas detta träningsredskap?"];
    var dumbbellAnswer = [
        ["Wow!", "Fantastiskt", "Detta ska jag komma ihåg"],
        ["Dumbbell", "Barbell", "Klot med handtag"]
    ];
    var dumbbellQuiz = new Quiz(dumbbell, dumbbellAnswer, "Dumbbell");
    quizArray.push(dumbbellQuiz);

    function getLines(text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];

        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = context.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    function setQuiz() {
        Question = currentQuiz.questions[qNumber];
        if(qNumber == 1 && currentQuiz.muscleGroup != "Dumbbell"){
            setBody();
        }
        CorrectAnswer = 1 + Math.floor(Math.random() * 3)
        if (CorrectAnswer == 1) {
            Option1 = currentQuiz.answers[qNumber][0];
            Option2 = currentQuiz.answers[qNumber][1];
            Option3 = currentQuiz.answers[qNumber][2];
        }
        if (CorrectAnswer == 2) {
            Option1 = currentQuiz.answers[qNumber][2];
            Option2 = currentQuiz.answers[qNumber][0];
            Option3 = currentQuiz.answers[qNumber][1];
        }
        if (CorrectAnswer == 3) {
            Option1 = currentQuiz.answers[qNumber][1];
            Option2 = currentQuiz.answers[qNumber][2];
            Option3 = currentQuiz.answers[qNumber][0];
        }

        context.font = "18pt Times new roman, Serif";
        var lines = getLines(Question, 700);
        var lineOffset = 0;
        for (var i = 0; i < lines.length; i++) {
            context.fillText(lines[i], 25, textpos1 + rect.top + lineOffset);
            lineOffset += 20;
        }
        context.fillText(Option1, 20, textpos2 + rect.top);
        context.fillText(Option2, 20, textpos3 + rect.top);
        context.fillText(Option3, 20, textpos4 + rect.top);
    }
    function setBody(){
        moveBodyButtons();
        CorrectAnswer = 1;

        context.font = "18pt Times new roman, Serif";
        var lines = getLines(Question, 500);
        var lineOffset = 0;
        for (var i = 0; i < lines.length; i++) {
            context.fillText(lines[i], 25, textpos1 + rect.top + lineOffset);
            lineOffset += 20;
        }

        context.drawImage(bodyImg, 200, 0);

    }
    function moveBodyButtons(){
        if(currentQuiz.muscleGroup == pushupsQuiz.muscleGroup){
            bodyImg = pushupsImage;
        }else if(currentQuiz.muscleGroup == crunchesQuiz.muscleGroup){
            bodyImg = crunchesImage;
        }else if(currentQuiz.muscleGroup == squatsQuiz.muscleGroup){
            bodyImg = squatsImage;
        }else if(currentQuiz.muscleGroup == shoulderpressQuiz.muscleGroup){
            bodyImg = shoulderImage;
        }else if(currentQuiz.muscleGroup == curlsQuiz.muscleGroup){
            bodyImg = bicepsImage;
        }else if(currentQuiz.muscleGroup == dumbbellQuiz.muscleGroup){
            bodyImg = dbImage;
        }

    }
    function getFeedback(a) {
        if (currentQuiz.completed || qNumber == 0)
            return;
        if (a == CorrectAnswer) {
            points = points + 10;
        } else if (a != CorrectAnswer) {
            points = points - 5;
        }
        pointCounter.innerHTML = points + " Poäng";
    }


    //SLUT


    advanceQuiz = function(a) {
        getFeedback(a);
        qNumber++;
        if (currentQuiz.questions.length > qNumber) {
            clearCanvas();
            drawQuizScreen();
            setQuiz();
        } else {
            clearCanvas();
            currentQuiz.completed = true;
            if(checkCompletion()){
                clearCanvas();// JACK
                console.log("Nu e du klar");
                drawEndScreen(); // JACK
            }
            qNumber = 0;
            currentQuiz = null;
            setMainScreen(true);
            setQuizScreen(false);
        }
    }
    checkCompletion = function(){
        for(var i = 0; i < quizArray.length; i++){
            console.log("varv");
            if(!quizArray[i].completed){
                return false;
            }
        }
        return true;
    }
    setMainScreen = function(active) {
        for (var i = 0; i < mainScreenButtons.length; i++) {
            mainScreenButtons[i].active = active;
        }
    }
    setQuizScreen = function(active) {
        for (var i = 0; i < quizScreenButtons.length; i++) {
            quizScreenButtons[i].active = active;
        }
    }
    setBodyScreen = function(active){
        for (var i = 0; i < bodyButtons.length; i++) {
            bodyButtons[i].active = active;
            console.log(bodyButtons[i].active);
        }
    }
    drawQuizScreen = function() {
        context.drawImage(quizBg, 0, 0);
    }
    clearCanvas = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawEndScreen = function() {
        context.drawImage(FMJ, 0, 0);
    } // JACK

    function startQuiz(toStart) {
        drawQuizScreen();
        setMainScreen(false);
        setQuizScreen(true);
        currentQuiz = toStart;
        setQuiz();
    }


    processClick = function(event) {
        var x = event.x - rect.left;
        var y = event.y - rect.top;
        if (mainScreenButtons[0].active) {
            if (squatButton.checkClick(x, y)) {
                startQuiz(squatsQuiz);
            }
            if (pushupButton.checkClick(x, y)) {
                startQuiz(pushupsQuiz);
            }
            if (shoulderPressButton.checkClick(x, y)) {
                startQuiz(shoulderpressQuiz);
            }
            if (bicepsCurlButton.checkClick(x, y)) {
                startQuiz(curlsQuiz);
            }
            if (crunchButton.checkClick(x, y)) {
                startQuiz(crunchesQuiz);
            }
            if (dumbBellButton.checkClick(x, y)) {
                startQuiz(dumbbellQuiz);
            }
            return;
        }
        if (quizScreenButtons[0].active) {
            if (option1Button.checkClick(x, y)) {
                advanceQuiz(1);
                console.log(points + " Poäng");

            }
            if (option2Button.checkClick(x, y)) {
                advanceQuiz(2);
                console.log(points + " Poäng");

            }
            if (option3Button.checkClick(x, y)) {
                advanceQuiz(3);
                console.log(points + " Poäng");
            }
            return;
        }
        if(bodyButtons[0].active){
            if(bodyButon1.checkClick(x,y)){
                advanceQuiz(1)
            }
            if(bodyButon2.checkClick(x,y)){
                advanceQuiz(2)
            }
            if(bodyButon3.checkClick(x,y)){
                advanceQuiz(3)
            }
            return;
        }
        else {
            console.log("Inte en knapp");
        }
    }

    console.log("Lets GO!");
    
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
        if (arguments.length == 4)
            this.active = true;
        else {
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
    moveTo(xStart, xEnd, yStart, yEnd){
        this.xStart = xStart;
        this.xEnd = xEnd;
        this.yStart = yStart;
        this.yEnd = yEnd;
    }
}
class GameScreen {
    constructor(buttons) {
        this.buttons = buttons;
    }
}
class Quiz {
    constructor(questions, answers, muscleGroup) {
        this.questions = questions;
        this.answers = answers;
        this.muscleGroup = muscleGroup;
        this.completed = false;
    }
}

window.addEventListener("load", init);