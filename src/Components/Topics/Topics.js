import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData()
    // console.log(topics)

    const handleQuizBtn = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className='main-header'>
                <div className='header-img'>
                    <img src="https://us.123rf.com/450wm/jovanas/jovanas1606/jovanas160600377/58893843-quiz-icon.jpg?ver=6" alt="" />
                </div>
                <div>
                    <p>Test your understanding of Creativity concepts with Study.com's quick multiple choice quizzes. Missed a question here and there? All quizzes are paired with a solid lesson that can show you more about the ideas from the assessment in a manner that is relatable and unforgettable. Test your understanding of Creativity concepts with Study.com's quick multiple choice quizzes. Missed a question here and there? All quizzes are paired with a solid lesson that can show you more about the ideas from the assessment in a manner that is relatable and unforgettable.</p>
                </div>
            </div>
            <div className='topics'>
                {
                    topics.data.map(topic => <Topic
                        handleQuizBtn={handleQuizBtn}
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }

            </div>
        </div>
    );
};

export default Topics;