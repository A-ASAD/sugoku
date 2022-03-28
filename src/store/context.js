import React from 'react';
import { reducer } from './reducer';


const state = {
    board: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
    ],
    difficulty: 'easy',
    currentDifficulty: 'easy',
    status: 'unsolved',
    isLoading: false,
}

export const context = React.createContext(state);

export const ContextProvider = ({ children }) => {
    let [_state, dispatch] = React.useReducer(reducer, state);
    return (
        <context.Provider value={{ state: _state, dispatch }}>
            {children}
        </context.Provider>
    )
}