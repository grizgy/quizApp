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

    const [board, setBoard] = useState(createBoard(7, 7));
    const [show, setShow] = useState(false);

    function displayLines (width : number, height : number) {
        for(let i = 0; i < width-1; i++) {
            //draw line to the right 

            for(let j = 0; j < height-1; j++) {
                //draw line to the bottom


            }
        }
    }

    function marked (position: number) { 
        console.log(position)
    }


    return (
        <div className='container'>

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {

                

                    row.map((cell, cellIDx) =>  (

                    rowIDx % 2 == 0? 

                        (cellIDx % 2 != 0) ? 
                        
                        <div className='horizontal cell'></div> :
                        
                        <CircleIcon key={cellIDx} 
                        className={`cell`} sx={{ fontSize: 1, border: 2}}></CircleIcon>

                         : 
                    (cellIDx % 2 != 0) ? 

                    <Box className='asdf cell' component="span" sx={{  width: 70, height: 70, p: 2, border: '1px none grey' }}>
                    </Box>
                        :
                    <div className='vertical cell ' onClick={()=> marked(board[cellIDx][rowIDx])} ></div>
                        
                        
                        

                        

                    
                      

                       
                      

                    ))
                }</div>
            ))}
           
            </div>
    )

}

export default PlayGroundDAB;