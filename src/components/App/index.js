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

  // 편집 이벤트 핸들러 / type과 event 객체 전달받음
  handleEditNote = (type, e) => {
    // 새 notes 어레이 생성 / ... = 전에 있는
    const notes = [ ...this.state.notes ];

    // notes에서 현재 activeId 와 일치하는 노트 객체 찾기
    const note = notes.find((item) => item.id === this.state.activeId)

    // 객체의 속성에 값 할당. 유저가 입력한 값(note.title 또는 note.contents)
    note[type] = e.target.value;

    // note에 새 array를 할당하여 state 변경
    this.setState({
      notes,
    });
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
            />
          {
            notes.length !== 0 && 
              <Note 
                note={activeNote} 
                onEditNote={this.handleEditNote} //메소드 전달
              />
          }
        </div>
      </div>
    );
  }
}

export default App;