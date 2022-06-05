import { combineReducers } from "redux";
import AmountReducer from './AmountReducer';

const reducers = combineReducers({
    amountReducer: AmountReducer
})

export default reducers;