// App/index.js
import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  state = {
    notes: [
      {
        id: '_asdf3das',
        title: '제목1',
        contents: '내용1'
      },
      {
        id: '_ikdiekdk',
        title: '제목2',
        contents: '내용2'
      },
      {
        id: '_3ldlijss',
        title: '제목3',
        contents: '내용3'
      }
    ],
    activeId: '_3ldlijss',
  }

  handleListItemClick = (id) => {
    this.setState({ activeId: id});
  }

  render() {
    const { notes, activeId } = this.state;
    // 현재 활성화 된 객체를 찾아서 activeNote 변수에 할당
    // array의 .filter()를 활용해 activeId와 일치하는 id를 가진 노트객체 찾음
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    // filter() 배열에서만 사용가능, 사용법: 배열.filter((인자) => 인자.인자템 === 비교할 값)
    // 위에 것의 결과는 조건문에 맞는 배열을 반환한다.
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
            />
          {/* activeNote가 존재할 때 <Note /> 를 랜더링 */}
          {/* note 속성에 활성화 된 노트객체인 activeNote 전달 */}
          {
            // 0이 아니여야 랜더링(Note라는 컴포넌트를 보여줌), 0이면 안보여줌
            notes.length !== 0 && <Note note={activeNote} />
          }
        </div>
      </div>
    );
  }
}

export default App;