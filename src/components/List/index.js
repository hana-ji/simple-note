// List/index.js
import React from 'react';
import './index.css';
import Listitem from '../Listitem';

class List extends React.Component {
  render() {
    const { notes, activeId } = this.props;
    return(
      <div className="list">
        {/* this.props.notes 데이터에 대해 반복문을 돌면서 ListItem 보여줌
            이때 item 객체에서 id,title,contents 데이터를 ListItem에 전달
            반복문을 돌때 key 는 필수 ! key로 변경 생성 삭제 등 판단함(단독으로 써야하므로 아이디처럼) */}
        {notes.map((item) => {
          const { id, title, contents } = item;
          return (
            <Listitem 
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              contents={contents}
            />
          );
        })}
      </div>
    );
  }
}

export default List;