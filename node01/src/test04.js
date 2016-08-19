const http = require('http');

const server = http.createServer(function(request, response){
	console.log('okok');
	 
	response.statusCode=200;
	 
	response.setHeader('Content-Type', 'text/html;charset=UTF-8');
	
	response.write('<html><head><title>test...</title><head>\n');
	response.write('<body>\n');
	response.write('<h1>안녕하세여~</h1>\n');
	response.write('</body>\n');
	 
	response.end();	
});

server.listen(8889);

console.log('서버 시작....');