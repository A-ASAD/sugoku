import React, {useContext, useEffect, useState} from 'react';
import { updateBoard as updateBoardDispatcher } from '../../../store/actions';
import { context } from '../../../store/context';
import './input.css';


export default function Input({value, index}) {
    const {dispatch, state: {board}} = useContext(context);
    const [inputNumber, setInputNumber] = useState(value);

    const updateBoard = (value) => {
        const firstIndex = Math.trunc(index / 9);
        board[firstIndex][index%9] = value;
        dispatch(updateBoardDispatcher(board));
    }

    const handleInput = (e) => {
        let inputValue = e.target.value;
        let isDigit = /^\d+$/.test(inputValue);
        // accept only digits
        if(!inputValue || isDigit) {
            setInputNumber(inputValue);
            updateBoard(inputValue);
        }
    }

    const getClassName = (index) => {
        return `input
            ${index < 9 && 'row1'}
            ${index > 17 && index < 27 && 'row3'}
            ${index > 53 && index < 63 && 'row6'}
            ${index > 71 && 'row9'}`;
    }

    useEffect(() => {
        setInputNumber(value);
    }, [value])

    return (
        <input className={getClassName(index)} maxLength={1} type='text' value={inputNumber} onChange={handleInput}/>
    )
}
