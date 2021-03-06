// Header/index.js
import React from 'react';
import './index.css';

// class Header extends React.Component {
//   render() {
//     const { onAddNote, onDeleteNote } = this.props;
//     return (
//       <div className="header">
//         <div className="title">
//           <span>Hana's 심플노트</span>
//         </div>
//         <div className="buttons">
//           <button onClick={onAddNote}>추가</button>
//           <button onClick={onDeleteNote}>삭제</button>
//         </div>
//       </div>
//     );
//   }
// }

const Header = (props) => {
  const { onAddNote, onDeleteNote } = props;
  return(
    <div className="header">
      <div className="title">
        <span>Hana's 심플노트</span>
      </div>
      <div className="buttons">
        <button onClick={onAddNote}>추가</button>
        {console.log(onAddNote)}
        <button onClick={onDeleteNote}>삭제</button>
        {console.log(onDeleteNote)}
      </div>
    </div>
  )
}

export default Header;