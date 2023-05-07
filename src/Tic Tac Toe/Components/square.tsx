import './square.css';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';


function Square({value, onSquareClick} : {value:any, onSquareClick : any}) {
    return (
      <button className="square" onClick={onSquareClick}>
        {/* { value === null? <CloseIcon className='asdf' sx={{ fontSize: 100 , bgcolor: 'error.main'}} color="primary" /> : <PanoramaFishEyeIcon className='asdf' sx={{ fontSize: 100, bgcolor: 'primary.main' }} color="error"/> }  */}
        {value}
      </button>
    );
  }

export default Square;