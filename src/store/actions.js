import {
    UPDATE_BOARD,
    UPDATE_CURRENT_DIFFICULTY,
    UPDATE_DIFFICULTY,
    UPDATE_LOADING_STATUS,
    UPDATE_STATUS
} from "./types";


export const updateBoard = (board) => {
    return {
        type: UPDATE_BOARD,
        payload: board
    }
}

export const updateStatus = (status) => {
    return {
        type: UPDATE_STATUS,
        payload: status
    }
}

export const updateDifficulty = (difficulty) => {
    return {
        type: UPDATE_DIFFICULTY,
        payload: difficulty
    }
}

export const updateLoadingStatus = (isLoading) => {
    return {
        type: UPDATE_LOADING_STATUS,
        payload: isLoading
    }
}

export const updateCurrentDifficulty = (currentDifficulty) => {
    return {
        type: UPDATE_CURRENT_DIFFICULTY,
        payload: currentDifficulty
    }
}
