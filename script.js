const quizDB = [
    {
        question: '১। আমাদের দেশের নাম কি ?',
        a: 'বাংলাদেশ ',
        b: 'ভারত ',
        c: 'নেপাল ',
        d: 'পাকিস্তান ',
        ans: 'ans1'
    },
    {
        question: '২। আমাদের দেশের জাতীয় কবির নাম কি ?',
        a: 'জসিমউদ্দিন ',
        b: 'কাজীনকরুল ইসলাম ',
        c: 'বেগম রোকেয়া ',
        d: 'বরীন্দ্রনাথ ঠাকুর ',
        ans: 'ans2'
    },
    {
        question: '৩। আমাদের দেশের জাতীয় ফুলের নাম কি ?',
        a: 'জবা ',
        b: 'শাপলা ',
        c: 'গোলাপ ',
        d: 'সূর্যমূখী ',
        ans: 'ans2'
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore');
const scorearea = document.querySelector('.scorearea');
    let guide = document.querySelector("#guide");
    let exit = document.querySelector("#exit");
    let ContinueBtn = document.querySelector("#Continue");

let innerdiv = document.querySelector("#inner-div");
let start = document.querySelector("#start");
   start.addEventListener("click" , ()=>{
       start.style.display = "none";
       guide.style.display = "block";
   });

   exit.addEventListener("click", () => {
       start.style.display = "block";
       guide.style.display = "none";
   });
ContinueBtn.addEventListener("click", () => {
    innerdiv.style.display = "block";
    guide.style.display = "none";
    
});
let score = 0;
let questionCount = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = quizDB[questionCount].question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>আপনার কুইজ শেষ। </br> আপনি  ${score}পেয়েছেন ${quizDB.length} মধ্যে </h3>
        <button class="btn" onclick="location.reload()">পুনরায় খেলতে  চান </button>
        `;
        showScore.classList.remove("scorearea");
         innerdiv.style.display = "none";
    }
});
