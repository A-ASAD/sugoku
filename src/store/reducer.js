import {
    UPDATE_BOARD,
    UPDATE_CURRENT_DIFFICULTY,
    UPDATE_DIFFICULTY,
    UPDATE_LOADING_STATUS,
    UPDATE_STATUS
} from "./types";


export const reducer = (state, action) => {
    switch(action.type)
    {
        case UPDATE_BOARD:
            return {...state, board: [...action.payload]};
        case UPDATE_STATUS:
            return {...state, status: action.payload};
        case UPDATE_DIFFICULTY:
            return {...state, difficulty: action.payload};
        case UPDATE_LOADING_STATUS:
            return {...state, isLoading: action.payload};
        case UPDATE_CURRENT_DIFFICULTY:
            return {...state, currentDifficulty: action.payload};
        default:
            return state;
    }
}