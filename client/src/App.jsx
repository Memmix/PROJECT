import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import getUsers from './utils/getUsers.js'
const values = [
    {"код": "USD", "название": "Американский доллар"},
    {"код": "EUR", "название": "Евро"},
    {"код": "JPY", "название": "Японская иена"},
    {"код": "GBP", "название": "Британский фунт"},
    {"код": "AUD", "название": "Австралийский доллар"},
    {"код": "CAD", "название": "Канадский доллар"},
    {"код": "CHF", "название": "Швейцарский франк"},
    {"код": "CNY", "название": "Китайский юань"},
    {"код": "SEK", "название": "Шведская крона"},
    {"код": "NZD", "название": "Новозеландский доллар"},
    {"код": "SGD", "название": "Сингапурский доллар"},
    {"код": "HKD", "название": "Гонконгский доллар"},
    {"код": "NOK", "название": "Норвежская крона"},
    {"код": "MXN", "название": "Мексиканское песо"},
    {"код": "INR", "название": "Индийская рупия"},
    {"код": "RUB", "название": "Российский рубль"},
    {"код": "ZAR", "название": "Южноафриканский рэнд"},
    {"код": "TRY", "название": "Турецкая лира"},
    {"код": "BRL", "название": "Бразильский реал"},
    {"код": "KRW", "название": "Южнокорейская вона"},
    {"код": "THB", "название": "Тайский бат"},
    {"код": "PLN", "название": "Польский злотый"},
    {"код": "DKK", "название": "Датская крона"},
    {"код": "AED", "название": "ОАЭ дирхам"},
    {"код": "SAR", "название": "Саудовский риял"},
    {"код": "ILS", "название": "Израильский новый шекель"},
    {"код": "PHP", "название": "Филиппинское песо"},
    {"код": "CZK", "название": "Чешская крона"},
    {"код": "HUF", "название": "Венгерский форинт"},
    {"код": "MYR", "название": "Малайзийский ринггит"}
]
function App() {
	const [users, setUsers] = useState([])
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUsers()
				console.log(data)
				setUsers(data)
			} catch (err) {
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<>
			<div className = 'top'>
				<input className = 'search'
				placeholder='search'
				onClick ={() => {
				
				}}></input>
				
				<div className = 'list'></div>
			</div>

			{isLoading ? (
				<h3 style={{ color: 'aqua', fontSize: '30px' }}>Loading...</h3>
			) : (
				<>
					<button
						onClick={() => {
							localStorage.clear()
							navigate('/auth/login')
						}}
					>
						logout
					</button>
					
				</>
			)}
		</>
	)
}






export default App
