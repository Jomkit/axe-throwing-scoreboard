import { useScore } from '@/hooks/useScore.ts';
import React from 'react';
import PlayerScore from './PlayerScore';


function Board() {
  const [ p1Score, turn, handleSubmit, submitBtnRef ]: [ number[], number, React.FormEventHandler, React.RefObject<HTMLButtonElement>] = useScore();  
  return (
    <div>
      {/* <span>&#10576;</span> */}

      <h2>{ turn <= p1Score.length ? `Turn ${turn}` : "Game Over" }</h2>

      <PlayerScore playerName={"Rick"} playerScore={p1Score} handleSubmit={handleSubmit} submitBtnRef={submitBtnRef} />
    </div>
  )
}

export default Board