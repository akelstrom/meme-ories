import React from 'react';


//import { Link } from 'react-router-dom';

  //Here we instruct that the ThoughtList component will receive two props: a title and the thoughts array being render from the profile component in Profile.js and also from the hompage component (the props mean different things depending on where the thoughlist is being rendered)... 
const Question = ({ questionText, question, questionIndex, setQuestionIndex }) => {
    console.log(questionText)
    console.log(question.answers.length)

    // if (question.answers.length = 5) {

    //     setQuestionIndex(questionIndex -1)

    // } 

    return (
        <div>
            <h3> <img width="40%"
             height="auto" src={require(`../../images/${questionText}.jpg`).default} alt="meme" /></h3>
            
        </div>

/* <div>
{questionText &&
  questionText.map((questionText, questionIndex) => {
    <img
      width="40%"
      height="auto"
      src={require(`../../images/${questionText}/${questionIndex}.jpg`).default}
      alt="meme"
      key={questionText}
    />;
  })}
</div> */
    );
}; 


export default Question;