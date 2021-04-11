import React, {useState} from 'react';
import { Container, Grid, Card, CardHeader, CardMedia, CardContent, Button } from '@material-ui/core'


//import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import { QUERY_QUESTIONS } from '../utils/queries';

import Question from '../components/Question';

import AnswerForm from '../components/AnswerForm';

import AnswerList from '../components/AnswerList';

//import Auth from '../utils/auth';

// eventually import the AnswerForm from components

import Leaderboard from '../components/Leaderboard';

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
  

  return (

  <div>
    <Header/>
    <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
          <Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
           Meme Area
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
            Text Area<br/>
            Button Here
            </Grid>
</Grid>
<Grid item xs={12} sm={12} md={8} lg= {8} className="gridItem">
<Leaderboard/>
Find Friends Here
</Grid>
</Grid>

</Container>
    <Question question = {question} questionText = {questionsArray[questionIndex].questionText} />
  

    {/* this is where the Answer component will go... we need to loop throught them*/}
    <AnswerList answers = {questionsArray[questionIndex].answers} questionId={questionsArray[questionIndex]._id} />
    <AnswerForm  questionsArray = {questionsArray} questionIndex = {questionIndex} setQuestionIndex = {setQuestionIndex} questionId = {questionsArray[questionIndex]._id}/> 
    <button value = "Next" onClick = {handleClick}>Next Meme</button>
    <Leaderboard />
  </div>
  );
};

export default Dashboard;