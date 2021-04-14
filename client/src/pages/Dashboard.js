import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_QUESTIONS } from "../utils/queries";
import Question from "../components/Question";
import AnswerForm from "../components/AnswerForm";
import AnswerList from "../components/AnswerList";
import Leaderboard from "../components/Leaderboard";
import Header from "../components/Header";
import Auth from "../utils/auth";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  //This is similar to the query logic that you used on the homepage. The variables loading and data are destructured from the useQuery Hook
  //The loading variable is then used to briefly show a loading <div> element, and the data variable is used to populate a thought object (data.thought)
  //The useQuery Hook was given a second argument in the form of an object. This is how you can pass variables to queries that need them. The property on the variables object will become the parameters in the GraphQL query.

  const { loading, data } = useQuery(QUERY_QUESTIONS);

  const questionsArray = data?.questions || {};
  console.log(questionsArray);
  console.log("questionArray Length:" + questionsArray.length);

  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questionsArray[questionIndex];

  if (loading) {
    console.log("loading");
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    if (questionIndex < 11) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
    }
  };

  if (!Auth.loggedIn()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className="gridItem">
            <button value="Next" onClick={handleClick} className="link">
              Next Meme
            </button>
            <Question
              question={question}
              questionText={questionsArray[questionIndex].questionText}
            />
            <Leaderboard />
          </Grid>
          <Grid item xs={12} sm={6} className="gridItem">
            <AnswerList
              answers={questionsArray[questionIndex].answers}
              questionId={questionsArray[questionIndex]._id}
            />
            <AnswerForm
              questionsArray={questionsArray}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
              questionId={questionsArray[questionIndex]._id}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
