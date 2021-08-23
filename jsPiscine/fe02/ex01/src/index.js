import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const apikey = process.env.REACT_APP_APIKEY;

// 글제목 글주소 생성날짜시각 최근수정날짜시각

function PrintPage() {
  const [pages, setPages] = useState(null); 
  const lis = [];
  
  useEffect(() => {
    axios({
      method: 'get',
      url: '/v1/pages/6e13eb50716646e2a2c2d9b613d6874c',
      headers: {
        Authorization: apikey,
        "Notion-Version": "2021-05-13",
    }
  })
    .then((response) => setPages(response.data))
    .catch((error) => console.log(error));
  }, [])

  if (pages) {
    console.log(pages);
    return (
      <ul>
        <li>글제목 : {pages.properties.title.title[0].plain_text}</li>
        <li>글주소 : <a href={pages.url}>클릭</a></li>
        <li>생성날짜 및 시간 : {pages.created_time}</li>
        <li>최근수정 날짜 및 시간 : {pages.last_edited_time}</li>
      </ul>
    )
  } else {
    return (
      <div>
        데이터 로딩중 ...
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <PrintPage></PrintPage>
    </div>
  )
}




ReactDOM.render(<App /> , document.getElementById('root'));
