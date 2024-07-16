import './Stopwatch.css';
import { useEffect, useState } from "react";

function Stopwatch(){
    const [time, setTime] = useState(0);
   const [running,setRunning] = useState(false); 

    useEffect(() => {
        let interval;
        if(running){
        interval= setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        } , 10);
        }else if (!running){
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[running]);


    return(
     <>
     <img src="assets/images/Stopwatch.png" alt="" />
      <h1 className="StopWatch">Stopwatch</h1>
      <div className='Time'>
        <span >{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span >{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span >{("0" + ((time/10) % 100)).slice(-2)}</span>
      </div>
      <div>
        { running ? (
           <button className='StopButton' onClick = {() => { setRunning(false) }}>Stop</button>
        ):(
          <button className="StartButton" onClick = {() => { setRunning(true) }}> Start</button>
        )
        }
        <button className='ResetButton' onClick = {() => { setTime(0) }}>Reset</button>
      </div>
     </>
    )
}

export default Stopwatch