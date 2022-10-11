import React from 'react';
import './QuizQus.css'

const QuizQus = ({ quiz }) => {
    const { question, options } = quiz
    return (
        <div className='quiz-details'>
            <p>{question}</p>
            <div className='options'>

                {
                    options.map(option => <p ><small ><input type="radio" />{option}</small></p>)
                }
            </div>
            {/* <div className='options'>
                <p><small>{options}</small></p>
            </div> */}
        </div>
    );
};

export default QuizQus;