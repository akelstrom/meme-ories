import React, {useState} from 'react';

//import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import { QUERY_QUESTIONS } from '../utils/queries';

import AnswerForm from '../components/AnswerForm';
//eventually import the AnswerList from components

//import Auth from '../utils/auth';

// eventually import the AnswerForm from components

const Question = () => {

 

  //This is similar to the query logic that you used on the homepage. The variables loading and data are destructured from the useQuery Hook
  //The loading variable is then used to briefly show a loading <div> element, and the data variable is used to populate a thought object (data.thought)
  //The useQuery Hook was given a second argument in the form of an object. This is how you can pass variables to queries that need them. The property on the variables object will become the parameters in the GraphQL query.

  const { loading, data } =  useQuery(QUERY_QUESTIONS);

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }
  // the data returns an array of questions 
  //console.log(data)

  const questionsArray = data?.questions || {};
  console.log(questionsArray)
  console.log("questionArray Length:"+ questionsArray.length)
  
 let index= 0
 let indexArray = [index]

 const createIndexArray =  () => {
     while (indexArray.length < questionsArray.length) {
         indexArray.push(index+=1)
     }
 }
createIndexArray();
console.log("indexArray:" +indexArray);

// on page load, create index array is called and then shuffle is called to create the shuffledIndexArray
// index array is then shuffled so we get a non reapeating array of index numbers that reflex the index numbers of the questionsArray 
 
let shuffledIndexArray
function shuffle() {

   shuffledIndexArray = indexArray.sort(function(a, b){return 0.5 - Math.random()})
    
}

shuffle();
console.log("shuffled indexArray:" + shuffledIndexArray)

console.log(questionsArray[shuffledIndexArray[0]].questionText)
console.log(questionsArray[shuffledIndexArray[1]].questionText)
console.log(questionsArray[shuffledIndexArray[2]].questionText)
console.log(questionsArray[shuffledIndexArray[3]].questionText)




  return (

    <div>
        <div>This is the question on the gameboard page</div>
        <div>{questionsArray[shuffledIndexArray[0]].questionText}</div>
        <AnswerForm questionId= {questionsArray[shuffledIndexArray[0]]._id}/>
        
       
    </div>
    
    
  );
};

export default Question;