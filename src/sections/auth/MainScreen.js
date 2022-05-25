import React,{useState, useEffect} from 'react';
import Router from '../../routes';
import ScrollToTop from '../../components/ScrollToTop';
import { BaseOptionChartStyle } from '../../components/chart/BaseOptionChart';
import { RegisterForm } from './register';
import { LoginForm } from './login';

function MainScreen(){

	
	const [loginScreen, setLoginScreen] = useState(false);
	const [signupScreen, setSignupScreen] = useState(false);
	const [loginedScreen, setLoginedScreen] = useState(false);


	const afterSignup = (username )=> {
		setSignupScreen(false); 
		setLoginScreen(false);
		setLoginedScreen(true);
	}

	const afterLogout=()=>{
		localStorage.removeItem('userlogined');
		setSignupScreen(true); 
		setLoginScreen(false);
		setLoginedScreen(false);
	}

	useEffect(()=>{
		const user=localStorage.getItem('userlogined');
		if(user !== null || user !==''){
			setSignupScreen(false); 
			setLoginScreen(false);
			setLoginedScreen(true);
			// history.push('./dashboard/app')
		}	
	},[]);
	
	return(
		<div className='MainScreen'>
			{signupScreen?<div>
				<RegisterForm afterSignup={afterSignup} />
				<button onClick={()=>{setSignupScreen(false); setLoginScreen(true)}}>do login</button>
			</div>:''}

			
			{loginScreen?<div>
				<LoginForm afterLogin={afterSignup} />
				<button onClick={()=>{setSignupScreen(true); setLoginScreen(false)}}>do signup</button>
			</div>:''}
			{loginedScreen?<div>
                <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
	  
				{/* <button onClick={afterLogout}>logout</button> */}
			</div>:''}
			
		</div>
	);
}


export default MainScreen;