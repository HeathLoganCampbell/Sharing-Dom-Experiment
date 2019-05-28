// mirror["initialize"].apply(mirror, [rootId, children]);
//mirror["applyChanged"].apply(mirror, [{id: 28}], [{id: 34, nodeType: 3, parentNode: {id: 27}, previousSibling: null, textContent: "Heath - mm)"}], [], []);
const express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
const JSON = require("circular-json");
var bodyParser = require("body-parser");

app.use(express.static("./"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/recorder.html");
});

app.get("/player", function(req, res) {
	res.sendFile(__dirname + "/player.html");
});

//START COLLECTORS
app.get("/collect", function(req, res) {
	res.sendFile(__dirname + "/player.html");
});

app.get("/collect/assets", function(req, res) {
	const json = JSON.stringify(req.query);
	res.send(json);
});
//END COLLECTORS

changeHistory = [];
io.on("connection", function(socket) {
	socket.on("recorder", function(msg) {
		console.log(msg);
		changeHistory.push(msg);
		socket.broadcast.emit("player", msg);
	});

	socket.on("downloadHistory", function(msg) {
		for (var i = 0; i < changeHistory.length; i++)
			socket.emit("player", changeHistory[i]);
	});
});

http.listen(3000, function() {
	console.log("listening on *:3000");
});
