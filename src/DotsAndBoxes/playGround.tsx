import { useState } from 'react';
import './playGround.css';
import CircleIcon from '@mui/icons-material/Circle';

import MediationIcon from '@mui/icons-material/Mediation';

function PlayGroundDAB () {

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

    const [board, setBoard] = useState(createBoard(14, 14));

    function displayLines (width : number, height : number) {
        for(let i = 0; i < width-1; i++) {
            //draw line to the right 

            for(let j = 0; j < height-1; j++) {
                //draw line to the bottom


            }
        }
    }


    return (
        <div className='container'>

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {
                    row.map((cell, cellIDx) =>  (
                        <CircleIcon key={cellIDx} 
                        className={`cell`} sx={{ fontSize: 30 }}></CircleIcon>
                    ))
                }</div>
            ))}
           
            </div>
    )

}

export default PlayGroundDAB;