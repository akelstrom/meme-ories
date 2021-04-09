// on answer submit render the answerlist component 

// vote component should be displayed on the answerlist component 


import React from 'react';
//import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/react-hooks';
import { ADD_VOTE } from '../../utils/mutations';


//The AnswerList component will be given the answer array as a prop being passed from dashboard question  ... This array can then be mapped into a list of <p> elements. Each answer also includes the username and vote component. Should we allow a click on usernae to go to the user's profile page?? 

const AnswerList = ({ answers, questionId }) => {

  console.log(answers)

  const [addVote, {error}] = useMutation(ADD_VOTE);

  const handleClick =  event => {
    //console.log("clicked")
    const answerId = event.target.value 
    let voteCount
    
    const getVoteCount = async (voteCount) =>{

      

      if (!parseInt(event.target.name)) {
         voteCount = 1
      } else {
         voteCount = parseInt
        (event.target.name) +1
      }
      try { 
        await addVote ({
           variables: { questionId, answerId, voteCount }
       });

       //setBody('')
   
     } catch(e) {
       console.error(e);
       console.log(error)
     }
      
      console.log("current vote count:" + voteCount)
      console.log("answerId:" + answerId)
      console.log("questionId:" + questionId)


    }

    getVoteCount(voteCount);
    
    
  }
  

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
                vote count: {answer.votes} {' | '}
                <button name={answer.votes} value={answer._id} onClick={handleClick}>add vote</button>
            </p>
            ))}
        </div>
    </div>
  );
};

export default AnswerList;