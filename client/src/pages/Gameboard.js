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

  const questionsArray = data?.questions || {};
  console.log(questionsArray)
  console.log("questionArray Length:"+ questionsArray.length)

  const [questionIndex, setQuestionIndex] = useState(0); 

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }


  return (

  
  <div>
    <div>{questionsArray[questionIndex].questionText}</div>
    <AnswerForm  questionsArray = {questionsArray} questionIndex = {questionIndex} setQuestionIndex = {setQuestionIndex} questionId= {questionsArray[questionIndex]._id}/> 
  </div>
    
    
  );
};

export default Question;