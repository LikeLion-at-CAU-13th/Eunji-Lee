// 1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

// 3. displayMyChoice 함수 작성
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 출력하는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };
    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);
    
    displayResult(myChoice, comChoice);
}

// 7. 게임 결과 표시 함수
function displayResult(myChoice, comChoice) {
    let gameResult;

    if (myChoice == comChoice) {
        gameResult = "Draw";
    } else if (
        (myChoice == "rock" && comChoice == "scissors") ||
        (myChoice == "scissors" && comChoice == "paper") ||
        (myChoice == "paper" && comChoice == "rock")
    ) {
        gameResult = "Win";
    } else {
        gameResult = "Lose";
    }
    
    document.getElementById("display-result").innerText = gameResult;
    return gameResult;
}

let myScore = 0;
let comScore = 0;

// 8. 점수판 표시 함수
function updateScore(gameResult) {
    if (gameResult == "Win") {
        myScore++;
    } else if (gameResult == "Lose") {
        comScore++;
    }

    document.getElementsByClassName("my-score")[0].innerText = myScore;
    document.getElementsByClassName("computer-score")[0].innerText = comScore;
}

// 9. 리셋 버튼
function resetGame() {
    myScore = 0;
    comScore = 0;
    document.getElementsByClassName("my-score")[0].innerText = myScore;
    document.getElementsByClassName("computer-score")[0].innerText = comScore;

    myHandText.innerText = "";
    myHandIcon.className = "";
    computerText.innerText = "";
    computerIcon.className = "";

    document.getElementById("display-result").innerText = "";
}

const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetGame);

// 10. 다크 모드
const darkModeBtn = document.getElementById("dark-mode-button");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})