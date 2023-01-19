import interviewQuestions from '../questions'
import { useState } from 'react'

export default function Card() {
    const random = Math.floor(Math.random() * interviewQuestions.length)

    const [question, setQuestion] = useState({
        cardId: interviewQuestions[random].id,
        cardQuestion: interviewQuestions[random].question,
        cardAnswer: interviewQuestions[random].answer,
        displayedCardIndexes: [0]
    })

    function getNewQuestion() {
        let newRandom = Math.floor(Math.random() * interviewQuestions.length)
        let questionsCompleted = question.displayedCardIndexes.length == interviewQuestions.length

        while (!questionsCompleted && question.displayedCardIndexes.includes(newRandom)) {
            newRandom = Math.floor(Math.random() * interviewQuestions.length)
        }

        setQuestion(prevQuestion => {
            return {
                cardId: interviewQuestions[newRandom].cardId,
                cardQuestion: interviewQuestions[newRandom].question,
                cardAnswer: interviewQuestions[newRandom].answer,
                displayedCardIndexes: questionsCompleted ? [newRandom] : [...prevQuestion.displayedCardIndexes, newRandom]
            }
        })
    }

    const [showAnswer, setShowAnswer] = useState(false)

    function toggleAnswer() {
        setShowAnswer(prevShowAnswer => !prevShowAnswer)
    }

    return (
        <div>
            <div className='card'>
                <h3>{question.cardQuestion}</h3>
                {showAnswer && <p>{question.cardAnswer}</p>}
                <button onClick={toggleAnswer}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            </div>
            {question.displayedCardIndexes.length == interviewQuestions.length && <p>You've reviewed all of the interview questions. Ready to try again?</p>}
            <button onClick={getNewQuestion}>{question.displayedCardIndexes.length == interviewQuestions.length ? 'Reset!' : 'Get New Question'}</button>
        </div>
    )
}