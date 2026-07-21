
// ===============================
// SAM ACADEMY CBT ENGINE - PART 1
// ===============================

let totalSeconds = 60 * 60;

const timer = document.getElementById("timer");

if (timer) {

setInterval(() => {

let minutes = Math.floor(totalSeconds / 60);

let seconds = totalSeconds % 60;

timer.innerHTML =
String(minutes).padStart(2, "0") +
":" +
String(seconds).padStart(2, "0");

if (totalSeconds > 0) {

totalSeconds--;

}

}, 1000);

}

// ===============================
// SAMPLE QUESTIONS
// ===============================

const questions = [

{

question:"Which Article of the Indian Constitution deals with Equality before Law?",

options:[
"Article 14",
"Article 19",
"Article 21",
"Article 32"
],

answer:0

},

{

question:"Who wrote Thirukkural?",

options:[
"Kamban",
"Avvaiyar",
"Thiruvalluvar",
"Bharathiyar"
],

answer:2

},

{

question:"Capital of Tamil Nadu?",

options:[
"Madurai",
"Salem",
"Chennai",
"Coimbatore"
],

answer:2

}

];

let currentQuestion=0;

const question=document.querySelector(".question");

const optionBoxes=document.querySelectorAll(".option label");

function loadQuestion(){

if(!question) return;

question.innerHTML=questions[currentQuestion].question;

optionBoxes.forEach((label,index)=>{

label.innerHTML=questions[currentQuestion].options[index];

});

}

loadQuestion();

// ===============================
// NEXT BUTTON
// ===============================

const nextBtn=document.querySelector(".primaryBtn");

if(nextBtn){

nextBtn.onclick=function(){

if(currentQuestion<questions.length-1){

currentQuestion++;

loadQuestion();

}

else{

alert("Demo completed. Result page coming next.");

}

}

}



