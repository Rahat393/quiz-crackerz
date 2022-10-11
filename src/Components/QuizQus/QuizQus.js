import React from 'react';
import './QuizQus.css'

const QuizQus = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    // console.log(correctAnswer)

    const handleRadiobtn = (option) => {
        if (option === correctAnswer) {
            alert('wright ans')
        }
        else {
            alert('wrong answer')
        }

    }

    return (
        <div className='quiz-details'>
            <p>{question}</p>
            <div className='options'>

                {
                    options.map(option => <p ><small ><input onClick={() => handleRadiobtn(option)} type="radio" value={id} name='quiz' />{option}</small></p>)
                }
            </div>

        </div>
    );
};

export default QuizQus;