import React, {useState,useEffect} from 'react';
import './form.css';

function Form (props : any) {
    
        const [counter, setCounter] = useState(0);
        let quizQuestion = props.value;

        const correct = quizQuestion[counter].correctAnswer;
        const wrong = quizQuestion[counter].incorrectAnswers;
        wrong.splice(Math.floor(Math.random() * (wrong.length + 1)), 0, correct);


         useEffect ( () => {
            console.log(wrong);
            console.log(correct);
         } , [counter]
         )

        const incrementOnClick = (data : any) => {
            setCounter(counter+1);  
             if(correct===data) {
                console.log("Correct answer");
             }          
        }; 

        return (

            <div className='form'>
            <div>
            <h2>Question {counter + 1}/5</h2>
            <span>{quizQuestion[counter].question}</span>
            </div>
           
            <div className='answer'>

                {/* <button className='btn btn-secondary btn-sm' onClick={incrementOnClick} >{correct}</button> */}
                {wrong.map( (data : any ) => <button className='btn btn-secondary btn-sm' onClick={()=>incrementOnClick(data)}>{data}</button>)}
                
            </div>

            </div>
        );
}


export default Form;