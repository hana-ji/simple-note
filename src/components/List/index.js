// List/index.js
import React from 'react';
import './index.css';
import Listitem from '../Listitem';

class List extends React.Component {
  render() {
    return(
      <div className="list">
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
      </div>
    );
  }
}

export default List;