var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
	fs.readFile('./index.html',function(err,data){
		res.end(data)
	})
	
})
server.listen(3000)

