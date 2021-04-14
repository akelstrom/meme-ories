import React from 'react';
import './Question.css';

const Question = ({ questionText, question, questionIndex, setQuestionIndex }) => {
    
    return (
        <div>
            <h3> <img 
              src={require(`../../images/${questionText}.jpg`).default} alt="meme" className="meme"/></h3>
            
        </div>
    );
}; 


export default Question;