import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Cell from './Cell';

const PlayerScore = ({playerName, playerScore, handleSubmit, submitBtnRef}:{
    playerName:string, 
    playerScore: number[], 
    handleSubmit: React.FormEventHandler<HTMLFormElement>, 
    submitBtnRef: React.RefObject<HTMLButtonElement>
}) => {
    
  return (
    <div>
        <h3>Player {playerName}'s Score</h3>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          {playerScore.map((score: number, i: number) => {
            return <Cell score={score} key={i} />;
          })}
          <div className='flex flex-col items-center'>
            <p>Total Score</p>
            <p>{playerScore.reduce( (a, b) => a + b )}</p>
          </div>
        </div>

        <div className='mt-6'>
          <form className='grid w-full lg:grid-cols-6' onSubmit={handleSubmit}>
            <label htmlFor='player1Input' className='col-span-2'>{ playerName }</label>
            <Input className='bg-white text-black col-span-2' type='radio' id='player1Input' name='player1Input'></Input>
            <Button className='col-span-2 hover:bg-slate-600' variant="outline" ref={submitBtnRef}>Submit</Button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default PlayerScore