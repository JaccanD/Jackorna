init = function() {
    // Variabler och Funktioner

    //JAcks mongolista
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var quizBg = new Image();
    quizBg.src = "pics/Q_layout.png";
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
    var pushups = ["Sätt ner händerna i golvet och flytta bak fötterna. Försök vara så rak i kroppen som möjligt och böj sedan på armarna och för kroppen närmare golvet. När du är precis ovanför golvet så trycker du ifrån med armarna så du hamnar i startpositionen. Att tänka på: Justera distansen mellan händerna för att komma åt olika muskelgrupper. Mindre distans blir mer bröstmuskler och mer distans blir mer axlar/armar. Om det är för tungt kan man istället för fötterna köra med knäna i backen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det korrekta namnet på övningen du precis utförde?"];
    var pushupsAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["Push-ups", "Sit-ups", "chin-ups"]
    ];
    var pushupsQuiz = new Quiz(pushups, pushupsAnswer);
    var curls = ["Ha en vikt/vikter i händerna och låt armbågarna peka mot tårna samtidigt som du böjer armarna och för vikten upp mot bröskorgen. Att tänka på: Var rak i ryggen och försök att inte gunga så mycket med överkroppen för att maximera styrketräningen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för biceps?"];
    var curlsAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["musculus biceps brachii", "musculus bicepius", "musculus brachii"]
    ];
    var curlsQuiz = new Quiz(curls, curlsAnswer);
    var squats = ["Ställ dig med fötterna pekandes framåt i axelbredd. Böj sedan på benen samtidigt som du håller ryggen rak. Gå så djupt som din rörlighet tillåter och ställ dig sedan rakt upp igen. Att tänka på: Försök att hålla axlarna i en vertikal linje med hälarna för att maximera din styrketräning och undvika skador. Om det känns som att du ska ramla bakåt kan det hjälpa att sträcka ut armarna rakt fram för att hålla balansen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är det latinska namnet för sätesmuskel?"];
    var squatsAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["Gluteus maximus", "Gluteus backius", "Musculus backius"]
    ];
    var squatsQuiz = new Quiz(squats, squatsAnswer);
    var crunches = ["Denna övning utförs ryggliggandes. lyft upp benen och håll dessa i en 90 graders vinkel. Försök sedan att röra huvudet mot knäna genom att böja på magen utan att lyfta ländryggen från backen. Utför detta upprepade gånger för effekt. Att tänka på: Försök att utföra övningen lugnt och kontrollerat och inte snabbt och ryckigt.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Visste du att det är skillnad på sit-ups och crunches? Sit-ups tränar höftböjarna mer än magen och sker när du går från ryggliggandes till sittandes på rumpan.Crunches fokuserar mer på magmusklerna och utförs korrekt om du är ryggliggande och rör dig mot sittande utan att ländryggen lämnar golvet och sedan återgår till ryggliggande när du inte kommer längre upp."];
    var crunchesAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["crunches har mer fokus på mage", "Det är samma sak", "sit-ups har mer fokus på mage"]
    ];
    var crunchesQuiz = new Quiz(crunches, crunchesAnswer);
    var shoulderpress = ["Denna övning kan utföras sittandes eller stående. Ta en vikt/två vikter i dina händer och se till att din överkropp är i rakt vertikalt läge. Vikterna som du har i händerna ska sedan lyftas rakt upp ovanför dina axlar. När du sträckt upp vikterna så högt du kan för du sedan ner dom mot nyckelbenen och upprepar processen. Att tänka på: Var hela tiden rak i överkroppen och försök att putta ut bröstet utan att svanka med ryggen. bibehåll denna form under hela övningen.", "Vilken del av kroppen har du precis tränat?", "Du gissade rätt. Vad är viktigt att tänka på när man utför axelpress för att undvika skador?"];
    var shoulderpressAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["Spänna bålen", "Släppa ned vikten i golvet från axelhöjd när du är klar", "Att andra som ser dig tycker du ser stark ut"]
    ];
    var shoulderpressQuiz = new Quiz(shoulderpress, shoulderpressAnswer);
    var dumbbell = ["En dumbbell är ett träningsredskap som man kan använda i många olika övningar. Här är kreativiteten det enda som stoppar en från att träna. Den kan även bytas ut mot till exempel en hink med vatten. Att tänka på: Utför inga övningar som du tycker känns obekvämt eller gör ont. Det kan vara smart att söka upp övningar för att få lite idéer på vad som passar just din träning.", "klicka på kroppen för at gå vidare", "Vad kallas detta träningsredskap?"];
    var dumbbellAnswer = [
        ["OK", " ok..", "Inte ok"],
        ["Här ska man klicka på kroppen", "Här ska man inte klicka på kroppen", "Här ska man inte klicka på kroppen"],
        ["Dumbbell", "Barbell", "Klot med handtag"]
    ];
    var dumbbellQuiz = new Quiz(dumbbell, dumbbellAnswer);

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
        CorrectAnswer = 1 + Math.floor(Math.random() * 3);

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

    function getFeedback(a) {
        if (currentQuiz.completed)
            return;
        if (a == CorrectAnswer) {
            points = points + 10;
        } else if (a != CorrectAnswer) {
            points = points - 5;
        }
        pointCounter.innerHTML = points;
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
            qNumber = 0;
            currentQuiz = null;
            setMainScreen(true);
            setQuizScreen(false);
        }
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
    drawQuizScreen = function() {
        context.drawImage(quizBg, 0, 0);
    }
    clearCanvas = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

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
        } else {
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
        this.completed = false;
    }
}

window.addEventListener("load", init);