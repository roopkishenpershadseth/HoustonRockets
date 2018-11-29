var express = require('express')
var app = express()
path = require('path');
const request = require('request'); 
const options = {
	    headers: { 
	    "X-Api-Username": "roopkishenpershadseth",
	    "x-api-key": "ym7K9Pvp",
	    "Content-Type": "application/json"
	    }	
	}

app.use('/cssfiles', express.static(path.join(__dirname, '/cssfiles/')));
app.get('/', function (req, res) {
  res.sendFile('C:/wamp64/www/Houston_Rockets_Test_Suite/HTML_Files/index.html')
})


app.get('/list', function (req, res) {
	request.get('http://rockets.jayroman.com/api/games?username=roopkishenpershadseth&api_key=ym7K9Pvp', options, function (error, response, body) {
		console.log('response:', response);
		res.send(response);
	})
})

app.get('/list/:id', function (req, res) {
	let id =req.params.id
	request.get('http://rockets.jayroman.com/api/games/'+ id +'?username=roopkishenpershadseth&api_key=ym7K9Pvp', options, function (error, response, body) {
		res.send(response.body);
	})
})


app.listen(9000); 
console.log('image server started at 9000')

