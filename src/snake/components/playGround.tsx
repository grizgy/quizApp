import './playGround.css';
import { useState, useEffect } from 'react';

function PlayGroundS () {

    class LinkedListNode {
        value : any;
        next : any;
        constructor(value : number) {
          this.value = value;
          this.next = null;
        }
      }
      
      class LinkedList {

        head : LinkedListNode;
        tail : LinkedListNode;

        constructor(value : number) {
          const node = new LinkedListNode(value);
          this.head = node;
          this.tail = node;
        }
    }

    const positionInTheMiddle = (width : number, height : number) => {
        const middle = (width * height) /2 

        console.log(Math.trunc(middle - (width/2) + 1));

        if((width * height) % 2 == 0) {

            if((height%2) != 0) {
                return Math.trunc(middle)
            }

            return Math.trunc(middle - (width/2) + 1);
        } else {
            return Math.trunc(middle) + 1;
        }
        
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

    const Direction = {
        UP : 'UP',
        DOWN : 'DOWN',
        LEFT : 'LEFT',
        RIGHT : 'RIGHT'
    }

    // const boardSize = 10;

    function randomCell(max : number) {
        return Math.floor(Math.random() * max);
    }
    
    const [width, setWidth] = useState(25);
    const [height, setHeight] = useState(25);
    const [direction, setDirection] = useState(Direction.RIGHT);
    // const [snakeCells, setSnakeCells] = useState(new Set([positionInTheMiddle(width, height)]))
    const [snakeCells, setSnakeCells] = useState(new Set([positionInTheMiddle(width, height)]))
    const [snake, setSnake] = useState(new LinkedList(positionInTheMiddle(width, height)))
    const [foodCell, setFoodCell] = useState(new Set([randomCell(width * height)]))
    const [board, setBoard] = useState(createBoard(width, height));

    useEffect(() => {
        
        setBoard(createBoard(width,height));

        setSnakeCells(new Set([positionInTheMiddle(width, height)]));
        
      }, [height, width]);


    function getDirectionFromKey (key : any) {
        if(key === 'ArrowUp') return Direction.UP; 
        if(key === 'ArrowDown') return Direction.DOWN; 
        if(key === 'ArrowLeft') return Direction.LEFT; 
        if(key === 'ArrowRight') return Direction.RIGHT; 

        return '';
    }


    useEffect( () => {
        setInterval(() => {

            setSnake(new LinkedList(snake.head.value + 1));

            function moveSnake () {
                const currentHeadCoords = {
                    row : snake.head.value.row,
                    col : snake.head.value.col,
                };


                const nextHeadCoords : any = getNextHeadCoords(currentHeadCoords,direction);
                const nextHeadValue = board[nextHeadCoords.row][nextHeadCoords.col];
                // const newHead = new LinkedListNode(
                //     new Cell(nextHeadCoords.row, nextHeadCoords.col, nextHeadValue),
                // );

                // function Cell (row, col) {
                //     return null;
                // }




                function getNextHeadCoords(currentHeadCoords : any,direction : any) {

                    if(direction === Direction.UP) {
                        return {
                            row : snake.head.value.row-1,
                            col : snake.head.value.col,
                        }
                    } if (direction === Direction.DOWN) {
                        return {
                            row : snake.head.value.row+1,
                            col : snake.head.value.col,
                        }
                    } if (direction === Direction.LEFT) {
                        return {
                            row : snake.head.value.row-1,
                            col : snake.head.value.col,
                        }
                    } if (direction === Direction.RIGHT) {
                        return {
                            row : snake.head.value.row+1,
                            col : snake.head.value.col,
                        }
                    } 


                }



            }



        }, 1000);


        window.addEventListener('keydown', (e : any) => {
        const newDirection = getDirectionFromKey(e.key);
        const isValidDirection = newDirection != '';
        if(isValidDirection) setDirection(newDirection);
      })

    }, []);







    return (

        <div className='container'>

            <button onClick={() => setWidth(width + 1)}>W+</button> {width}
            <button onClick={() => setWidth(width - 1)}>W-</button>
            <button onClick={() => setHeight(height + 1)}>H+</button> {height}
            <button onClick={() => setHeight(height - 1)}>H-</button>


            {board.map((row, rowIDx) => (
                <div key={rowIDx} className='row'> {
                    row.map((cell, cellIDx) =>  (
                        <div key={cellIDx} 
                        className={`cell ${snakeCells.has(cell) ? 'snake-cell' : ''} ${foodCell.has(cell) ? 'food-cell' : ''}`}>{cell}</div>
                    ))
                }</div>
            ))}

        </div>

    )

}

export default PlayGroundS;