import React, { useEffect, useState } from 'react';
import '../page/Post.css';

const NewWrite = ({history, location, match, order, setOrder, setData, data}) => {
    
    let newWrite = {
        "no" : order,
        "title": '',
        "content": '',
        "createDate": "2021-8-7",
        "readCount": 1
    };

    const changeContent = (e) => {
        newWrite = {
            ...newWrite,
            "content": e.target.value
        };
    }
    const changeTitle = (e) => {
        newWrite = {
            ...newWrite,
            "title": e.target.value
        };
    }


    const onSubmit = () => {
        if (!data) {
            setData([].concat(newWrite));
        } else {
            setData(data.concat(newWrite));
        }
        setOrder(order + 1);
        history.goBack();
        
    }

    return (
        <div>
            <div className="new-write-header">
            <span>제목</span>
            <input onChange={changeTitle}></input>
            </div>
            <div className="new-write-content">
                <span>내용</span>
                <input onChange={changeContent}></input>
            </div>
            <div className="new-write-submit">
                <button onClick={onSubmit}>완료</button>
            </div>
        </div>
    )
}

export default NewWrite;