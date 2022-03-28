import React, { useContext } from 'react';
import Input from './input';
import { context } from '../../store/context';
import './board.css';

export default function Board() {
    const {state: {board}} = useContext(context);

    return (
        <div className='board'>
            {board.flat().map(
                (data, index) => <Input key={index} index={index} value={data}/>
            )}
        </div>
    )
}
