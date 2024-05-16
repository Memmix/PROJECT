import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../../utils/login'
import './login.css'
function Login() {
	
	const [password, setPassword] = useState('')
	
	const [email, setEmail] = useState('')
	const [user, setUser] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		if (user) navigate('/')
		if (!user) navigate('/auth/login')
	}, [user])

	const loginUser = async data => {
		const result = await login(data)
		if (result.user) {
			localStorage.setItem('user', JSON.stringify(result.user))
			setUser(localStorage.getItem('user'))
		}
	}

	return (
		<div className='login'>
			<h2 style={{ color: 'white', fontSize: '30px' }}>Login</h2>
			<input
				className = 'password'
				type='password'
				placeholder='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<input
				className = 'email'
				type='text'
				placeholder='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<button onClick={() => loginUser({  password, email })}>Login</button>
		</div>
	)
}

export default Login
