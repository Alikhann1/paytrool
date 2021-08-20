const start_btn = document.getElementById("start_btn");
const info_box = document.getElementById("info_box");
const exit_btn = document.getElementById("quit");
const continuee = document.getElementById("start");
const quiz_box = document.getElementById("quiz_box");
const result_box = document.getElementById("result_box");
const option_list = document.getElementById("option_list");
const restart_quiz = document.getElementById("restart");
const quit_quiz = document.getElementById("quit");
const next_btn = document.getElementById("next_btn");
const bottom_ques_counter = document.getElementById("total_que");
const icon = document.getElementById("icon");

let que_count = 0;
let que_numb = 1;
let userScore = 0;

function start() {
    info_box.classList.add("activeInfo");
}

function exit() {
    info_box.classList.remove("activeInfo");
}


function cont() {
    quiz_box.classList.add("activeQuiz");
    info_box.classList.remove("activeInfo");
    showQuestions(0)
    quecounter(1)

}

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    que_text.innerHTML =  '<span>' + questions[index].question + '</span>';
    option_list.innerHTML =' <div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + ' <div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + ' <div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + ' <div class="option"><span>' + questions[index].options[3] + '</span></div>';
    const option = document.getElementsByClassName("option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fa fa-check" aria-hidden="true"></i>'

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

    if (userAns == correctAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }
    else {
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display = "block";

}

function nextbtn() {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        quecounter(que_numb)
        next_btn.style.display = "none";
    }
    else {
        showResultbox();
    }
}

function restart() {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuestions(que_count);
    quecounter(que_numb);
    next_btn.style.display = "none";


}

function quit() {

    window.location.reload();
}

function showResultbox() {
    result_box.classList.add("activeResult");
    quiz_box.classList.remove("activeQuiz");
    info_box.classList.remove("activeInfo");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let iconface = '<i class="far fa-smile"></i>';
        icon.innerHTML = iconface;
        let scoreTag = '<span>and congrats! You got only <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        let iconface = '<i class="far fa-frown"></i>';
        icon.innerHTML = iconface;
        let scoreTag = '<span>and nice, You got only <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let iconface = '<i class="far fa-sad-cry"></i>';
        icon.innerHTML = iconface;
        let scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function quecounter(index) {
    let totalquescountTag = "<span><p>" + index + "</p>of<p>" + questions.length + "</p>Questions</span>";
    bottom_ques_counter.innerHTML = totalquescountTag;
}