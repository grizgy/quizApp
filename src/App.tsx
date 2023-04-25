import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './Quiz/components/form';
import Timer from './Quiz/components/timer';
import CountDown from './Quiz/components/countDown';
import Categories from './Quiz/components/setCategories';
import PlayGround from './Tic Tac Toe/Components/playGround';

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

      {/* <Categories></Categories> */}
      <PlayGround></PlayGround>

    </div>
  );
}

export default App;
