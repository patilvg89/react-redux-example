import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
// import actions from '../store/actions';
import {amountActions} from '../store/actions/index';

export default function ButtonContainer() {
  const dispatch = useDispatch();
  const balance = useSelector(state => {
    const { amountReducer: {amount}} = state;
    return amount;
  });

  const {increaseAmount, decreaseAmount} = bindActionCreators(amountActions, dispatch);
  return (
    <div>
      
      <button style={{}} onClick={() => {
        increaseAmount(balance+ 100);
      }}>Increase Amount</button>
      <button style={{}} onClick={() => {
        decreaseAmount(balance -100);
      }}>Decrease Amount</button>
    </div>
  )
}
