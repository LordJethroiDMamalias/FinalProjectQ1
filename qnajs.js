var count = 0;
var answer;
var answer_str;
var score = 0;
var db = false;

document.getElementById("A").disabled = true;
document.getElementById("B").disabled = true;
document.getElementById("C").disabled = true;
document.getElementById("D").disabled = true;

function begin() {
    count = 0;
    count = parseInt(count) + 1;
    document.getElementById("start").disabled = true;
    document.getElementById("start").innerHTML = "Quiz has begun!";
    ask(count);
    document.getElementById("A").disabled = false;
    document.getElementById("B").disabled = false;
    document.getElementById("C").disabled = false;
    document.getElementById("D").disabled = false;
    document.getElementById("answer").innerHTML = "The answer from last question will display here.";
    document.getElementById("score").innerHTML = "The score will display here.";
}

function ask(count) {
    switch (parseInt(count)) {
        case (1):
            document.getElementById("question").innerHTML = "Question 1: What is SDG 10 about?";
            document.getElementById("A").innerHTML = "A. No Poverty";
            document.getElementById("B").innerHTML = "B. Decent Work and Economic Growth";
            document.getElementById("C").innerHTML = "C. Reduced Inequalities";
            document.getElementById("D").innerHTML = "D. Gender Equality";
            answer = 3;
            answer_str = document.getElementById("C").innerHTML;
            break;
        case (2):
            document.getElementById("question").innerHTML = "Which of the following is NOT a key target of SDG 10?";
            document.getElementById("A").innerHTML = "A. Reducing income inequality";
            document.getElementById("B").innerHTML = "B. Promoting responsible consumption and production";
            document.getElementById("C").innerHTML = "C. Facilitating safe migration and mobility";
            document.getElementById("D").innerHTML = "D. Ensuring equal opportunities and reducing discrimination";
            answer = 2;
            answer_str = document.getElementById("B").innerHTML;
            break;
        case (3):
            document.getElementById("question").innerHTML = "Question 3: Which group is SDG 10 particularly focused on helping?";
            document.getElementById("A").innerHTML = "A. Large multinational corporations";
            document.getElementById("B").innerHTML = "B. Marginalized and disadvantaged populations";
            document.getElementById("C").innerHTML = "C. Government leaders";
            document.getElementById("D").innerHTML = "D. High-income earners";
            answer = 2;
            answer_str = document.getElementById("B").innerHTML;
            break;
        case (4):
            document.getElementById("question").innerHTML = "Question 4: What is one major factor that contributes to inequality within and among countries?";
            document.getElementById("A").innerHTML = "A. Unequal access to education and healthcare";
            document.getElementById("B").innerHTML = "B. Equal distribution of wealth";
            document.getElementById("C").innerHTML = "C. High levels of investment in public services";
            document.getElementById("D").innerHTML = "D. Universal basic income";
            answer = 1;
            answer_str = document.getElementById("A").innerHTML;
            break;
        case (5):
            document.getElementById("question").innerHTML = "Question 5: Why is representation in decision-making important for reducing inequalities?";
            document.getElementById("A").innerHTML = "A. It allows only the wealthy to have more power";
            document.getElementById("B").innerHTML = "B. It ensures that only major corporations shape policies";
            document.getElementById("C").innerHTML = "C. It limits the voices of disadvantaged groups";
            document.getElementById("D").innerHTML = "D. It promotes inclusive policies that reflect diverse perspectives";
            answer = 4;
            answer_str = document.getElementById("D").innerHTML;
            break;
        case (6):
            document.getElementById("start").disabled = false;
            document.getElementById("start").innerHTML = "Click to start";
            document.getElementById("question").innerHTML = "Click the button below to start.";
            document.getElementById("A").innerHTML = "A.";
            document.getElementById("B").innerHTML = "B.";
            document.getElementById("C").innerHTML = "C.";
            document.getElementById("D").innerHTML = "D.";
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
            answer = 3;
            break;
        default:
            alert("Press the start button first!")
            break;
    }
}

function checkanswer(input, correct) {
    if (count == 0) {
        ask(count)
        return;
    }
    count = parseInt(count) + 1;
    if (input == correct) {
        score = (parseInt(score) + 1)
        console.log("Correct answer for " + (parseInt(count) - 1) + " [CORRECT]. Score: " + score);
    }
    else {
        console.log("Correct answer for " + (parseInt(count) - 1) + " [WRONG]. Score: " + score)
    }

    document.getElementById("answer").innerHTML = "The answer was: " + answer_str;
    if (db == false) {
        db = true
        switch (answer) {
            case (1):
                document.getElementById("A").style.color = "lime";
                break;
            case (2):
                document.getElementById("B").style.color = "lime";
                break;
            case (3):
                document.getElementById("C").style.color = "lime";
                break;
            case (4):
                document.getElementById("D").style.color = "lime";
                break;
        }
        document.getElementById("A").disabled = true;
        document.getElementById("B").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("D").disabled = true;
        db = true;
        document.getElementById("next").disabled = false;
    }
}

function next() {
    if (db == true) {
        db = false
        ask(count)
    }
    document.getElementById("next").disabled = true;
    document.getElementById("A").disabled = false;
    document.getElementById("B").disabled = false;
    document.getElementById("C").disabled = false;
    document.getElementById("D").disabled = false;
    document.getElementById("A").style.color = "white";
    document.getElementById("B").style.color = "white";
    document.getElementById("C").style.color = "white";
    document.getElementById("D").style.color = "white";
    for (let x=0; x<=count; x++) {
        if (x == 6) {
            document.getElementById("score").innerHTML = "Quiz complete! Score: " + score;
            score = 0;
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
        }
    }
}