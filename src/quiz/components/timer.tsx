import './timer.css';

function Timer () {
        return (

            <div className="demo">
  <div className="demo__colored-blocks">
    <div className="demo__colored-blocks-rotater">
      <div className="demo__colored-block"></div>
      <div className="demo__colored-block"></div>
      <div className="demo__colored-block"></div>
    </div>
    <div className="demo__colored-blocks-inner"></div>
    <div className="demo__text">Ready</div>
  </div>
  <div className="demo__inner">
    <svg className="demo__numbers" viewBox="0 0 100 100">
      <path className="demo__numbers-path" 
            d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 
               Q25,44 34.4,27.4
               l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 
               a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 
               l0,-61 L40,28" />
    </svg>
  </div>
</div>

        );
}
 
export default Timer;