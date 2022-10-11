import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Qus 1: what is purpose of react router?</h3>
            <p>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>

            <h3>Qus 2: How does context API work?</h3>
            <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
    );
};

export default Blog;