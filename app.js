var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());

// フォルダを静的コンテンツのフォルダとする	
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/api/test",function(req,res){
	res.send("test");
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
