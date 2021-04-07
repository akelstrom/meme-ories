import React, {useState} from 'react';

//import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import { QUERY_QUESTIONS } from '../utils/queries';

//eventually import the AnswerList from components

//import Auth from '../utils/auth';

// eventually import the AnswerForm from components

const Question = () => {

  

  //This is similar to the query logic that you used on the homepage. The variables loading and data are destructured from the useQuery Hook
  //The loading variable is then used to briefly show a loading <div> element, and the data variable is used to populate a thought object (data.thought)
  //The useQuery Hook was given a second argument in the form of an object. This is how you can pass variables to queries that need them. The property on the variables object will become the parameters in the GraphQL query.

  const { loading, data } =  useQuery(QUERY_QUESTIONS);

  // the data returns an array of questions 
  //console.log(data)

  const questionsArray = data?.questions || {};
  console.log(questionsArray)
  console.log("questionArray Length:"+ questionsArray.length)
  //console.log(questionsArray.length)
  // we are going to need to use state when we generate a random question to display
  // the initial state will be the first randomly generated question 
  // question, setQuestion??
  //const [questionText, setQuestion] = useState('');
  // will also need state for the shuffle button to change the state of the indexArray
 let index= 0
 let indexArray = [index]

 const createIndexArray =  () => {
     while (indexArray.length < questionsArray.length) {
         indexArray.push(index=index+1)
     }
 }
createIndexArray();
console.log("indexArray:" +indexArray);

// the index array refects the index numbers of the questionsArray
// on page load, create index array is called 
// index array is then shuffled and spliced so that we get 5 random non reapeating index numbers that will be used to generate/render the 5 questions 

function shuffle() {
    indexArray = indexArray.sort(function(a, b){return 0.5 - Math.random()}).slice(0,4);
    //console.log(indexArray)
}

shuffle();

console.log("shuffled indexArray:" + indexArray)

 let i = 0
 let questionArrayIndex = indexArray[i]
const handleClick = () =>{
     console.log("clicked")

     
  
   

}

  

  

  if (loading) {
    return <div>Loading...</div>
  }


  return (

    <div>
        <div>This is the question on the gameboard page</div>
        <div>{questionsArray[`${questionArrayIndex}`].questionText}</div>
        <button onClick= {handleClick}> Generate Question</button>
    </div>
    
    
  );
};

export default Question;