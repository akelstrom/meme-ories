
import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {useQuery } from '@apollo/react-hooks';
import { ADD_VOTE } from '../../utils/mutations';
import { ADD_SCORE } from '../../utils/mutations';
import {QUERY_ME} from '../../utils/queries';
import './AnswerList.css';
import { AiFillLike } from "react-icons/ai";

const AnswerList = ({ answers, questionId }) => {

  const {loading, data } =  useQuery(QUERY_ME);

  let me
  if (data) {
    me = data.me.username
  }

  // console.log(data);
  // console.log("me:" + me)
  // console.log(answers)

  const [addVote, {error}] = useMutation(ADD_VOTE);
  const [addScore, {error: scoreError}] = useMutation(ADD_SCORE);

   //const [buttonText, setButtonText] = useState('add vote');
   //const [buttonState, setButtonState] = useState('')

   // get parsed item from local storage if exists 
   // if it doesn't exits set to empty array 
   const answerIdArray = JSON.parse(localStorage.getItem("clicked answers")) || []
  
  
  const handleClick =  event => {
    
    const answerId = event.target.value 
    const username = event.target.id
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
   
     } catch(e) {
       console.error(e);
       console.log(error)
     }

     try {
       await addScore ({
         variables: { username }
       });
     } catch (e) {
       console.error(e)
       console.log(scoreError)
     }

    

    }

    getVoteCount(voteCount);  

    
    // store clicked answers in an array of Id values in local storage 
     answerIdArray.push(event.target.value);
     console.log(answerIdArray);
     localStorage.setItem("clicked answers", JSON.stringify(answerIdArray));


      event.target.setAttribute("disabled", true);
      event.target.innerHTML = "voted"
  
    
  }

  console.log(answers)
  console.log(answerIdArray)
  const answerIds = answers.map(answer => answer._id);
  console.log(answerIds);

  // if answersIds have a matched value in answerIdArray 
  function arrayMatch(answerIdArray, answerIds) {
    var arr = []
    for(var i=0; i< answerIdArray.length; i++) {
      for(var j =0; j<answerIds.length; j++) {
        if(answerIdArray[i]==answerIds[j]) {
          arr.push(answerIdArray[i])
        }
      }
    }
    return arr
  }
  //console.log("matches",arrayMatch(answerIdArray, answerIds));
  const matches = arrayMatch(answerIdArray,answerIds);
  console.log("matches:",matches)

  

  

  return (
    <div>
        <div>
            <h1 className="caption-header">Captions:</h1>
        </div>
        <div className="caption-form">
        { answers &&
            answers.map((answer, index) => (
            <p key={index} className="caption-line">
                <span className="caption-body">"{answer.answerBody}"</span> <span className="divdier"></span> <br />
                <span className="posted-by">posted by: <span className="username">{answer.username} </span></span>
                {/*answer ID: {answer._id} {'|'}*/}
                <span className="vote-count">vote count: {answer.votes}</span>
                {me!=answer.username && 
                <button  className="like-button" disabled= {matches.includes(answer._id)} id={answer.username} name={answer.votes} value={answer._id} onClick={handleClick}><AiFillLike/></button>}
            </p>
            ))}
        </div>
    </div>
  );
};

export default AnswerList;