import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is the Memo 1',
      createdAt: 1747574837402,
      updatedAt: 1747574837402,
    },
    {
      title: 'Memo 2',
      content: 'This is the Memo 2',
      createdAt: 1747574910880,
      updatedAt: 1747574910880,
    },
  ]);

const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

const setMemo = (newMemo) => {
  const newmemos = [...memos];

  newmemos[selectedMemoIndex] = newMemo;
  setMemos(newmemos);

}

  return (
    <div className="App">
      <SideBar memos={memos} setSelectedMemoIndex={setSelectedMemoIndex}/>
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo}/>
    </div>
  );
}

export default App;
