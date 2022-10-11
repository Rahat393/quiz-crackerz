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
        <div className='topics'>

            {
                topics.data.map(topic => <Topic
                    handleQuizBtn={handleQuizBtn}
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }

        </div>
    );
};

export default Topics;