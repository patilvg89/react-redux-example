export const increaseAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: amount,
        })
    }
}

export const decreaseAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'decrease',
            payload: amount,
        })
    }
}