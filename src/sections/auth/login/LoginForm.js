import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm(props){
  const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passType, setPassType] = useState(true);

	const auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleLogin=()=>{

		if(auth===null){
			alert('no user found!');
		}	
		const same = auth.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password===password){

				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword('');	
				navigate('/dashboard/app')
 
			}

		}else{
			alert('user not exist!')
		}
	}
	
	return(
		<div className='Signup' style={{width:'100%', display:'flex', flexDirection:'column'}}>
			<input 
			style={{height: '2rem', backgroundColor:'#fff',outline:'none', marginTop:'2rem',padding:' 2rem',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			type='text' 
			value={username}
			onChange={e=>setUsername(e.target.value)}
			placeholder='Username'/>
			<input
			style={{height: '2rem' , backgroundColor:'#fff',outline:'none', marginTop:'2rem',padding:' 2rem',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			type={passType?'password':'text'}
			value={password}
			placeholder="password"
			onChange={e=>setPassword(e.target.value)}
			 />
			<button style={{height: '2rem',padding:'0.5rem', width:'fit-content' ,position:'absolute',marginTop:'9rem',marginLeft:'27rem', backgroundColor:'#7585E7',border:'none',fontFamily:'cursive', borderRadius:'20px'}} onClick={()=>{setPassType(!passType)}}>
			{passType?'show':'hide'}</button>
			<button style={{height: '4rem', fontWeight:'bolder' ,color:'white', padding:' 1rem', fontSize:'larger', backgroundColor:'#7585E7', marginTop:'3rem',border:'none', fontFamily:'sans-serif' , borderRadius:'20px'}}onClick={handleLogin} >Login</button>
		</div>
	);
}


export default LoginForm;