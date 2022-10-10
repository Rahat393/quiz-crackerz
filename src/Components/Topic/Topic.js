import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div className='topic'>

            <img src={logo} alt="" />
            <h3>nmae : {name}</h3>
        </div>
    );
};

export default Topic;