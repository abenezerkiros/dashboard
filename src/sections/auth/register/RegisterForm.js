import React,{useState} from 'react';

function RegisterForm(props){ 

	const [username, setUsername] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [passType1, setPassType1] = useState(true);
	const [passType2, setPassType2] = useState(true);

	let auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleSignup=()=>{

		if(auth===null){
			auth=[{'username':'aaa','password':'aaa'},];
		}
			
		if(password1===password2){
			
			const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'password':password1}];
				localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword1('');
				setPassword2('');
				props.afterSignup(username);
			}else{
				alert(' exist!')
			}
		}else{
			alert('Passwords are not matching')
		}
	}
	
	return(
		<div className='Signup' style={{width:'100%', display:'flex', flexDirection:'column'}}>
		
			<input type='text' 
			value={username}
			style={{height: '2rem', backgroundColor:'#fff',outline:'none', marginTop:'2rem',padding:' 2rem',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			onChange={e=>setUsername(e.target.value)}
			placeholder='Username'/>
			
			<input type={passType1?'password':'text'}
			value={password1}
			placeholder='Password'
			style={{height: '2rem', backgroundColor:'#fff',outline:'none', marginTop:'2rem',padding:' 2rem',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			onChange={e=>setPassword1(e.target.value)}
			 />
			
			<button  style={{height: '2rem',padding:'0.5rem',outline:'none', width:'fit-content' ,position:'absolute',marginTop:'9rem',marginLeft:'27rem', backgroundColor:'#7585E7',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
		 onClick={()=>{setPassType1(!passType1)}}>
			{passType1?'show':'hide'}</button>
			<input type={passType2?'password':'text'} 
			value={password2}
			placeholder='Password'
			style={{height: '2rem', backgroundColor:'#fff',outline:'none', marginTop:'2rem',padding:' 2rem',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			onChange={e=>setPassword2(e.target.value)}
						/>	
			<button style={{height: '2rem',padding:'0.5rem', width:'fit-content' ,position:'absolute',marginTop:'15rem',marginLeft:'27rem', backgroundColor:'#7585E7',border:'none',fontFamily:'cursive', borderRadius:'20px'}}
			onClick={()=>{setPassType2(!passType2)}}>
			{passType2?'show':'hide'}</button>
			<button  style={{height: '4rem', fontWeight:'bolder' ,color:'white', padding:' 1rem', fontSize:'larger', backgroundColor:'#7585E7', marginTop:'3rem',border:'none', fontFamily:'sans-serif' , borderRadius:'20px'}} onClick={handleSignup}>signup</button>
		</div>
	);
}


export default RegisterForm;