import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic, handleQuizBtn }) => {
    const { logo, name, total, id } = topic
    return (
        <div className='topic'>

            <img src={logo} alt="" />
            <h3>   {name}</h3>
            <Link to={`/quiz/${id}`}>
                <button onClick={() => handleQuizBtn(id)}
                    className='practice-btn'>Start Practice


                </button>
            </Link>
        </div>
    );
};

export default Topic;