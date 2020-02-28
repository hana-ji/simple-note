// App/index.js
import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generateId } from '../../utils'; // 랜덤 ID 생성 함수

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

  handleEditNote = (type, e) => {
    const notes = [ ...this.state.notes ];
    const note = notes.find((item) => item.id === this.state.activeId);
    note[type] = e.target.value;
    this.setState({
      notes,
    });
  }

  handleAddNote = () => {
    const id = generateId(); // 랜덤 ID 생성
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '제목',
          contents: '내용',
        },
      ],
      activeId: id,
    });
  }

  handleDeleteNote = () => {
    // 현재 선택한 노트를 제외한 새로운 array를 생성
    const notes =
          // item.id가 여기 state.activeId 랑 다른 애들 모두 다
          this.state.notes.filter((item) => item.id !== this.state.activeId);
    // 새 array를 notes에 할당
    this.setState({
      notes,
      // 새로운 notes array에 첫번째 노트의 id로 지정 (노트 삭제하면 자동으로 첫번째 노트가 선택되도록)
      activeId: notes.length === 0 ? null : notes[0].id
    })
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header 
          onAddNote={this.handleAddNote} //메소드 전달
          onDeleteNote={this.handleDeleteNote} //메소드 전달
        />
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
                onEditNote={this.handleEditNote}
              />
          }
        </div>
      </div>
    );
  }
}

export default App;