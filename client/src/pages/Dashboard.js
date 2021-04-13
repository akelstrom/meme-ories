import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_QUESTIONS } from '../utils/queries';
import { Link } from 'react-router-dom';

const MemeList = () => {

    const { loading, data } =  useQuery(QUERY_QUESTIONS);

    const questionsArray = data?.questions || {};

    console.log("apples", questionsArray);


  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }


    return (
        <div>
            <p>This is the dashboard now!</p>
            {questionsArray && questionsArray.map(question => (
               
            <Link to={`/question/${question.question._id}`}><img width="40%" height="auto" src={require(`../images/${question.questionText}.jpg`).default} alt="meme" key={question.questionText}/> </Link>

            ))}
            {/* <img src={require(`../images/${1}.jpg`).default} /> */}
        </div>
    )
}

export default MemeList;