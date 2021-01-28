myQuestions = [

    {
        question: "whats your name?",
        answer: "azhar",
        options:[
              "azhar",
              "haha",
              "Yaar mat kr",
              "hello"
        ]
    },
    {
        question: "Changing the question",
        answer: "Oye",
        options:[
              "Chup khan",
              "Oye",
              "Haha mat kr",
              "yara ho"
        ]
    },

]
    


let questionCounter = 0;
let score = 0;

const displayQuestion = (e)=>{
    var question = document.getElementById("question");
    question.innerHTML = myQuestions[e].question;
        var options = document.getElementsByClassName("options");
        for (var i = 0 ; i< options.length;i++)
        {
            options[i].innerHTML = myQuestions[e].options[i];
}
}

const nextQuestion = ()=>{

    validate();
    removeClass();
    questionCounter++;

    if (questionCounter<=myQuestions.length)
    {
        displayQuestion(questionCounter);
    }
}




const activeClass = (e)=>
{
        removeClass();
         e.classList.add("active");
}

const removeClass = ()=>{
        let activeClass = document.getElementsByClassName("active");

        for (let i = 0 ;i<activeClass.length ; i++)
        {
            activeClass[i].classList.remove("active");
        }
}




const validate = ()=>{

    let active = document.getElementsByClassName("active");

    for (let i = 0 ;i<myQuestions.length; i++)
    {
        if (active[0].innerHTML === myQuestions[i].answer)
        {
            score++;
        }
    }
        console.log(score);
}
