// List/index.js
import React from 'react';
import './index.css';
import Listitem from '../Listitem';

class List extends React.Component {
  render() {
    const { 
      notes, 
      activeId,
      /* <App />과 <ListItem />사이에 있는 <List />컴포넌트의 onListItemClick 속성에 
         handleListItemClick 메소드를 전달해 <ListItem />이 사용하게함 */
      onListItemClick // 전달 받은 이벤트 핸들러
    } = this.props;
    return(
      <div className="list">
        {notes.map((item) => {
          const { id, title, contents } = item;
          return (
            <Listitem 
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              contents={contents}
              // 유저가 노트를 클릭했을 때 해당 메소드가 호출되도록 함
              // <ListItem />에서 onClick이 호출(이벤트발생)되면 () => onListItemClick(id)이 호출 = handleListItemClick이 호출됨
              onClick={() => onListItemClick(id)} //메소드 전달
            />
          );
        })}
      </div>
    );
  }
}

export default List;