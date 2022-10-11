import React from 'react';
import './QuizQus.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizQus = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    // console.log(id)
    // console.log(correctAnswer)

    const handleRadiobtn = (option) => {
        if (option === correctAnswer) {
            toast.success('Right answer', {
                position: "top-center"
            });
        }
        else {
            toast.warning('Wrong answer', {
                position: "top-center"
            })
        }

    }

    const eyeButton = (correctAnswer) => {
        const correctAns = correctAnswer;
        console.log(correctAns)
        // return { correctAns };
        alert(correctAns)
    }


    return (
        <div className='quiz-details'>
            <h3>{question}</h3>

            <div onClick={() => eyeButton(correctAnswer)} className='eye-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </div>

            <div className='options'>

                {
                    options.map(option => <p onClick={() => handleRadiobtn(option)} className='each-option' > <input type="radio" name='quiz' /> {option} </p>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQus;