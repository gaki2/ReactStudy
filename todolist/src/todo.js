import React, {useState} from 'react'

export default function Todo({task, id, date, hour, onRemove} ) {
    


    return (
        <div className='todobox'>
            <input className='checkbox' type='checkbox'></input>
            <li key={id}>할일 : <b>{task}</b> 마감 : {date} {hour}
            <button className='infoBtn' onClick={() => onRemove(id)}>제거</button>
            <button className='infoBtn' >수정</button></li>      
        </div>
    )
}
