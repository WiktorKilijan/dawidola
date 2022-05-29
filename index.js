const questionsAnswers = new Map();
questionsAnswers.set('asd', 'Kobiety')
questionsAnswers.set('123', 'Kobiety')

const failMsg = 'Niepoprawna odpowiedź, spróbujcie jeszcze raz';

const submitForm = () => {
    const value = document.getElementById("inputAnswer");
    console.log(value.value);
    console.log(questionsAnswers);
    checkAnswer(value.value)
    
}

const checkAnswer = (answer) => {
    const book = questionsAnswers?.get(answer)?.toString();

    if (book) {
        alert(book)
    } else {
        alert(failMsg)
    }
}