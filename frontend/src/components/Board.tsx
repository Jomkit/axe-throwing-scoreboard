import { useState } from 'react';
import Cell from './Cell.tsx';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';

function Board() {
  // const p1Score:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [p1Score, setP1Score] = useState(new Array(10).fill(0));
  // const p2Score:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const [p2Score, setP2Score] = useState(new Array(10).fill(0));
  

  const [turn, setTurn] = useState(1);
  const [done, setDone] = useState(false);

  const updateScore = () => {
    alert("new score");
    // if (player === "p1") { 
    //   setP1Score(newScore);
    // } else if(player === "p2") {
    //   setP2Score(newScore);
    // }
  }
  
  return (
    <div>
      <span>&#10576;</span>

      <h2>Round {turn}</h2>
      <h3>Player One's Turn</h3>
      {/* <h3>Player { turn % 2 === 0 ? 'One' : 'Two' }'s Turn</h3> */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          {p1Score.map((score: number) => {
            return <Cell score={score} />;
          })}
          <div className='flex flex-col items-center'>
            <p>Total Score</p>
            <p>0</p>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center">
          {p2Score.map((score: number) => {
            return <Cell score={score} />;
          })}
        </div> */}

        <div className='mt-6'>
          <div className='grid w-full lg:grid-cols-6'>
            <label htmlFor='player1Input' className='col-span-2'>Player 1</label>
            <Input className='bg-white text-black col-span-2' type='number' id='player1Input' name='player1Input'></Input>
            <Button className='col-span-2 hover:bg-slate-600' variant="outline">Submit</Button>
          </div>

          {/* <div className='grid w-full lg:grid-cols-6'>
            <label htmlFor='player2Input' className='col-span-2'>Player 2</label>
            <Input className='bg-white text-black col-span-2' type='number' id='player2Input' name='player2Input'></Input>
            <Button className='col-span-2 hover:bg-slate-600' variant="outline">Submit</Button>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Board