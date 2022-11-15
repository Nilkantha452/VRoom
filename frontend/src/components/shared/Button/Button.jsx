import React from 'react'
import Styles from './Button.module.css'
import {Link} from 'react-router-dom'
const Button = ({destination}) => {
  return (
    <div className={Styles.ButtonWrapper}>
	    <Link to={`/${destination}`}>
		    <button className={Styles.Button}>
			    Go Ahead
		    </button>
	    </Link>
    </div>
  )
}

export default Button