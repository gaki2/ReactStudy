import './App.css';
import { useEffect, useState, useRef, useMemo } from 'react';
import Ball from './Ball.js';

function getWinNumbers() {
  const numberBall = Array(45).fill().map((value, index) => index + 1);
  const shuffle = [];
  while (numberBall.length > 0) {
    shuffle.push(numberBall.splice(Math.floor(Math.random() * numberBall.length), 1)[0]);
  }
  const bonusNum = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6);
  return [...winNumbers, bonusNum];
}

const Lotto = () => {
  // getWinNumbers 로 로또번호 7개를 먼저 정해놓는다.
  // 이 정해논 값이 rerendering 되도 바뀌지 않게 하기 위해서 useMemo 를 사용해
  // 그 결과값을 lottoNums 에 집어넣는다.
  // SetInterval 을 활용하여 매 단위 시간마다 미리 정해둔 7개의 공을 하나씩 
  // 뽑아 화면에 표시한다. 
  const [retry, setRetry] = useState(0);
  const lottoNums = useMemo(() => getWinNumbers(), [retry]);
  const [winBalls, setWinBalls] = useState([]);
  const [index, setIndex] = useState(0);
  const func = useRef();

  const addBall = () => {
      const now_idx = index;
      setWinBalls([...winBalls, lottoNums[now_idx]]);
      setIndex(index + 1);
      // 실행순서우선순위 ==> useEffect >(크다) Rerendering //
    };

  useEffect(() => {
    if (index !== 7) {
       func.current = setTimeout(addBall, 100);
      }
      return clearTimeout(addBall);
     },[index])

  const onClickRetry = () => {
      clearTimeout(func.current);
      func.current = null;
      setRetry(retry + 1);
      setWinBalls([]);
      setIndex(0);
    }

  return (
    <div className='container'>
          <div className='main'>
            {winBalls === [] ? '' : winBalls.map((v) => <Ball key={v} number={v} />)}
         </div>
         <div>
           <button onClick={() => onClickRetry()}>retry</button>
         </div>
    </div>
  );
}

export default Lotto;
