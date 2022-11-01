// lo que se obtiene directamente de la rapidApi

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1821737d8msh6ed09113e973f73p1d89afjsn0ae3e681b42a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCfHL7p2iQg7MRAFkUIuTxuQ&part=snippet%2Cid&order=date&maxResults=9', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));