import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './quiz/components/form';
import Timer from './quiz/components/timer';
import countDown from './quiz/components/countDown';
import Categories from './quiz/components/setCategories';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizMain from './quiz/quizMain';
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


      {/* <Router> */}

        {/* <Categories></Categories> */}
        {/* <Routes> */}

        {/* <Route path='TicTacToe' element={<QuizMain/>}></Route> */}
        {/* <Route path='TicTacToe' element={<Categories/>}><button><img className='logo' src={require("./TicTacToePic.png")}  alt="logo" /></button></Route> */}


        {/* <Route path='TicTacToe' element={<button><img className='logo' src={require("./QuizApp.jpg")} alt="logo" /></button>}></Route> */}
       

        {/* </Routes> */}

        {/* <button><img className='logo' src={require("./QuizApp.jpg")} alt="logo" /></button> */}
        
      {/* </Router> */}
      

      <PlayGround></PlayGround>


    </div>
  );
}

export default App;
