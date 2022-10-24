import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/form'
import Timer from './components/timer'
import CountDown from './components/countDown'

function App() {
  let [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 4500);
  }, [])

    const [quizQuestion, setQuizQuestion] = useState([]);
  
    const fetchData = () => {
      const quizApi = 'https://the-trivia-api.com/api/questions?limit=5';
      const getQuizApi = axios.get(quizApi)
  
      axios.all([getQuizApi]).then(
        axios.spread((...allData) => {
          const allQuizData = allData[0].data[0]
          
          setQuizQuestion(allQuizData)

          console.log(allQuizData)
          // console.log(getQuizApi)
          // console.log(quizQuestion.data.question)

        })
      )
      
    }
  
  

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      {/* <div  className='cd'><CountDown></CountDown></div> */}
      {!showComponent && <Timer/>}
      {showComponent && <CountDown/>}
      {showComponent && <Form question={quizQuestion.question} answer1={quizQuestion.correctAnswer} 
      answer2={quizQuestion.incorrectAnswers[0]} 
      answer3={quizQuestion.incorrectAnswers[1]} 
      answer4={quizQuestion.incorrectAnswers[2]} ></Form>
      } 
    </div>
  );
}

export default App;
