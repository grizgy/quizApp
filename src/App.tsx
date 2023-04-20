import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/form'
import Timer from './components/timer'
import CountDown from './components/countDown'
import Categories from './setCategories';

function App() {
  let [showComponent, setShowComponent] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState([]);
  
    var allQuizData;
    var number = 5;

    const fetchData = () => {
      const quizApi = `https://the-trivia-api.com/api/questions?limit=${number}`;
      const getQuizApi = axios.get(quizApi)
  
      axios.all([getQuizApi]).then(
        axios.spread((...allData) => {
          allQuizData = allData[0].data
          
          setQuizQuestion(allQuizData)

          console.log(allQuizData)

        })
      )
      
    }
  
    useEffect(() => {
      setInterval(() => {
        setShowComponent(!showComponent);
      }, 4500);
      fetchData()
    }, [])

  return (
    <div className="App">

      {/* {!showComponent? <Timer/> : <CountDown/>}
      {!showComponent? <Timer/> : <Form value={quizQuestion} index={1}/>} */}

      <Categories></Categories>

    </div>
  );
}

export default App;
