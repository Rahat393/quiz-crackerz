import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQus from '../QuizQus/QuizQus';
import './Quiz.css'

const Quiz = () => {
    const quizs = useLoaderData()
    const { name, logo, id } = quizs.data
    console.log(quizs)
    return (
        <div className=''>
            <div className='quiz-title'>
                <img src={logo} alt="" />
                <h2>  {name} </h2>
            </div>
            {
                quizs.data.questions.map(quiz => <QuizQus
                    key={quiz.id}
                    quiz={quiz}
                ></QuizQus>)
            }
        </div>
    );
};

export default Quiz;