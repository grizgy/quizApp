import { useState } from 'react';
import './playGround.css';
import CircleIcon from '@mui/icons-material/Circle';

import Box from '@mui/material/Box';

function PlayGroundDAB () {

    const createBoard = (width : number, height : number) => {

        let counter = 1;
        const board = [];
        for (let row = 0; row < height * 2 + 1; row++) {
            const currentRow = [];
            for (let col = 0; col < width * 2 + 1; col++) {
            currentRow.push(counter++);
            }
            board.push(currentRow);
        }

        return board;

    }

    const [board, setBoard] = useState(createBoard(6, 6));
    const [show, setShow] = useState(true);

    function marked (position: number) { 
            console.log(position)
            console.log(show)
            setShow(!show)
    }

    const [lines, setLines] = useState(new Set())
    const [red, setRed] = useState(new Set())
    const [blue, setBlue] = useState(new Set())


    function addLine (input : number) {
        lines.add(input)
        console.log(input)

        // for (let i = 0; i < lines.size; i++) {
        //     console.log(i)
        // }

    }
    

    function addRed (input : number) {
        red.add(input);
    }

    function addBlue (input : number) {
        blue.add(input);
    }

    function determineColor (cell : number) {

        

        if(lines.has(cell+1) && lines.has(cell-1)){
            blue.add(cell);

        console.log(cell)
        console.log(cell + 1)
        console.log(cell - 1)

        }

    }


    return (
        <div className='container'>

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {

                

                    row.map((cell, cellIDx) =>  (

                    rowIDx % 2 == 0? 

                    (cellIDx % 2 != 0) ? 
                    
                    <div key={cellIDx} className='horizontal cell' onClick={()=> addLine(board[rowIDx][cellIDx])}>{}</div> :
                    
                    <CircleIcon key={cellIDx} 
                    className={`cell`} sx={{ fontSize: 1, border: 2}} onClick={()=> marked(board[rowIDx][cellIDx])}>{}</CircleIcon>

                         : 
                    (cellIDx % 2 != 0) ? 

                    <Box key={cellIDx} className={`cell ${red.has(cell) ? 'red' : ''} ${blue.has(cell) ? 'blue' : ''} `} 
                    component="span" sx={{width: 70, height: 70, p: 2, border: '1px none grey' }} onClick={() => determineColor(cell)}
                    >{cell}</Box> :
                    <div key={cellIDx} className='vertical cell ' onClick={()=> addLine(board[rowIDx][cellIDx])} >{}</div>

                    ))
                }</div>
            ))}
           
            </div>
    )

}

export default PlayGroundDAB;