import { NavLink, Outlet } from 'react-router-dom'
import './auth.css'
function Auth() {
	return (
		<div className = 'big'>
			<div className = 'top'>
				<NavLink to='/auth/login'>Логин</NavLink> <br />
				<NavLink to='/auth/register'>Регистрация</NavLink>
			</div>
			
			
			<Outlet />
		</div>
	)
}

export default Auth
