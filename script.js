const questions = [
    { sentence: "He rested yesterday.", word: "descansar", correctForm: "descansó" },
    { sentence: "They spoke to the teacher.", word: "hablar", correctForm: "hablaron" },
    { sentence: "She ate an apple.", word: "comer", correctForm: "comió" },
    { sentence: "I wrote a letter.", word: "escribir", correctForm: "escribí" },
    { sentence: "We saw a movie.", word: "ver", correctForm: "vimos" },
    { sentence: "You sang a song.", word: "cantar", correctForm: "cantaste" },
    { sentence: "They lived in Spain.", word: "vivir", correctForm: "vivieron" },
    { sentence: "He drank water.", word: "beber", correctForm: "bebió" },
    { sentence: "She danced at the party.", word: "bailar", correctForm: "bailó" },
    { sentence: "We worked all day.", word: "trabajar", correctForm: "trabajamos" },
    { sentence: "Bobby watched the soccer game.", word: "mirar", correctForm: "miró" },
    { sentence: "Did he call me last night", word: "Llamar", correctForm: "llamó" },
    { sentence: "I listened to the music.", word: "Eschuchar", correctForm: "escuché" },
    { sentence: "Did they describe the accident well?", word: "Describir", correctForm: "describieron" },
    { sentence: "They allowed me to go to the fair.", word: "Permitir", correctForm: "permitieron" },
    { sentence: "I decided to play soccer last week.", word: "Decidir", correctForm: "decidí" },
    { sentence: "Did you two dance last night?", word: "Bailar", correctForm: "bailaron" },
    { sentence: "Did your parents paint the house?", word: "Pintar", correctForm: "pintaron" },
    { sentence: "who vommited at school?", word: "Vomitar", correctForm: "vomitó" },
    { sentence: "I recieved a million dollars!", word: "Recibir", correctForm: "recibí" },
    { sentence: "The child went up the ladder.", word: "Subir", correctForm: "subió" },
    { sentence: "My family and I traveled to spain.", word: "Viajar", correctForm: "viajamos" },
    { sentence: "The students all wrote the paper.", word: "Escribir", correctForm: "escribieron" },
    { sentence: "Our mom drank juice this morning.", word: "Beber", correctForm: "bebió" }
];

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('sentence').innerText = question.sentence;
    document.getElementById('word').innerText = question.word;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function addAccent(accent) {
    const answerField = document.getElementById('answer');
    answerField.value += accent;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].correctForm.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('result').innerText = "Correct!";
        document.getElementById('result').classList.remove('error');
        document.getElementById('result').classList.add('correct');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1000); // Delay before loading the next question
        } else {
            document.getElementById('result').innerText = "You've completed all questions!";
        }
    } else {
        document.getElementById('result').innerText = "Try again.";
        document.getElementById('result').classList.add('error');
    }
}

function skipQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').innerText = "You've completed all questions!";
    }
}

function startOver() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').innerText = score;
    shuffle(questions); // Shuffle the questions when starting over
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', function() {
        const body = document.body;
        if (this.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    shuffle(questions);
    loadQuestion();
});
