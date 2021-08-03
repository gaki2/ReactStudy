import './App.css'
import Modal from './modal.js'
import React, {useState, useRef, useEffect} from 'react'
import Todo from './todo';

function App() {
  //Modal
  const [isOpen, setIsOpen] = useState(false);
  const [infos, setInfos] = useState([]);
  const [info, setInfo] = useState({
    id: '',
    task: '',
    date: '',
    hour: ''
  });

  const closeModal = () => {
    setIsOpen(false);
  }


  function addInfo(info) {
    setInfo(info);
  }


  useEffect(() => {
    if(info.id) {
    setInfos(infos.concat(info));
    console.log(infos);
    }
  },[info.task])

  
  const onRemove = (id) => {
    setInfos(infos.filter(info => (info.id !== id))); 
  }


  return (
    <div className='container'>
    <button className='addTodo' onClick={() => setIsOpen(true)}>Add Todo</button>
    <ul>
      {infos.length > 0 ? infos.map(info => (<Todo task={info.task} id={info.id} date={info.date} hour={info.hour} onRemove={onRemove}></Todo>)) : null}
    </ul>
    <Modal open={isOpen} closeModal={closeModal} addInfo={addInfo}></Modal>
    </div>
  );
}

export default App;
