import React from 'react'
import styles from "./InputPassword.module.css";

function InputPassword(props) {
  return (
    <div className={styles.container}>
    {props.label && <label>{props.label}</label>}
    <input type="password" {...props} />
  </div>
  )
}

export default InputPassword