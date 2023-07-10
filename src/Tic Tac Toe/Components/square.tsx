import './square.css';

function Square({value, onSquareClick} : {value:string, onSquareClick : any}) {
    return (
      <button className={`square ${(value=="X") ? 'X-cell' : ''} ${(value=="O") ? 'O-cell' : ''} `} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square;