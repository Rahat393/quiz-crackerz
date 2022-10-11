import React from 'react';
import './QuizQus.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizQus = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    // console.log(correctAnswer)

    const handleRadiobtn = (option) => {
        if (option === correctAnswer) {
            toast.success('wright ans', {
                position: "top-center"
            });
        }
        else {
            toast.warning('wrong answer', {
                position: "top-center"
            })
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQus;