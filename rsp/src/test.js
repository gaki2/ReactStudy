
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