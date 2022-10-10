import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div className='topic'>

            <img src={logo} alt="" />
            <h3> {name}</h3>
            <button className='practice-btn'>Start Practice</button>
        </div>
    );
};

export default Topic;