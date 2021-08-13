const option_list = document.querySelector(".option_list");
const timercount = quiz_box.querySelector(".timer .timer_sec")
const timeLine = quiz_box.querySelector("header .time_line")
const restart_quiz = document.getElementById("restart")
const quit_quiz = document.getElementById("quit")
var info_box = document.getElementById("info_box");
var start_button = document.getElementById("start_button");
var timeoff = document.getElementById("time_text");


function display(){
    
    info_box.classList.remove("display")
    start_button.classList.add("display")
}

function exit(){
    // var a = document.getElementById("info_box");
    info_box.classList.add("display")
    // var b = document.getElementById("start_button");
    start_button.classList.remove("display")
}


function cont(){
    var a = document.getElementById("info_box");
    a.classList.add("display")
    var b = document.getElementById("quiz_box");
    b.classList.remove("display")
    showQuestions(0)
    quecounter(1)
    startTimer(15)
    startTimerline(0)
    
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");

restart_quiz .onclick =()=>{

quiz_box.classList.remove("display");
quiz_box.classList.remove("none");
result_box.classList.add("none");
let que_count = 0;
let que_numb = 1;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
showQuestions(que_count);
quecounter(que_numb);
clearInterval(counter);
startTimer(timeValue);
clearInterval(counterLine);
startTimerline(widthValue);
next_btn.style.display="none"
timeoff.textContent = "Time left"


}

function quit(){
    
    window.location.reload();
}

function nextbtn(){
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        quecounter(que_numb)
        clearInterval(counter)
        startTimer(timeValue);
        clearInterval(counterLine)
        startTimerline(widthValue);
        next_btn.style.display="none"
        timeoff.textContent = "Time left"
        
        
    }
    else{
        clearInterval(counter)
        clearInterval(counterLine)
        console.log("ali khan");
        showResultbox();
        
        
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].question+'</span>';
    que_text.innerHTML = que_tag;
    const option_tag = ' <div class="option"><span>' +questions[index].options[0]+'</span></div>'
                        +' <div class="option"><span>' +questions[index].options[1]+'</span></div>'
                        +' <div class="option"><span>' +questions[index].options[2]+'</span></div>'
                        +' <div class="option"><span>' +questions[index].options[3]+'</span></div>';
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}

let tickIcon ='<div class="icon tick"><i class="fa fa-check" aria-hidden="true"></i>'
let crossIcon ='<div class="icon cross"><i class="fa fa-times" aria-hidden="true"></i>'

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    
    if(userAns == correctAns){
        userScore +=1;
        console.log(userScore)
        answer.classList.add("correct");
        console.log("answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }
    else{
        answer.classList.add("incorrect");
        console.log("answer is wrong")
        answer.insertAdjacentHTML("beforeend", crossIcon)

        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct")
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }

    //once user selscted disabled all options

for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled")  
}
next_btn.style.display = "block";
    
}
function showResultbox(){
    result_box.classList.remove("none");
    quiz_box.classList.add("display");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore >3){
        let scoreTag = '<span>and congrats! You got only <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >1){
        let scoreTag = '<span>and nice, You got only <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only <p>'+userScore+'</p>out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timercount.textContent = time;
        time--;
        if(time <9){
            let addzero = timercount.textContent;
            timercount.textContent=""
            timercount.textContent = "0" +addzero
        }
        if(time < 0){
            clearInterval(counter);
            timercount.textContent="00"
            timeoff.textContent = "Time Off"

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;


            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class","option correct")
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
                }
                
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled")  
            }
            next_btn.style.display = "block";
            
        }
    }
}
function startTimerline(time){
    counterLine = setInterval(timer, 25);
    function timer(){
        time+=1;
        timeLine.style.width = time + "px"
        if(time > 549){
            clearInterval(counterLine);
            
            
        }
    }
}



function quecounter(index){
 
const button_ques_counter = quiz_box.querySelector(".total_que");
let totalquescountTag = "<span><p>"+index+"</p>of<p>"+questions.length+"</p>Questions</span>";
button_ques_counter.innerHTML=totalquescountTag;
}