import React from 'react'
import Styles from './Card.module.css'
const Card = ({title, icon, children}) => {
    const titleMargin = {
        marginLeft: '5px',
    }
  return (
	<div className={Styles.cardWrapper}>
		<div className={Styles.card}>
			<div className={Styles.frontTextCSS}>
				<img src={`/images/${icon}.png`} alt='LOGO'/> 
				<span style={titleMargin}>{title}</span>
			</div>
            {children}
		</div>
	</div>
  )
}

export default Card