// mirror["initialize"].apply(mirror, [rootId, children]);
//mirror["applyChanged"].apply(mirror, [{id: 28}], [{id: 34, nodeType: 3, parentNode: {id: 27}, previousSibling: null, textContent: "Heath - mm)"}], [], []);
const express = require("express");
var app = express();
const http = require("http");
var https = require("https");
var httpServer = http.Server(app);
var io = require("socket.io")(httpServer);
const JSON = require("circular-json");
var bodyParser = require("body-parser");
const fs = require("fs");

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

//START PROXY
// All the resources we download will be put here, so we have an easy access point to get them
//proxy/(UUID OF SITE)/(URL)
//should date be included?
app.get("/proxy", function(req, res) {
	res.sendFile(__dirname + "/player.html");
});
//END PROXY

changeHistory = [];
io.on("connection", function(socket) {
	socket.on("recorder", function(msg) {
		console.log(msg);
		changeHistory.push(msg);
		if (msg.type == "stylesheets") {
			console.log("sheets!!!!");
			for (var i = 0; i < msg.args[0].length; i++) {
				console.log("Downloading");
				const file = fs.createWriteStream("copy.css");
				const url = msg.args[0][i];
				if (url.includes("https"))
					https.get(url, function(response) {
						response.pipe(file);
					});
				else
					http.get(url, function(response) {
						response.pipe(file);
					});
			}
		}
		socket.broadcast.emit("player", msg);
	});

	socket.on("downloadHistory", function(msg) {
		for (var i = 0; i < changeHistory.length; i++)
			socket.emit("player", changeHistory[i]);
	});
});

httpServer.listen(3000, function() {
	console.log("listening on *:3000");
});
