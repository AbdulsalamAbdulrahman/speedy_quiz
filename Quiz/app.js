
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is CoLab?", ["Co-Working Space", "Meeting centre","Demo centre", "School"], "Co-Working Space"),
    new Question("All these are Colab events except?", ["BYB for Women", "Dev Expo", "F8 Deep Dive Meetup", "Boost your business"], "BYB for Women"),
    new Question("How many kinds of subscribers do Colab have?", ["2", "4","3", "5"], "3"),
    new Question("How much does a Colab t-shirt costs in Naira?", ["3000", "4000", "3500", "4500"], "4000"),
    new Question("Benefits of basic subscriber except?", ["Fast internet", "Library", "workspace", "access to mentors"], "library"),
    new Question("what is Colab's web address?", ["www.colabhub.com", "www.colab.com", "colab.com.ng", "www.colabkaduna.com"], "All"),
    new Question("What is the surname of the community manager?", ["Abdulraman", "Leinge", "Ismaila", "Itodo"], "Leinge"),
    new Question("How much for a daily subcription at Colab?", ["1500", "2000", "1800", "2100"], "2100"),
    new Question("when was Colab established?", ["3rd October 2016", "3rd september 2016", "3rd, October 2017","3rd September 2017 "], "3rd October 2016"),
    new Question("All these are names of Colab's halls except?", ["VR Lab", "basic room", "Premium room ", "Meeting room"], "VR lab"),
    new Question("Who's the present intern cordinator?", ["Mubarak", "Ane", "Joshua", "Purest"], "Ane"),
    new Question("How many halls does Colab have?", ["2", "3", "4", "5"], "2"),
    new Question("what is Sanusi's  surname?", ["Hassan", "Harrison", "Ismaila", "Kelvin"], "Ismaila"),
    new Question("what is Colab's facebook handle?", ["Colab", "colab innovation hub","Colab hub", "Colab community"], "Colab"),
    new Question("How much bandwith is alloted to a premium subscriber?", ["34", "40", "36", "24"], "24"),
    new Question("A Student subcriber does not have access to the following except", ["workspace", "library", "Mentors", "private meeting room"], "Workspace"),
    new Question("what is Colab's email address?", ["hi@colab.com.ng", "hicolab@gmail.com", "help@colab.com", "All"], "hi@colab.com.ng"),
    new Question("Which of these is a startup that originated from colab?", ["School Mo", "O pay", "piggy vest", "Asusu"], "School Mo"),
    new Question("what Colab's twitter handle?", ["colabkd", "colab_kd", "colab", "colab.kd"], "colab_kd"),
    new Question("How much bandwith is alloted to a student subscriber?", ["4", "5", "6", "7"], "5"),
    new Question("A Premium subcriber has access to the following except", ["Premuim hall", "Basic hall", "Sanusi's office", "library"], "Sanusi's office"),
    new Question("how many branches does colab have?", ["1", "2", "3", "4"], "1"),
    new Question("what is a vistor given ?", ["Tea ", "a tour", "free data", "lunch"], "a tour"),
    new Question("What time does colab open?", ["7am", "8am", "9am", "10am"], "8am"),
    new Question("what time does colab close?", ["7pm", "8pm", "9pm", "10pm"], "All"),
    new Question("How many colours are on the colab logo?", ["3", "6", "5", "2"], "5"),
    new Question("How many people are allowed to be in the library at a time?", ["5", "7", "10", "2"], "2"),
    new Question("how much is the weekly subscription?", ["3600", "4200", "2500", "4000"], "4200"),
    new Question("what bank does Colab use?", ["Diamond bank", "First bank", "GT bank", "Polaris bank"], "GT bank"),
    new Question("Colab is a partner with ", ["Figma", "Google", "Facebook", "React"], "Facebook"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





