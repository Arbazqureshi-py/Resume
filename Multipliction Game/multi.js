const num1= Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

questionEl= document.getElementById("questions");

questionEl.innerText= `What is ${num1} multiply by ${num2}`;
let score= JSON.parse(localStorage.getItem("score"));

const formEl= document.getElementById("form");
const inputEl= document.getElementById("input");
const scoreEl= document.getElementById("score");

const correntAns= num1*num2;

if(!score){
    score=0;
}
scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value
    if(userAns === correntAns){
        score++;
        updateLocalstorage()

    }
    else{
        score--;
        updateLocalstorage()
    }
});

function updateLocalstorage(){
    localStorage.setItem("score", JSON.stringify(score));
}