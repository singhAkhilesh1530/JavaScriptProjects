const questions = [
    {
        'question': 'Where is Taj Mahal',
        'a': 'Agra',
        'b': 'Kanpur',
        'c': 'Noida',
        'd': 'Ghaziabad',
        'correct': 'a'
    },
    {
        'question': 'Where is Kashi',
        'a': 'Uttar Pradesh',
        'b': 'Madhya Pradesh',
        'c': 'Kerela',
        'd': 'Jammu',
        'correct': 'a'
    },
    {
        'question': 'Where is Pratap Vihar',
        'a': 'Noida',
        'b': 'Kanpur',
        'c': 'Aligarh',
        'd': 'Ghaziabad',
        'correct': 'd'
    },
    {
        'question': 'What is Hp',
        'a': 'Laptop',
        'b': 'Tablet',
        'c': 'Mobie',
        'd': 'PC',
        'correct': 'd'
    }
]

let index = 0;
let right = 0;
let wrong = 0;

const queBox = document.getElementById("que-box");
const options = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index == questions.length){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = data.question;
    options[0].previousElementSibling.innerText = data.a;
    options[1].previousElementSibling.innerText = data.b;
    options[2].previousElementSibling.innerText = data.c;
    options[3].previousElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    options.forEach((input) => {
        if(input.checked)
            answer = input.value;
    })
    return answer;
}

const reset = () => {
    options.forEach((input) => {
        if(input.checked)
            input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = 
    `<div style="text-align: center">
        <h3>Thanks for taking the Quiz!!<h3/>
        <h2>Correct Answers are ${right}
    </div>`
}

loadQuestion();