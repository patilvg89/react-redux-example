import React, { Component } from "react";
import { connect } from "react-redux";
import {amountActions} from '../store/actions/index';

export class CenterComponent extends Component {
  render() {
    const { balance, increaseAmount, decreaseAmount } = this.props;
    return (
      <>
        <div>Amount:{balance}</div>
        <button
          style={{}}
          onClick={() => {
            increaseAmount(balance + 100);
          }}
        >
          Increase Amount
        </button>
        <button
          style={{}}
          onClick={() => {
            decreaseAmount(balance - 100);
          }}
        >
          Decrease Amount
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.amountReducer.amount,
});

const mapDispatchToProps = dispatch => ({
    increaseAmount: (amount) => { 
        dispatch(amountActions.increaseAmount(amount))
      },
    decreaseAmount: (amount) => { 
        dispatch(amountActions.decreaseAmount(amount))
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterComponent);
