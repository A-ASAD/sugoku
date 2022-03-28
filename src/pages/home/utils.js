export const getEmptyBoard = () => {
    return [
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
        new Array(9).fill(''),
    ];
}

export const getBoardFromResponse = (response) => {
    const letterToIndex = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8};
    const board = getEmptyBoard();
    for (let index in response) {
        let index1 = letterToIndex[index.substring(0, 1)];
        let index2 = parseInt(index.substring(1)) - 1;
        board[index1][index2] = response[index];
    }
    return board;
}

const encodeBoard = (data) => {
    return data.reduce(
        (result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === data.length -1 ? '' : '%2C'}`,
        '',
    );
}
const encodeParams = (params) => {
    return Object.keys(params)
    .map(key => key + `=%5B${encodeBoard(params[key])}%5D`)
    .join('&');
}

export const sendRequest = async (url, method='GET', data=null, headers={}) => {
    try{
        const response = await fetch(url, {
                method: method,
                body: data && encodeParams(data),
                headers: headers,
            }
        );
        return await response.json();
    }
    catch(e){
        console.log(e.message);
    }
    return null;
}