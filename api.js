export const getMediaApi = pnr => fetch(
	'http://enroute-backend.herokuapp.com/home', {
		method: 'POST',
		body: JSON.stringify(pnr),
		headers: {
			'Content-type': 'application/json'
		}
	}
).then(response => response.json())
.then(data => data);

export const getMediaGenreApi = genre => fetch(
	`http://enroute-backend.herokuapp.com/genres?genre=${genre}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json'
		}
	}
).then(response => response.json())
.then(data => data)
