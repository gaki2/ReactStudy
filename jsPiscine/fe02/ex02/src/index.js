import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';

const initial_api_key = process.env.REACT_APP_APIKEY;

function Input() {
  const [keys, setKeys] = useState([]);
  const [seletedkey, setSeletedkey] = useState(initial_api_key);
  const [namelist, setNamelist] = useState([]);
  const [issubmitted, setIssubmitted] = useState(0);
  const [tempkey, setTempkey] = useState(initial_api_key);


  // api 키를 submit 하면
  // 해당 api 키가 유효한지 확인 한 후 
  // 유효하면 keys 와 namelist 에 값을 추가
  // 그렇지 않으면 에러
  useEffect(() => {
    axios({
      method: 'get',
      url: '/v1/users',
      headers: {
        Authorization: tempkey,
        "Notion-Version": "2021-05-13",
      }
    })
      .then((response) => 
      {
        if (keys.includes(tempkey)) {
          alert('이미 등록된 api key 입니다.');
          return ;
        }
        setKeys([...keys, tempkey]);
        setNamelist([...namelist, { name : response.data.results[0].name,  apikey : tempkey}]);
      })
        .catch((error) => {
        alert('api key 오류.');
      });
  }, [issubmitted]);


  //input 에 값이 바뀔때마다 해당 값으로 tempkey 를 업데이트
  const Change = (e) => {
    setTempkey(e.target.value);
  }

  // input 창에 api 키를 입력하고 submit 하면 keys 라는 배열에 해당값을 넣어줌.
  const Submit = (e) => {
    setIssubmitted(issubmitted + 1);
  }

  const Click = function(item) {
    console.log(item.apikey);
    setSeletedkey(item.apikey);
  }

  const Remove = function(item) {
    if (item.apikey !== initial_api_key) {
      setNamelist(namelist.filter((value) => value.apikey !== item.apikey));
      setKeys(keys.filter((value) => value !== item.apikey));
    } else {
      alert('해당 키값은 제거할 수 없습니다.');
    }
  }

  return (
    <div>
      <form action='#' onSubmit={Submit}>
        <input placeholder='API 키를 입력하세요.' onChange={Change}></input>
        <input type='submit'></input>
      </form>
      {namelist.map((item) => {
        return (
          <p>
          <button onClick={() => Click(item)}>{item.name}</button>
          <button onClick={() => Remove(item)}>삭제</button>
          </p>
        )
      })}
      <PrintPage apikey={seletedkey}></PrintPage>
    </div>
  )
}
///////////////////////////////////////////////////////////////////////


function PrintPage({ apikey }) {
  const [pages, setPages] = useState();
  const [pagenums, setPagenums] = useState();
  const [pageindex, setPageindex] = useState(0);

  useEffect(() => {
    axios({
      method: 'post',
      url: '/v1/search',
      headers: {
        Authorization: apikey,
        "Notion-Version": "2021-05-13",
      },
      sort: {
        direction: 'ascending',
        created_time: 'last_edited_time',
      }
    })
      .then((response) => {
        let pagenumbers = (response.data.results.length % 5) === 0 ? parseInt(response.data.results.length / 5) : parseInt(response.data.results.length / 5) + 1;
        setPagenums(pagenumbers);
        setPages(response.data.results)})
      .catch((error) => console.error(error));
  }, [])

  function nextPage(index) {
    setPageindex(index);
  }

  //키의 intergration 이름       //글제목 글주소 생성날짜 최근수정날짜

  if (pages) {
    console.log(pagenums);
    const lis = [];
    for(let i = 0; i < pagenums; i++) {
      lis.push(<button onClick={() => nextPage(i)}>{i+1}</button>)
    }
    let title;
    return (
      <div>
        {
          pages.slice(pageindex * 5, pageindex * 5 + 5).map((item) => {
            title = (typeof item.properties.title === 'undefined') ? '제목없음' : item.properties.title.title[0].plain_text;
            return(
              <ul>
                <li>글제목 : {title}</li>
                <li><a href={item.url}>{item.url}</a></li>
                <li>생성시간 : {item.created_time}</li>
                <li>최근 수정 날짜 : {item.last_edited_time}</li>
              </ul>
            )
          })
        }
        {lis}
      </div>
    )
  } else {
    return (
      <div>
        로딩중 ...
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <h2>Hello</h2>
      <Input></Input>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


