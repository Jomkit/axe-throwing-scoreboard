/** Custom hook for tracking user's score, turn, and button
 * 
 * Returns:
 *  userScore
 *  userTurn
 *  userBtn
 */
import React, { useState, useRef } from 'react';
import { z } from'zod/v4';

const validScores = ['1','2','3','4','5','6','8'];

const scoreSchema = z.object({
    score: z.enum(validScores)
});

export function useScore(): [
    number[], 
    number, 
    React.FormEventHandler<HTMLFormElement>, 
    React.RefObject<HTMLButtonElement>] {
    const [scores, setScores]: [Array<number>, Function] = useState(new Array(10).fill(0));
    const [turn, setTurn] = useState(1);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    // Updates score on submit press so that user can continue playing 
    // and see their updated total score
    const updateScore = (newScore: number) => {
        let newScores = [...scores];
        newScores[turn - 1] = newScore;
        setScores(newScores);
        setTurn(turn + 1);
        if (turn + 1 > scores.length) {
        btnRef.current?.setAttribute('disabled', 'true');
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        try{
        const playerScore = form.elements.namedItem('player1Input') as HTMLInputElement;
        const toValidate = {score: playerScore.value};
        console.log(toValidate);
        const validatedScore = Number(scoreSchema.parse(toValidate).score);
        updateScore(validatedScore);
        } catch(e: unknown){
        if(e instanceof z.ZodError){
            console.error(e.issues);
        }
        }
    }

    return [scores, turn, handleSubmit, btnRef as React.RefObject<HTMLButtonElement>];
}