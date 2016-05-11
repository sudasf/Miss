var http=require('http')
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
	res.end('这是孙峰的阿里云服务器 shabi')
})
server.listen(3000)

