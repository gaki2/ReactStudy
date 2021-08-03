import React, {useState, useEffect} from 'react'

export default function Modal({open , closeModal, addInfo}) {

    const overLayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000
    }

    let today = new Date();
    
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();

    if(month < 10) month = '0' + month.toString();
    if(day < 10) day = '0' + day.toString();

    let currentDate = `${year}-${month}-${day}`;
    let currentTime = `${hour}:${minute}`;
    const [id, setId] = useState(1);

    const [info, setInfo] = useState({
        id: id,
        task: '',
        date: currentDate,
        hour: currentTime
    });

    // const info = useRef({
    //     id: id,
    //     task: '',
    //     date: currentDate,
    //     hour: currentTime
    // })
    useEffect(() => {
        setInfo({
            ...info,
            id : id
        })
    }, [id])

    if (!open)
        return (null);

    

    const taskChange = (e) => {
        setInfo({
            ...info,
            task: e.target.value
        })
        // info.current.task = e.target.value;
    }

    const dateChange = (e) => {
        setInfo({
            ...info,
            date: e.target.value
        })
        // info.current.date = e.target.value;
    }

    const hourChange = (e) => {
        setInfo({
            ...info,
            hour: e.target.value
        })
        // info.current.hour = e.target.value;
    }

    const submit = () => {
        if (info.date === currentDate) {
            if (info.hour < currentTime) {
                alert('미래의 시간을 선택해주세요.!');
                return (null);
            }
        }
        setId(id + 1);
        addInfo(info);
        closeModal();
    }

    return (
        <>
        <div style={overLayStyle}></div>
        <div className='modalStyle'>
            <div className='closeBtnBox'>
                <button className='closeBtn' onClick={closeModal}>X</button>
            </div>
            <div>Add</div>
            <div className='todo'>
                <input className='todoInput' onChange={taskChange}></input>
            </div>
            <div>DeadLine</div>
            <div className='deadline'>
                <input className='dateBox' type='date' defaultValue={currentDate} min={currentDate} onChange={dateChange}></input>
                <input className='timeBox' type='time' defaultValue={currentTime} onChange={hourChange}></input>
            </div>
            <div className='okBtnBox'>
                <button className='okBtn' onClick={submit}>OK</button>
            </div>
        </div>
        </>
    )
}
