import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQus from '../QuizQus/QuizQus';
import './Quiz.css'

const Quiz = () => {
    const quizs = useLoaderData()
    const { name, logo, id, total } = quizs.data
    console.log(quizs)
    return (
        <div className=''>
            <div className='quiz-title'>
                <img src={logo} alt="" />
                <h2>Quiz of  {name} </h2>
                <h4>Total Quiz : {total}</h4>
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