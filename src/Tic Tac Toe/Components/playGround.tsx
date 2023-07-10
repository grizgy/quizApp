import './playGround.css';
import Square from './square';
import { useState, useEffect } from 'react';

function PlayGround () {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [xWin, setXWinner] = useState(0)
    const [oWin, setOWinner] = useState(0)
    

    function calculateWinner(squares : string[]) {

        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return "The winner is: " + squares[a];
          }
        }

        if(tied) {
          return "Game is tied";
        }

        return null;
      }

      

      const ifTied = () => {

        let isFilled : boolean = true;
        
        squares.forEach(square => {
          if(square === null)
          isFilled = false;
        }
        )

        if(isFilled) {

        }

        return isFilled;

      }
        
      const tied = ifTied();
      let winner = calculateWinner(squares)

      let gameStatus;
        if (!winner) {
            gameStatus = "Next player: " + (xIsNext ? "X" : "O");
        } else {
          gameStatus = "";


        }

        useEffect (() => {

          if(!tied) {
            if (winner) {
              if(winner==="The winner is: X") {
                setXWinner(xWin+1)
              } else {
                setOWinner(oWin+1)
              }
            }
          }
    
       
          
        } , [winner]

        )



    function handleClick(i : number) {

        if (squares[i] || calculateWinner(squares)) {
            return;
          }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }

        setXIsNext(!xIsNext)
        setSquares(nextSquares);

      }

      function startNewGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }

      const createBoard = (width : number, height : number) => {

        let counter = 1;
        const board = [];
        for (let row = 0; row < height; row++) {
            const currentRow = [];
            for (let col = 0; col < width; col++) {
            currentRow.push(counter++);
            }
            board.push(currentRow);
        }

        return board;

    }

    const [board, setBoard] = useState(createBoard(3, 3));

    return (      

        <div className="container">

      <header>
      <div>X: {xWin}</div>
      <div>0: {oWin}</div>
      </header>

        <div className="status">{gameStatus}</div>

            {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`board-row`}> {
                    row.map((cell, cellIDx) =>  (
                        <Square key={cellIDx}  value={squares[cell-1]} onSquareClick={() => handleClick(cell-1)}/>
                    ))
                }</div>
            ))}

        <div >{(winner || tied)? <div className='showWinner'>
        <div>{winner}</div>
        <div className='buttons'>
        <button onClick={startNewGame}>New game</button>
        <button>Main menu</button>
        </div>
       
        </div> : <div></div>}</div>
        
        

        </div>
    );
}

export default PlayGround;