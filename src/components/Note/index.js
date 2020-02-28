// Note/index.js
import React from 'react';
import './index.css';

class Note extends React.Component {
  render() {
    return(
      <div className="note">
        <input className="title" />
          <textarea className="note-contents"></textarea>
      </div>
    );
  }
}

export default Note;
