import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
let a = 0;

export default function App() {
  const [name, setName] = useState('');
  const [dw, setDw] = useState('');

  useEffect(() => {
    console.log('effect');
    return () => console.log('unmount');
  }, [])

  useEffect(() => {
    console.log('test');
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
    </div>
  )
}
