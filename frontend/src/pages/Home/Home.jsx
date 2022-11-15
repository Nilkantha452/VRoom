import React from 'react';
import Styles from './Home.module.css';
import {Link} from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
const Home = () => {
  return (
	<div className={Styles.cardWrapper}>
		<div className={Styles.card}>
			<div className={Styles.frontTextCSS}>
				<img src='/images/shit.png' alt='LOGO'/> 
				<span>Welcome to VRoom</span>
			</div>
			<p className={Styles.pTag}>
				This is the best website ever, It is developed by Myself i.e. Nilkantha Bhattacharjee, Please find the code in Nilkantha452/VRoom, I can develop websites with React alongwith node.js framework. BTW that website will provide you the services to communicate with others with ease...
			</p>
			<Button destination = 'Login'/>
			<div className={Styles.SignUpWrapper}>
				<div className={Styles.SignUp}>
					<span>Don't have an account?</span>
					<Link to='/Register' className={Styles.SignUpText}>Sign Up</Link>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home