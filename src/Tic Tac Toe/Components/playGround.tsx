import './playGround.css';
import Square from './square';

function PlayGround () {
    return (

        <div className="container">

        <div className="board-row">
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
        </div>

        <div className="board-row">
            <Square value="4" />
            <Square value="5" />
            <Square value="6" />
        </div>

        <div className="board-row">
            <Square value="7" />
            <Square value="8" />
            <Square value="9" />
        </div>


           {/* <div className="div1">1</div>
           <div className="div2">2</div>
           <div className="div3">3</div>
           <div className="div4">4</div>
           <div className="div5">5</div>
           <div className="div6">6</div>
           <div className="div7">7</div>
           <div className="div8">8</div>
           <div className="div9">9</div> */}


        </div>
    );
}

export default PlayGround;