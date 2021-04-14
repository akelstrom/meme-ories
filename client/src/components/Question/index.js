import React from 'react';
import './Question.css';


const Question = ({ questionText, question, questionIndex, setQuestionIndex }) => {
    return (
        <div className="meme-container">
           <img className="meme" src={require(`../../images/${questionText}.jpg`).default} alt="meme" />
        </div>
    );
}; 


export default Question;