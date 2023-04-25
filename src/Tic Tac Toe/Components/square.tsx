

function Square({value} : {value:any}, {onSquareClick} : {onSquareClick : any} ) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square;