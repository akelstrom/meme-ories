import React, {useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_QUESTIONS } from '../utils/queries';
import Question from '../components/Question';
import AnswerForm from '../components/AnswerForm';
import AnswerList from '../components/AnswerList';
import Leaderboard from '../components/Leaderboard';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  //This is similar to the query logic that you used on the homepage. The variables loading and data are destructured from the useQuery Hook
  //The loading variable is then used to briefly show a loading <div> element, and the data variable is used to populate a thought object (data.thought)
  //The useQuery Hook was given a second argument in the form of an object. This is how you can pass variables to queries that need them. The property on the variables object will become the parameters in the GraphQL query.

  const { loading, data } =  useQuery(QUERY_QUESTIONS);

  const questionsArray = data?.questions || {};
  console.log(questionsArray)
  console.log("questionArray Length:"+ questionsArray.length)

  const [questionIndex, setQuestionIndex] = useState(0); 

  const question = questionsArray[questionIndex]

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }

  const handleClick = () => {
    if (questionIndex < 11){
      setQuestionIndex(questionIndex + 1)
    } else {
      setQuestionIndex(0)
    }
  }

  if (!Auth.loggedIn()) {
    return <Redirect to="/" />
  }

  if (!navigator.onLine) {
    return <Leaderboard />
  }

  return (

  
    <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
            <Question question = {question} questionText = {questionsArray[questionIndex].questionText} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg= {4} className="gridItem">
            <Leaderboard/>

</Grid>
            <Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
            <AnswerList answers = {questionsArray[questionIndex].answers} questionId={questionsArray[questionIndex]._id} />
            <AnswerForm  questionsArray = {questionsArray} questionIndex = {questionIndex} setQuestionIndex = {setQuestionIndex} questionId = {questionsArray[questionIndex]._id}/> 
            <button value = "Next" onClick = {handleClick}>Next Meme</button>
          </Grid>

  

</Grid>



    
  

    {/* this is where the Answer component will go... we need to loop throught them*/}
    
    </Container>
    
  );
};

export default Dashboard;