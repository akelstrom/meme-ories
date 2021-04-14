import React, { useState } from 'react';
import './AnswerForm.css'
import { useMutation } from '@apollo/react-hooks';
import { ADD_ANSWER } from '../../utils/mutations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const AnswerForm = ({ questionId, setQuestionIndex, questionIndex, questionsArray }) => {

    const [answerBody, setBody] = useState('');
    

    //Declare the necessary mutation variables in the functional component with the following code:
    const [addAnswer] = useMutation(ADD_ANSWER);

    const handleChange = event => {
        
            setBody(event.target.value);
        
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        if(!answerBody) {
          toast.error('❕ Error: Please Try Again');
        }
        //To prevent any unexpected crashes, you'll also want to wrap this in a try...catch statement.
        try {
            await addAnswer ({
                variables: { answerBody, questionId }
            });
        
            setBody('')
            
        } catch(e) {
            console.error(e);
            toast.error('❕ Error: Please Try Again');
        }
  
    };

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Enter your caption..."
          value= {answerBody}
          onChange={handleChange}
          className="caption-textarea"
        ></textarea>

        <button className="link" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AnswerForm;