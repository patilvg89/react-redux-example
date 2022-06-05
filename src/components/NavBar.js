import React from "react";
import styles from "./navBar.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const balance = useSelector((state) => {
    const {
      amountReducer: { amount },
    } = state;
    return amount;
  });
  return (
    <>
      <span class={styles.amount}>Amount: {balance}</span>
    </>
  );
}
