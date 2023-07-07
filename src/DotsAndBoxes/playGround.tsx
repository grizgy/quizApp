import { useState } from 'react';
import './playGround.css';

function PlayGroundDAB () {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(5);
    // const [array, setArray] = useState([[1,2,3,3], [1,2,3,3], [1,2,3,3], [1,2,3,3]] )
    // const array : number[] [] = [[1,2,3,3], [1,2,3,3], [1,2,3,3], [1,2,3,3]] 


    function createField (width : number, height : number) {

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                // setArray(array[i-1,j-1] = 0);

                console.log( width +  ", " + height )

            }

        }
        
    }

    function minimum() {
        setWidth(width-1);
        setHeight(height-1)
        console.log(height)
        createField(width,height)
    }

    function maximum() {
        setWidth(width+1);
        setHeight(height+1)
        console.log(height)
    }

    


    return (
        <div className='container'>

            <div className='playGround'>

                {width}
                {height}
            
            <button onClick={minimum}>
                Minimum
            </button>

            <button onClick={maximum}>
                Maximum
            </button>

            </div>
           
            </div>
    )

}

export default PlayGroundDAB;