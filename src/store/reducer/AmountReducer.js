const initialState = {
    amount: 100,
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                amount: action.payload,
            }
        case 'decrease':
            return {
                ...state,
                amount: action.payload,
            }
        default:
            return state;
    }
 }
export default reducer;