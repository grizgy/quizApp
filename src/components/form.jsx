import React, { Component} from 'react';
import './form.css';

class Form extends Component {
    state = { 
        counter : 0,
        // correct: 0,
        // wrong : 0,

     }; 
    render() { 
      
        return (

            <div className='form'>
            <div>
            <h2>Question 2/4</h2>
            <span>{this.props.question}</span>
            </div>
           
            <div className='answer'>
                <button className='btn btn-secondary btn-sm'>{this.props.answer1}</button>
                <button className='btn btn-secondary btn-sm'>{this.props.answer2}</button>
                <button className='btn btn-secondary btn-sm'>{this.props.answer3}</button>
                <button className='btn btn-secondary btn-sm'>{this.props.answer4}</button>
            </div>

            </div>
        );
    }
}


export default Form;