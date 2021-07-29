import React, {useEffect, useRef, useState} from 'react';
import './App.css';

let flag = 0;
const term = 80;
const images = [
  'img/paper.png',
  'img/rock.png',
  'img/scissor.png'];

const trans = {
  'paper' : 1,
  'rock' : 0,
  'scissor' : -1,
};

function App() {
  const [nowImageIdx, setnowImageIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('Play!');
  const interval = useRef();

  const changeImage = () => {
    if (nowImageIdx === 0) {
      setnowImageIdx(1);
    } else if (nowImageIdx === 1) {
      setnowImageIdx(2);
    } else if (nowImageIdx === 2) {
      setnowImageIdx(0);
    }
  };

  useEffect(() => {
    interval.current = setInterval(changeImage, term);
    return () => clearInterval(interval.current);
  },[nowImageIdx]);

  const reset = () => {
    setScore(0);
  }

  // () => 를 추가하지 않았었음.
  const onClick = (choice) => () => {
    if(interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const computerChoice = nowImageIdx - 1;
      const humanChoice = trans[choice];
      const diff = computerChoice - humanChoice;
      if (diff === 0) {
        setResult('Draw!');
        flag = 0;
      } else if (diff === 1 || diff === -2) {
        setScore(score - 1);
        setResult('Lose!');
        flag = -1;
      } else if (diff === -1 || diff === 2) {
        setScore(score + 1);
        setResult('Win!');
        flag = 1;
      }
      changeColor();
      //SetTimeout 메모리 누수 어떻게 함?
      setTimeout(() => {
        flag = 0;
        changeColor();
        setResult('Play!');
        interval.current = setInterval(changeImage, term);
      }, 1000)
    }
  }

  const changeColor = () => {
    const container = document.getElementById("container");
    if(flag === 1) {
      container.style.backgroundColor = "green";
    } else if (flag === -1) {
      container.style.backgroundColor = "red";
    } else if (flag === 0) {
      container.style.backgroundColor = "black";
    } 
  }
  //useRef 로 document.get~~~~~ 을 짬뽕해서 사용하는법? / getE~~id 를 쓰면 전역접근이라서 안쓰는게 신뢰성이좋음.
  return (
    <div className='container' id='container'>
      <img src={images[nowImageIdx]} style={{width:'300px', height:'300px',}}></img>
      <div className='button'>
        <button onClick={onClick('scissor')}>가위</button>
        <button onClick={onClick('rock')}>바위</button>
        <button onClick={onClick('paper')}>보</button>
        <button onClick={reset}>♻︎</button>
      </div>
      <div className='result'>
        {result}
      </div>
      <div className='score'>
        {score}
      </div>
    </div>
  );
}

export default App;
