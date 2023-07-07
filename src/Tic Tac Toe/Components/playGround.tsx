import './playGround.css';
import Square from './square';
import { useState, useEffect } from 'react';

function PlayGround () {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [xWin, setXWinner] = useState(0)
    const [oWin, setOWinner] = useState(0)
    

    function calculateWinner(squares : any) {

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
            return squares[a];
          }
        }
        return null;
      }

      const winner = calculateWinner(squares)

      let gameStatus;
        if (!winner) {
            gameStatus = "Next player: " + (xIsNext ? "X" : "O");
        } else {
          gameStatus = "";


        }

        useEffect (() => {
          if (winner) {
            if(winner==="X") {
              setXWinner(xWin+1)
            } else {
              setOWinner(oWin+1)
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

      const themeStyles = {
        backgroundColor : xIsNext ? "black" : "white"
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

        {/* <div style={themeStyles} className="board-row">
            <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>

        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>

        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div> */}


            {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`board-row ${true ? 'X-cell' : ''} ${true ? 'O-cell' : ''}`}> {
                    row.map((cell, cellIDx) =>  (
                        <Square status={false} key={cellIDx}  value={squares[cell-1]} onSquareClick={() => handleClick(cell-1)}/>
                    ))
                }</div>
            ))}

        <div >{winner? <div className='showWinner'>
        <div>The winner is: {winner}</div>
        <div className='buttons'>
        <button onClick={startNewGame}>New game</button>
        <button>Main menu</button>
        </div>
       
        </div> : <div></div>}</div>
        
        

        </div>
    );
}

export default PlayGround;