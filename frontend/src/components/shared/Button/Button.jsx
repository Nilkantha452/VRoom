import React from 'react'
import Styles from './Button.module.css'
const Button = ({onClick, text}) => {
  return (
    <div className={Styles.ButtonWrapper}>
		    <button onClick={onClick} className={Styles.Button}>
			    {text}
		    </button>
    </div>
  )
}

export default Button