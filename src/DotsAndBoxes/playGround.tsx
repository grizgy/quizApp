import { useState } from 'react';
import './playGround.css';

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

    const [board, setBoard] = useState(createBoard(4, 4));


    return (
        <div className='container'>

                {board.map((row, rowIDx) => (
                <div key={rowIDx} className={`row`}> {
                    row.map((cell, cellIDx) =>  (
                        <div key={cellIDx} 
                        className={`cell`}></div>
                    ))
                }</div>
            ))}
           
            </div>
    )

}

export default PlayGroundDAB;