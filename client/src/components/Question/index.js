import React from 'react';

//import { Link } from 'react-router-dom';

  //Here we instruct that the ThoughtList component will receive two props: a title and the thoughts array being render from the profile component in Profile.js and also from the hompage component (the props mean different things depending on where the thoughlist is being rendered)... 
const Question = ({ question }) => {
    console.log(question)
    //We conditionally render JSX by checking to see if there's even any data in the thoughts array first. If there's no data, then we return a message stating that. If there is data, then we return a list of thoughts using the .map() method
    // if (!questions.length) {
    //     return <h3> no question loaded </h3>;
    // }

    return (
        <div>
            <h3>{question} THIS WILL BE THE MEME INSTEAD OF QUESTION</h3>
            
        </div>
    );
}; 


export default Question;