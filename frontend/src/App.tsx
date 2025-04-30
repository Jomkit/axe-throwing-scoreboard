import { useState } from 'react';
import './App.css';
import Board from './components/Board.tsx';

function App() {

    const [start, setStart] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Scoreboard</h1>
      <div className='lg:h-1/2 flex items-center'>
      {start ? 
        (
          <Board />
        )
        :
        (
          <div>
            <button onClick={() => setStart(true)} className='bg-green-600 p-2 hover:border hover:border-white active:bg-green-700'>Start Game</button>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default App
