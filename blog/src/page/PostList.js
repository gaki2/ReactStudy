import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../component/CommonTable';
import CommonTableColumn from '../component/CommonTableColumn';
import CommonTableRow from '../component/CommonTableRow';
// import { postList } from '../Data';



const PostList = props => {
    const {data} = props;
  const [ dataList, setDataList ] = useState(data);

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList;