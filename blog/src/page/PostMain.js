import React, {useState} from 'react';
import PostList from './PostList';
import './Post.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostMain = props => {
  const {data} = props;
  // console.log(props);
  // console.log(data);

  return (
    <>
      <h2 align="center">게시판</h2>
      <PostList data={data} />
      <p align='center' className="write"><Link to={`/newWrite`} style={{ textDecoration: 'none' }}>글쓰기</Link></p>
    </>
  )
}

export default PostMain;