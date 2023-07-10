import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizMain from './quiz/quizMain';
import PlayGround from './Tic Tac Toe/Components/playGround';

import axios from 'axios';
import { useState, useEffect } from 'react';

import PlayGroundDAB from './DotsAndBoxes/playGround';

import PlayGroundS from './snake/components/playGround';


function App() {

  // var allQuizData;
  // let [showComponent, setShowComponent] = useState(false);
  //   const [quizQuestion, setQuizQuestion] = useState([]);

  // const fetchData = () => {
  //   const quizApi = `https://the-trivia-api.com/api/questions?limit=${number}`;
  //   const getQuizApi = axios.get(quizApi)

  //   axios.all([getQuizApi]).then(
  //     axios.spread((...allData) => {
  //       allQuizData = allData[0].data
        
  //       setQuizQuestion(allQuizData)

  //       console.log(allQuizData)

  //     })
  //   )
    
  // }

  // const fetchQuotes = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://famous-quotes4.p.rapidapi.com/random`,
  //       {
  //         headers: {
  //           'X-RapidAPI-Key': '3417bf7639mshe0c65d7ec030c00p11736ajsn3cad60eff9fa',
  //           'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  //         },
  //         params: {category: 'all', count: '10'}
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  // useEffect(() => {
  //   fetchQuotes()
  // }, [])



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
      

      {/* <PlayGround></PlayGround> */}


      <PlayGroundDAB></PlayGroundDAB>

      {/* <PlayGroundS></PlayGroundS> */}

    </div>
  );
}

export default App;
