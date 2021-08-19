import React, { useEffect, useState } from 'react';
// import { getPostByNo } from '../Data';
import './Post.css';

const PostView = ({ history, location, match, data, setData }) => {

  const [ post, setPost ] = useState({});

  const { no } = match.params;

  const getPostByNo = (no) => {
    const array = data.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    } else {
      return (null);
    }
  }

  useEffect(() => {
    setPost(getPostByNo(no));
  }, [ ]);

  const onRemove = () => {
    const remain_array = data.filter(x => x.no != no);
    setData(remain_array);
    history.goBack();
  };

  const contentOnChange = (e) => {
    setPost({
      ...post,
      "content": e.target.value
    });
  }
 
  const onChange = () => {
    const remain_array = data.filter(x => x.no != no);
    const new_array = remain_array.concat(post);
    let sorted_array;
    sorted_array = new_array.sort(function (a, b) {
      return b.no- a.no;
    })
    setData(sorted_array); 
    history.goBack();
  }
  

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          post ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ post.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                {/* <input defaultValue={post.title} onChange={OnChange}></input> */}
                <label>{ post.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ post.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ post.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                    <input defaultValue={post.content} onChange={contentOnChange}></input>
                     {/* {post.content} */}
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
        <button className="post-view-go-list-btn" onClick={onRemove}>삭제</button>
        <button className="post-view-go-list-btn" onClick={onChange}>수정</button>
      </div>
    </>
  )
}

export default PostView;