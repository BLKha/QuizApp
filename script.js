const app ={
    currentQuestionIndex: 0,
    score: 0,

    questions:[ 
        {
        question: 'Khoảng cách xa nhất bạn có thể nhìn thấy bằng mắt thường?',
        answers: [
            {text: "3 triệu năm ánh sáng", correct: false},
            {text: "2 triệu năm ánh sáng", correct: false},
            {text: "2.5 triệu năm ánh sáng", correct: true},
            {text: "2.7 triệu năm ánh sáng", correct: false},
        ]
    },
    {
        question: 'Ai là "Nhân vật thể thao của năm" của BBC năm 2001?',
        answers: [
            {text: "Mike Tayson", correct: false},
            {text: "Michael Phelps", correct: false},
            {text: "Ronaldo De Lima", correct: false},
            {text: "David Beckham", correct: true},
        ]
    },
    {
        question: 'Nếu Trái đất được tạo thành một lỗ đen, đường kính của chân trời sự kiện sẽ là gì?',
        answers: [
            {text: "20cm", correct: false},
            {text: "20mm", correct: true},
            {text: "20m", correct: false},
            {text: "20km", correct: false},
        ]
    },
    {
        question: 'James Naismith đã phát minh ra trò chơi thể thao nào vào năm 1891?',
        answers: [
            {text: "Bóng rổ", correct: true},
            {text: "Tennis", correct: false},
            {text: "Bi a", correct: false},
            {text: "Khúc côn cầu", correct: false},
        ]
    },
    {
        question: 'Ai là "Nhân vật thể thao của năm" của BBC năm 2001?',
        answers: [
            {text: "Mike Tayson", correct: false},
            {text: "Michael Phelps", correct: false},
            {text: "Ronaldo De Lima", correct: false},
            {text: "David Beckham", correct: true},
        ]
    },
    {
        question: 'Có bao nhiêu hoa hướng dương trong phiên bản thứ ba của Van Gogh trong bức tranh "Hoa hướng dương"?',
        answers: [
            {text: "14 bông", correct: false},
            {text: "12 bông", correct: true},
            {text: "16 bông", correct: false},
            {text: "15 bông", correct: false},
        ]
    },
    {
        question: 'Cơ thể con người mất bao nhiêu hơi thở hàng ngày?',
        answers: [
            {text: "40,000", correct: false},
            {text: "10,000", correct: false},
            {text: "30,000", correct: false},
            {text: "20,000", correct: true},
        ]
    },
    {
        question: 'Sẽ mất bao nhiêu năm để một tàu vũ trụ được phóng từ Trái đất đến hành tinh Sao Diêm Vương?',
        answers: [
            {text: "9.5 năm", correct: true},
            {text: "10 năm", correct: false},
            {text: "9 năm", correct: false},
            {text: "8.5 năm", correct: false},
        ]
    },
]
}
const questionElement= document.getElementById('question');
const answerBtn= document.getElementById('answer-btns');
const nextBtn= document.getElementById('next-btns');
const quiz =document.querySelectorAll('.quiz');

function startQuiz(){
    app.currentQuestionIndex=0;
    app.score=0;
    nextBtn.innerHTML='Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = app.questions[app.currentQuestionIndex];
    let questionNo = app.currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    console.log(currentQuestion);

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
   }

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        app.score++;
    }else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct ==='true'){
            button.classList.add('correct');
        }
        button.disabled= true;
    });
    nextBtn.style.display='block';
}


function handleNextBtn(){
    app.currentQuestionIndex++;
    if(app.currentQuestionIndex < app.questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Bạn trả lời đúng ${score} trên ${app.questions.length} câu hỏi`;
    nextBtn.innerHTML= 'Play Again'
    nextBtn.style.display='block'
}
    nextBtn.addEventListener('click',()=>{
        if(app.currentQuestionIndex < app.questions.length ){
            handleNextBtn();
        }else{
            startQuiz();
        }
    })

startQuiz();
