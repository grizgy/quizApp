import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizMain from './quiz/quizMain';
import PlayGround from './Tic Tac Toe/Components/playGround';


function App() {

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
