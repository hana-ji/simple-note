// Listitem/index.js
import React from 'react';
import './index.css';

class Listitem extends React.Component {
  render() {
    const { id, active, title, contents } = this.props;
    return (
      // this.props.active 는 활성화 상태여부 담고있음 활성화가 되면 active를 className에 추가
      // 활성화 됬나요? y 활성화 클래스 추가 n 활성화 클래스 없이 보여줌
      <div className={active ? "list-item active" : "list-item"}>
        <div className="title">{title ? title : '제목'}</div>
        {/* {contents !== '' ? contents : '내용'}과 똑같은 뜻 contents의 내용이 비어있으면 '내용'을 보여주겠다 */}
        <div className="list-item-contents">{contents !== '' ? contents : '내용'}</div>
      </div>
    );
  }
}

export default Listitem;