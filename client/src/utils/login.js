const login = data => {
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3002/login', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			})
			.then(response => response.json())
			.then(json => {
				resolve(json)
			})
			.catch(error => reject(error))
	})
}

export default login