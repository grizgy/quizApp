import { useState } from 'react';
import './playGround.css';
import CircleIcon from '@mui/icons-material/Circle';

import Box from '@mui/material/Box';

function PlayGroundDAB () {

    var size = 2;

    const [lines, setLines] = useState(new Set())
    const [red, setRed] = useState(new Set())
    const [blue, setBlue] = useState(new Set())
    const [blueIsNext, setNext] = useState(true);
    const [redLine, setRedLine] = useState(new Set())
    const [blueLine, setBlueLine] = useState(new Set())
    const [box, setBox] = useState(new Set())
    const [gameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState('')   

    const createBoard = (width : number, height : number) => {

        let counter = 1;
        const board = [];
        for (let row = 0; row < height * 2 + 1; row++) {
            const currentRow = [];
            for (let col = 0; col < width * 2 + 1; col++) {

                if ((row % 2 !== 0) && (col % 2 != 0) && !box.has(counter)) {
                    box.add(counter)
                }

            currentRow.push(counter++);
            }
            board.push(currentRow);
        }

        return board;

    }

    const [board, setBoard] = useState(createBoard(size, size));  

    function startNewGame () {
        setLines(new Set());
        setRed(new Set());
        setBlue(new Set());
        setNext(true);
        setRedLine(new Set());
        setBlueLine(new Set());
        setBox(new Set());
        setGameOver(false)
        setWinner('')
    }



    function addLine (input : number) {

        if(blueIsNext) {
            blueLine.add(input)
        } else {
            redLine.add(input)
        }

        if(!lines.has(input)){
        lines.add(input)    

        setNext(!blueIsNext)
        determineColor(input)
        console.log(input)
        }


        if ((red.size + blue.size) == size * size) {

            if(blue.size > red.size) {
                setWinner("BLUE")
            } else if(red.size > blue.size) {
                setWinner("RED")
            } else {
                setWinner("TIE")
            }

            setGameOver(true);   
        }

    }

    function determineColor (cell : number) {

        //left vertical lines caltulation
            if(lines.has(cell+2) && lines.has(cell + 2*(size + 1)) && lines.has(cell - 2*size) && !blue.has(cell+1) && !red.has(cell+1) && box.has(cell+1)){

                if(blueIsNext){
                    blue.add(cell+1);
                } else {
                    red.add(cell+1)
                }

                console.log("left vertical " + (cell+1))

        }

        // //right vertical lines caltulation
            if(lines.has(cell-2) && lines.has(cell - 2*(size + 1)) && lines.has(cell + 2*size) && !blue.has(cell-1) && !red.has(cell-1) && box.has(cell-1)){

                if(blueIsNext){
                    blue.add(cell-1);
                } else {
                    red.add(cell-1)
                }

                console.log("right vertical " + (cell-1))

            }



        //upper hotizontal lines caltulatio
            if(lines.has(cell+2*size) && lines.has(cell+2*(size + 1)) && lines.has(cell + 2*((2*size) + 1)) && !blue.has(cell+2*size+1) && !red.has(cell+2*size+1) && box.has(cell+2*size+1)){

                if(blueIsNext){
                    blue.add(cell+2*size+1);
                } else {
                    red.add(cell+2*size+1)
                }

                console.log("upper horizontal " + (cell+2*size+1))

        }


        //lower hotizontal lines caltulation
            if(lines.has(cell-2*size) && lines.has(cell - 2*(size + 1)) && lines.has(cell - 2*((2*size) + 1)) && !blue.has(cell-2*size-1) && !red.has(cell-2*size-1) && box.has(cell-2*size-1)){

                if(blueIsNext){
                    blue.add(cell-2*size-1);
                } else {
                    red.add(cell-2*size-1)
                }

                console.log("lower horizontal " + (cell-2*size-1))

            }

    }


    return (

        <div>

        <div>Blue: {blue.size}</div> <div>Red: {red.size}</div>

        <div className='container'>

                {blueIsNext? <div className='blue'>{"Blue"}</div> : <div className='red'>{"Red"}</div>} 

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {

                    row.map((cell, cellIDx) =>  (

                    rowIDx % 2 == 0? 

                    (cellIDx % 2 != 0) ? 
                    
                    <div key={cellIDx} className={`horizontal cell  ${redLine.has(cell) ? 'red' : ''} ${blueLine.has(cell) ? 'blue' : ''} `} onClick={()=> addLine(cell)}>{}</div> :
                    
                    <CircleIcon key={cellIDx} 
                    className={`cell`} sx={{ fontSize: 1, border: 2}} onClick={()=> console.log(cell)}>{}</CircleIcon>

                         : 
                    (cellIDx % 2 != 0) ? 

                    <Box key={cellIDx} className={`cell ${red.has(cell) ? 'red' : ''} ${blue.has(cell) ? 'blue' : ''} `} 
                    component="span" sx={{width: 70, height: 70, p: 2, border: '1px none grey' }} 
                    >{cell}</Box> :
                    <div key={cellIDx}  className={`vertical cell  ${redLine.has(cell) ? 'red' : ''} ${blueLine.has(cell) ? 'blue' : ''} `}   onClick={()=> addLine(cell)} >{}</div>

                    ))
                }</div>
            ))}
           
            </div>


            <div >{gameOver? <div className='showWinner'>
            <div>{winner}</div>
            <div className='buttons'>
            <button onClick={startNewGame}>New game</button>
            <button>Main menu</button>
            </div>
       
        </div> : <div></div>}</div>



        </div>
    )

}

export default PlayGroundDAB;