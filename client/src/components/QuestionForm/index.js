import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_QUESTION } from '../../utils/mutations';


const QuestionForm = () => {

    const [questionText, setQuestionText] = useState('');
    //const [characterCount, setCharacterCount] = useState(0);

    //Declare the necessary mutation variables in the functional component with the following code:
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

    const handleChange = event => {
        
            setQuestionText(event.target.value);
            console.log(questionText)
        
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        if(!questionText) {
          alert('you must provide an answer!')
        }
        //To prevent any unexpected crashes, you'll also want to wrap this in a try...catch statement.
        try {
            //add reaction to database, getting thoughtId from props 
            await addQuestion ({
                variables: { questionText }
            });
        
            setQuestionText('')
            
        } catch(e) {
            console.error(e);
        }

        
    };

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Enter your question..."
          value= {questionText}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;