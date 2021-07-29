import React, {useState, useEffect, useRef} from 'react';
import './App.css';

// useRef 어떤 state 를 변경하는데 rendering 을 다시 하기 싫을 때 사용한다.


function App() {
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  // let wholeTime = 0;
  // let goTime = 0;
  const minuteChange = (e) => {
    setMinute(parseInt(e.target.value));
  };

  const secondChange = (e) => {
    setSecond(parseInt(e.target.value));
  };

  console.log(parseInt(second));
  useEffect(() => {
      // if (!wholeTime) {
      //   wholeTime = parseInt(minute) * 60 + parseInt(second);
      // };
      // goTime++;
        // console.log(parseInt(second));
        const countdown = setInterval(() => {
        if(parseInt(second) > 0) {
          // console.log(parseInt(second));
          setSecond(parseInt(second) <= 9 ? `0${parseInt(second) - 1}` : parseInt(second) - 1);
        }
        else if (parseInt(second) === 0) {
          if (parseInt(minute) === 0) {
            clearInterval(countdown);
          } else {
            setMinute(parseInt(minute) - 1);
            setSecond(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
  }, [minute, second]);

  return (
    <div className='title'>
      <div className='timer'>
          <input placeholder='m' value={minute} onChange={minuteChange}></input>
          <input placeholder='s' value={second} onChange={secondChange}></input>
      </div>
      <div className='line'></div>
      <div className='green' id='green'></div>
    </div>
  )
}

export default App;
