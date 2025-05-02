import { useRef, useState } from 'react';
import Cell from './Cell.tsx';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';

function Board() {
  // const p1Score:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [p1Score, setP1Score]: [Array<number>, Function] = useState(new Array(10).fill(0));
  // const p2Score:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const [p2Score, setP2Score] = useState(new Array(10).fill(0));
  

  const [turn, setTurn] = useState(1);
  const [done, setDone] = useState(false);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const updateScore = (score: number) => {
    let newScores = [...p1Score];
    newScores[turn - 1] = score;
    setP1Score(newScores);
    setTurn(turn + 1);
    if (turn + 1 > p1Score.length) {
      submitBtnRef.current?.setAttribute('disabled', 'true');
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const player1Score = form.elements.namedItem('player1Input') as HTMLInputElement;
    updateScore(Number(player1Score.value))
  }
  
  return (
    <div>
      <span>&#10576;</span>

      <h2>{ turn <= p1Score.length ? `Turn ${turn}` : "Game Over" }</h2>
      <h3>Player One's Turn</h3>
      {/* <h3>Player { turn % 2 === 0 ? 'One' : 'Two' }'s Turn</h3> */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          {p1Score.map((score: number) => {
            return <Cell score={score} />;
          })}
          <div className='flex flex-col items-center'>
            <p>Total Score</p>
            <p>{p1Score.reduce( (a, b) => a + b )}</p>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center">
          {p2Score.map((score: number) => {
            return <Cell score={score} />;
          })}
        </div> */}

        <div className='mt-6'>
          <form className='grid w-full lg:grid-cols-6' onSubmit={handleSubmit}>
            <label htmlFor='player1Input' className='col-span-2'>Player 1</label>
            <Input className='bg-white text-black col-span-2' type='number' id='player1Input' name='player1Input'></Input>
            <Button className='col-span-2 hover:bg-slate-600' variant="outline" ref={submitBtnRef}>Submit</Button>
          </form>

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