import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import axios from 'axios';

const apikey = process.env.REACT_APP_APIKEY;

function GetUser() {
  const [user, setUser] = useState(null);
  const lis = [];
  let email;
  let avatar_img;

  // name, avatar_url, person.email / type

  useEffect(() => {
    axios({
      method: 'get',
      url: '/v1/users',
      headers: {
        Authorization: apikey,
        "Notion-Version": "2021-05-13",
      }
    })
      .then((response) => setUser(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  if (user) {
    console.log(user[0]);
    return (
      <div>
        <ul>
        {user.map((item) =>{
          email = item.type === 'person' ? item.person.email : '이메일이 없습니다.';
          avatar_img = item.avatar_url ? item.avatar_url : '이미지가 없습니다.';  
          return(
          <li>
            이름 : {item.name} 타입 : {item.type} 이메일 : {email} 사진 : <img src={avatar_img}></img>
          </li>
          )
        })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        로딩중
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <h1>Hi</h1>
      <GetUser></GetUser>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

