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
  render() {
    const { notes, activeId } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          {/* list가 노트들이 제목과 내용 + 어떤 노트가 활성화됬는지 알기위해 props로 전달 */}
          <List notes={notes} activeId={activeId}/>
          <Note />
        </div>
      </div>
    );
  }
}

export default App;