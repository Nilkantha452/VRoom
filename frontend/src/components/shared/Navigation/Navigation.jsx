import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Navigation.module.css'

function Navigation() {

    const logoStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWidth: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    }
    const logoText = {
        marginLeft: '5px'
    }

  return (
    <nav className={`${Styles.navBar} container`}>

        <Link style={logoStyle} to = "/">
        
        <img src="/images/shit.png" alt="lOGO"/>
        <span style={logoText}>VRoom</span>
        
        </Link>
    </nav>
  )
}

export default Navigation