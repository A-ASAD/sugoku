import React, { useContext } from 'react';
import Difficulty from './difficulty';
import { context } from '../../store/context';
import { checkDifficulty, solve, validate } from './utils';
import { getEmptyBoard } from '../../pages/home/utils';
import './controls.css';
import Loader from '../loader';
import { updateBoard } from '../../store/actions';


export default function Controls() {
    const { state: { currentDifficulty, status, board, isLoading }, dispatch } = useContext(context);

    const handleClear = () => {
        dispatch(updateBoard(getEmptyBoard()));
    }

    return (
        <div className='controls'>
            <div className='difficulty-control'>
                <Difficulty />
                <button className='button' onClick={handleClear}>Clear</button>
            </div>
            <div className='actions1'>
                <div>
                    <button className='button' onClick={() => validate(board, status, dispatch)}>Validate</button>
                    <h5 data-testid='status'>{status}</h5>
                </div>
                <div>
                    <button onClick={() => checkDifficulty(board, currentDifficulty, dispatch)}>Check Difficulty</button>
                    <h5 data-testid='current-difficulty'>{currentDifficulty}</h5>
                </div>
            </div>
            <div className='actions2'>
                <button className='button' onClick={() => solve(board, dispatch)}>Solve</button>
            </div>
            {isLoading && <Loader/>}
        </div>
    )
}
