// on answer submit render the answerlist component 

// vote component should be displayed on the answerlist component 


import React from 'react';
import { Link } from 'react-router-dom';

//The AnswerList component will be given the answer array as a prop being passed from dashboard question  ... This array can then be mapped into a list of <p> elements. Each answer also includes the username and vote component. Should we allow a click on usernae to go to the user's profile page?? 

const AnswerList = ({ answers }) => {

  console.log(answers)

  return (
    <div>
        <div>
            <span>Answers:</span>
        </div>
        <div>
        { answers &&
            answers.map((answer, index) => (
            <p key={index}>
                {answer.answerBody} {'| '}
                posted by: {answer.username} {'|'}
                answer ID: {answer._id} {'|'}
                vote count: {answer.vote}
            </p>
            ))}
        </div>
    </div>
  );
};

export default AnswerList;