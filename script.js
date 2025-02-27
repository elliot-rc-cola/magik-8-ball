const question = document.getElementById('question');
const submitBtn = document.querySelector('#submitBtn');
const ballResponse = document.querySelector('#ballResponse');
const userInputArea = document.querySelector('#userInput');
const fortuneResponses = [
    'Yes - definitely', 
    'It is decidedly so', 
    'Without a doubt',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];
const fortuneIndex = Math.floor(Math.random() * fortuneResponses.length);

submitBtn.addEventListener('click', tellFortune);

function tellFortune(e) {
    if (question.value !== '') {
        ballResponse.innerHTML = `
        <p class="response-text"><strong>You asked:</strong> ${question.value}?</p>
        <p class="response-text"><strong>Magik 8 Ball says:</strong> ${fortuneResponses[fortuneIndex]}.</p>
        <button id="resetBtn" type="button">Ask Another Question</button>
        `;
        ballResponse.style.display = 'block';
        userInputArea.style.display = 'none';

        const resetBtn = document.querySelector('#resetBtn');
        resetBtn.addEventListener('click', resetBall);
    } else {
        alert("Error: You haven't asked a question!");
    }
}

function resetBall(e) {
    ballResponse.style.display = 'none';
    userInputArea.style.display = 'block';
    question.value = '';
}