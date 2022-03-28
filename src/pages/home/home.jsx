import React, { useContext, useEffect } from 'react';
import Board from '../../components/board';
import Controls from '../../components/controls';
import Loader from '../../components/loader';
import {
    updateBoard,
    updateCurrentDifficulty,
    updateLoadingStatus,
    updateStatus
} from '../../store/actions';
import { context } from '../../store/context';
import { getBoardFromResponse, sendRequest } from './utils';
import './home.css';


export default function Home() {
    const { state: {difficulty, isLoading}, dispatch } = useContext(context);

    useEffect(() => {
        const getData = async () => {
            dispatch(updateLoadingStatus(true));
            const data = await sendRequest(
                `https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`
            );
            dispatch(updateCurrentDifficulty(data.difficulty));
            dispatch(updateStatus('unsolved'));
            const board = getBoardFromResponse(data.puzzle);
            dispatch(updateBoard(board));
            dispatch(updateLoadingStatus(false));
        }
        getData();
    }, [difficulty, dispatch])

    return (
        <div className='home'>
            <Board />
            <Controls />
            {isLoading && <Loader />}
        </div>
    )
}
