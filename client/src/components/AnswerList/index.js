import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { ADD_VOTE } from "../../utils/mutations";
import { ADD_SCORE } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./AnswerList.css";

const AnswerList = ({ answers, questionId }) => {
  const { data } = useQuery(QUERY_ME);

  let me;
  if (data) {
    me = data.me.username;
  }

  const [addVote, { error }] = useMutation(ADD_VOTE);
  const [addScore, { error: scoreError }] = useMutation(ADD_SCORE);

  // get parsed item from local storage if exists
  // if it doesn't exits set to empty array
  const answerIdArray =
    JSON.parse(localStorage.getItem("clicked answers")) || [];

  const handleClick = (event) => {
    const answerId = event.target.value;
    const username = event.target.id;
    
    let voteCount;

    const getVoteCount = async (voteCount) => {
      if (!parseInt(event.target.name)) {
        voteCount = 1;
      } else {
        voteCount = parseInt(event.target.name) + 1;
      }
      try {
        await addVote({
          variables: { questionId, answerId, voteCount },
        });
      } catch (e) {
        console.error(e);
        console.log(error);
        toast.error("❕ Error: Please Try Again");
      }

      try {
        await addScore({
          variables: { username },
        });
      } catch (e) {
        console.error(e);
        console.log(scoreError);
        toast.error("❕ Oops, Something Went Wrong");
      }
    };

    getVoteCount(voteCount);

    // store clicked answers in an array of Id values in local storage
    answerIdArray.push(event.target.value);
 
    localStorage.setItem("clicked answers", JSON.stringify(answerIdArray));
    event.target.setAttribute("disabled", true);
    event.target.innerHTML = "laughted";
  };

  const answerIds = answers.map((answer) => answer._id);

  // if answersIds have a matched value in answerIdArray
  function arrayMatch(answerIdArray, answerIds) {
    var arr = [];
    for (var i = 0; i < answerIdArray.length; i++) {
      for (var j = 0; j < answerIds.length; j++) {
        if (answerIdArray[i] === answerIds[j]) {
          arr.push(answerIdArray[i]);
        }
      }
    }
    return arr;
  }
  const matches = arrayMatch(answerIdArray, answerIds);

  return (
    <div>
      <div>
        <h1 className="caption-header">Captions:</h1>
      </div>
      <div className="caption-form">
        {answers &&
          answers.map((answer, index) => (
            <p key={index} className="caption-line">
              <span className="caption-body">"{answer.answerBody}"</span>{" "}
              <span className="divdier"></span> <br />

              {/* <span className="posted-by">
                posted by: <span className="username" id="caption-username">{answer.username} </span>
              </span> */}

              <span className="vote-count">laugh count: {answer.votes}</span>
              {me != answer.username && (
                <button
                  className="like-button"
                  disabled={matches.includes(answer._id)}
                  id={answer.username}
                  name={answer.votes}
                  value={answer._id}
                  onClick={handleClick}
                >
                  👍
                </button>
              )}
            </p>
          ))}
      </div>
    </div>
  );
};

export default AnswerList;
