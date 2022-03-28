import { sendRequest } from "../../pages/home/utils";
import { updateBoard, updateCurrentDifficulty, updateLoadingStatus, updateStatus } from "../../store/actions";

export const processBoardForRequest = (board) => {
    return board.map(row => {
        return row.map(cell => {
            return parseInt(cell || 0);
        })
    })
}

const CONTENT_TYPE = {'Content-Type': 'application/x-www-form-urlencoded'};

export const validate = async (board, status, dispatch) => {
    dispatch(updateLoadingStatus(true));
    const response  = await sendRequest(
        'https://sugoku.herokuapp.com/validate',
        'POST',
        {board: processBoardForRequest(board)},
        CONTENT_TYPE,
    );
    if (response && response.status !== status){
        dispatch(updateStatus(response.status));
    }
    dispatch(updateLoadingStatus(false));
}

export const checkDifficulty = async (board, currentDifficulty, dispatch) => {
    dispatch(updateLoadingStatus(true));
    const response  = await sendRequest(
        'https://sugoku.herokuapp.com/grade',
        'POST',
        {board: processBoardForRequest(board)},
        CONTENT_TYPE,
    );
    if (response && response.difficulty !== currentDifficulty){
        dispatch(updateCurrentDifficulty(response.difficulty));
    }
    dispatch(updateLoadingStatus(false));
}

export const solve = async (board, dispatch) => {
    dispatch(updateLoadingStatus(true));
    const response  = await sendRequest(
        'https://sugoku.herokuapp.com/solve',
        'POST',
        {board: processBoardForRequest(board)},
        CONTENT_TYPE,
    );
    if (response && response.status === 'solved'){
        dispatch(updateBoard(response.solution));
        dispatch(updateCurrentDifficulty(response.difficulty));
    }
    dispatch(updateStatus(response.status));
    dispatch(updateLoadingStatus(false));
}
