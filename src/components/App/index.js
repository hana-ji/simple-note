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

  // 이벤트 핸들러 메소드
  // state 중에 id를 가져와서 (이벤트 발생시) activeId로 새로 랜더링하겠다
  handleListItemClick = (id) => {
    this.setState({ activeId: id});
  }

  render() {
    const { notes, activeId } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick} //메소드 전달
            />
          <Note />
        </div>
      </div>
    );
  }
}

export default App;