// List/index.js
import React from 'react';
import './index.css';
import Listitem from '../Listitem';

class List extends React.Component {
  render() {
    const { 
      notes, 
      activeId,
      onListItemClick
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
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </div>
    );
  }
}

export default List;