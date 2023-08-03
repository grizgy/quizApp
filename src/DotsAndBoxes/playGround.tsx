import { useState, useEffect } from 'react';
import './playGround.css';
import CircleIcon from '@mui/icons-material/Circle';

import Box from '@mui/material/Box';

function PlayGroundDAB () {

    var size = 6;

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

    const [board, setBoard] = useState(createBoard(size, size));
    const [input, setInput] = useState(0);
    const [lines, setLines] = useState(new Set())
    const [red, setRed] = useState(new Set())
    const [blue, setBlue] = useState(new Set())
    const [blueIsNext, setNext] = useState(true);


    function addLine (input : number) {

        if(!lines.has(input)){
        setInput(input)    
        setNext(!blueIsNext)
        lines.add(input)
        determineColor(input)
        console.log(input)
        }

    }

    function determineColor (cell : number) {

        // //left vertical lines caltulation
            if(lines.has(cell+2) && lines.has(cell + 2*(size + 1)) && lines.has(cell - 2*size) ){

                if(blueIsNext){
                    blue.add(cell+1);
                } else {
                    red.add(cell+1)
                }

        // console.log(cell)
        // console.log(cell + 1)
        // console.log(cell - 1)
        }

        // //right vertical lines caltulation
            if(lines.has(cell-2) && lines.has(cell - 2*(size + 1)) && lines.has(cell + 2*size)){

                if(blueIsNext){
                    blue.add(cell-1);
                } else {
                    red.add(cell-1)
                }

            }



        //upper hotizontal lines caltulation
            if(lines.has(cell+2*size) && lines.has(cell+2*(size + 1)) && lines.has(cell + 2*((2*size) + 1))){

                if(blueIsNext){
                    blue.add(cell+2*size+1);
                } else {
                    red.add(cell+2*size+1)
                }

        }


        //lower hotizontal lines caltulation
            if(lines.has(cell-2*size) && lines.has(cell - 2*(size + 1)) && lines.has(cell - 2*((2*size) + 1))){

                if(blueIsNext){
                    blue.add(cell-2*size-1);
                } else {
                    red.add(cell-2*size-1)
                }

            }

    }


      const [clicked, setClicked] = useState(-1);

    useEffect( () => {
        determineColor(clicked)
    }, [clicked])
  

    return (
        <div className='container'>

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {

                

                    row.map((cell, cellIDx) =>  (

                    rowIDx % 2 == 0? 

                    (cellIDx % 2 != 0) ? 
                    
                    <div key={cellIDx} className='horizontal cell' onClick={()=> addLine(cell)}>{}</div> :
                    
                    <CircleIcon key={cellIDx}  onClick={()=> console.log(cell)}
                    className={`cell`} sx={{ fontSize: 1, border: 2}}>{}</CircleIcon>

                         : 
                    (cellIDx % 2 != 0) ? 

                    <Box key={cellIDx} className={`cell ${red.has(cell) ? 'red' : ''} ${blue.has(cell) ? 'blue' : ''} `} 
                    component="span" sx={{width: 70, height: 70, p: 2, border: '1px none grey' }} onClick={()=> console.log(cell)}
                    >{cell}</Box> :
                    <div key={cellIDx} className='vertical cell ' onClick={()=> addLine(cell)} >{}</div>

                    ))
                }</div>
            ))}
           
            </div>
    )

}

export default PlayGroundDAB;