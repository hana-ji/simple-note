// App/index.js
import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  // state: UI의 상태를 기록하는 데이터
  state = {
    // 앱의 노트 정보를 담은 array
    notes: [
      {
        id: '_asdf3das',
        title: '제목1',
        contents: '내용1'
      }
    ],
    // List에서 유저가 선택하여 활성화 된 노트의 id를 기록
    activeId: null,
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <List />
          <Note />
        </div>
      </div>
    );
  }
}

export default App;