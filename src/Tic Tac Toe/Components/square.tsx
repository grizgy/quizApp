import './square.css';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';


function Square({value, onSquareClick} : {value:any, onSquareClick : any}) {
    return (
      <button className="square" onClick={onSquareClick}>
        { value === "X"? <CloseIcon sx={{ fontSize: 60 , bgcolor: 'error.main' }} color="primary" /> : <PanoramaFishEyeIcon sx={{ fontSize: 60, bgcolor: 'primary.main' }} color="error"/> } 
        {/* {value} */}
      </button>
    );
  }

export default Square;