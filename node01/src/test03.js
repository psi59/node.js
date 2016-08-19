//1. 사용할 라이브러리를 가져온다.
//=> require('모듈명')
//const == final(java)
const http = require('http');

//2. HTTP 프로토콜에 따라 요청을 처리할 서버 객체를 준비한다.
const server = http.createServer(function(request, response){
	//클라이언트 요청이 들어오면 이 함수가 호출된다.
	console.log('okok');
	
	//클라이언트에게 응답을 완료하지 않으면,
	//클라이언트 브라우저는 계속 기다린다.
	
	
	//HTTP 응답의 최소 요건
	
	//1)응답 상태코드 지정     
	response.statusCode=200;
	
	//2)응답할 때 보내는 콘텐츠의 타입 및 문자집합 정보를 설정한다.
	response.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	
	//3)콘텐츠 출력
	response.write('Hello, World!\n');
	response.write('방가방가!!!\n');
	
	//4)응답 완료를 지정한다.
	response.end();	
});

//3. 서버 객체를 시작.
//=> HTTP 요청을 받을 수 있다.
server.listen(8888);

console.log('서버 시작....');