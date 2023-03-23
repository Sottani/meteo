const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Réponse serveur valide');
});

server.listen(process.env.PORT || 3000);
