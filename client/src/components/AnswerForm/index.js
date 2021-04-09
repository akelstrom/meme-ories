import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_ANSWER } from '../../utils/mutations';


const AnswerForm = ({ questionId, setQuestionIndex, questionIndex, questionsArray }) => {

    const [answerBody, setBody] = useState('');
    //const [characterCount, setCharacterCount] = useState(0);

    //Declare the necessary mutation variables in the functional component with the following code:
    const [addAnswer, { error }] = useMutation(ADD_ANSWER);

    const handleChange = event => {
        
            setBody(event.target.value);
            console.log(answerBody)
        
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        if(!answerBody) {
          alert('you must provide an answer!')
        }
        //To prevent any unexpected crashes, you'll also want to wrap this in a try...catch statement.
        try {
            //add reaction to database, getting thoughtId from props 
            await addAnswer ({
                variables: { answerBody, questionId }
            });
        
            setBody('')
            
        } catch(e) {
            console.error(e);
        }

        // set it to less than 4 so user is only answering 5 questions
        
        // if (questionIndex < 4) {
        //   setQuestionIndex(questionIndex+=1)
        // } else {
        //   alert("you have answered all the questions")
        // }
        
        
    };

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Enter your answer..."
          value= {answerBody}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AnswerForm;