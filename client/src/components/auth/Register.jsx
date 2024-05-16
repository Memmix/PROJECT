import { useState } from 'react'
import register from '../../utils/register'
import './register.css'
function Register() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')

	const [passwordType, setPasswordType] = useState('password')

	const registerUser = async data => {
		const result = await register(data)
		console.log(result)
	}

	const togglePassword = () => {
		setPasswordType(prev => {
			if (prev === 'password') return 'text'
			else return 'password'
		})
	}

	return (
		<div className='Register'>
				<h2 style={{ color: 'black', fontSize: '30px' }}>Register</h2>
				<input
					className = 'name'
					type='text'
					placeholder='Register'
					value={username}
					onChange={e => {
					console.log(e.target.value)
					setUsername(e.target.value)
				}}
				/>
				<input
					className = 'surname'
					type='text'
					placeholder='Surname'
					value={surname}
					onChange={e => {
					console.log(e.target.value)
					setSurname(e.target.value)
				}}
				/>
				<input
					className = 'password'
					type={passwordType}
					placeholder='password'
					value={password}
					onChange={e => {
					console.log(e.target.value)
					setPassword(e.target.value)
					}}
				/>
				<input
					className = 'email'
					type='text'
					placeholder='Email'
					value={email}
					onChange={e => {
					console.log(e.target.value)
					setEmail(e.target.value)
					}}
				/>
				<button onClick={() => togglePassword()}>eye</button>
				<button onClick={() => registerUser({ username, password,surname,email})}>
				Register
				</button>
			</div>
	)
}

export default Register
