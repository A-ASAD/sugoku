import React, { useContext } from 'react';
import { updateDifficulty } from '../../../store/actions';
import { context } from '../../../store/context';
import './difficulty.css';


export default function Difficulty() {
    const {state: {difficulty}, dispatch} = useContext(context);

    const handleChange = (e) => {
        dispatch(updateDifficulty(e.target.value));
    }

    return (
        <div className='difficulty'>
            <h4>Difficulty:</h4>
            <select value={difficulty} onChange={handleChange}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
                <option value='random'>Random</option>
            </select>
        </div>
    )
}
