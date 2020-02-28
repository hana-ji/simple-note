// App/index.js
import React,{useState} from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generateId } from '../../utils';

// class App extends React.Component {
//   state = {
//     notes: [
//       {
//         id: '_asdf3das',
//         title: '제목1',
//         contents: '내용1'
//       },
//       {
//         id: '_ikdiekdk',
//         title: '제목2',
//         contents: '내용2'
//       },
//       {
//         id: '_3ldlijss',
//         title: '제목3',
//         contents: '내용3'
//       }
//     ],
//     activeId: '_3ldlijss',
//   }
  
//   handleListItemClick = (id) => {
//     this.setState({ activeId: id});
//   }

//   handleEditNote = (type, e) => {
//     const notes = [ ...this.state.notes ];
//     const note = notes.find((item) => item.id === this.state.activeId);
//     note[type] = e.target.value;
//     this.setState({
//       notes,
//     });
//   }

//   handleAddNote = () => {
//     const id = generateId();
//     this.setState({
//       notes: [
//         ...this.state.notes,
//         {
//           id,
//           title: '제목',
//           contents: '내용',
//         },
//       ],
//       activeId: id,
//     });
//   }

//   handleDeleteNote = () => {
//     const notes =
//       this.state.notes.filter((item) => item.id !== this.state.activeId);
//     this.setState({
//       notes,
//       activeId: notes.length === 0 ? null : notes[0].id
//     })
//   }

//   render() {
//     const { notes, activeId } = this.state;
//     const activeNote = notes.filter((item) => item.id === activeId)[0];
//     return (
//       <div className="app">
//         <Header 
//           onAddNote={this.handleAddNote}
//           onDeleteNote={this.handleDeleteNote}
//         />
//         <div className="container">
//           <List 
//             notes={notes} 
//             activeId={activeId}
//             onListItemClick={this.handleListItemClick}
//             />
//           {
//             notes.length !== 0 && 
//               <Note 
//                 note={activeNote} 
//                 onEditNote={this.handleEditNote}
//               />
//           }
//         </div>
//       </div>
//     );
//   }
// }

// 함수형 컴포넌트
const App = () => {
  // class형에서는 상태 = 값
  // useState 선언 const [상태이름,변하게 하는상대이름] = useState(기본상태)
  const [state,setState] = useState({
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
    })
  
    // 함수형에서는 this가 없다

  const handleListItemClick = (id) => {
    // object일때 상태를 변하게 하려면 
    // 변할 상태 제외하고 전에 있던 state를 불러오기 위해 ...state를 쓴다
    // … 은 자바스크립트의 전개연산자 입니다. 기존의 객체안에 있는 내용을 해당 위치에다가 풀어준다는 의미죠.
    //  그 다음에, 우리가 설정하고 싶은 값을 또 넣어주면 해당 값을 덮어쓰게 됩니다.
    //  https://velopert.com/3629
    setState({...state,activeId: id});
  }

  const handleEditNote = (type, e) => {
    // state.notes를 쓴 이유는 클래스형과 선언 방식이라던가 갖고오는 형태가 다르다.
    const notes = [...state.notes]
    const note = notes.find((item) => item.id === state.activeId);
    note[type] = e.target.value;
    setState({
      ...state,
      notes,
    });
  }

  const handleAddNote = () => {
    const id = generateId();
    setState({
      notes: [
        ...state.notes,
        {
          id,
          title: '제목',
          contents: '내용',
        },
      ],
      activeId: id,
    });
  }

  const handleDeleteNote = () => {
    const notes = state.notes.filter((item) => item.id !== state.activeId);
    setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id
    })
  }
  const activeNote = state.notes.filter((item) => item.id === state.activeId)[0];

    return (
      <div className="app">
        <Header 
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
        />
        <div className="container">
          <List 
            notes={state.notes} 
            activeId={state.activeId}
            onListItemClick={handleListItemClick}
            />
          {
            state.notes.length !== 0 && 
              <Note 
                note={activeNote} 
                onEditNote={handleEditNote}
              />
          }
        </div>
      </div>
    );
}





export default App;