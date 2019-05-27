// mirror["initialize"].apply(mirror, [rootId, children]);
// mirror["initialize"].apply(mirror,[1,[{"nodeType":10,"id":2,"name":"html","publicId":"","systemId":""},{"nodeType":1,"id":3,"tagName":"HTML","attributes":{"lang":"en"},"childNodes":[{"nodeType":1,"id":4,"tagName":"HEAD","attributes":{},"childNodes":[{"nodeType":3,"id":5,"textContent":"\n\t\t"},{"nodeType":1,"id":6,"tagName":"META","attributes":{"charset":"UTF-8"}},{"nodeType":3,"id":7,"textContent":"\n\t\t"},{"nodeType":1,"id":8,"tagName":"META","attributes":{"name":"viewport","content":"width=device-width, initial-scale=1.0"}},{"nodeType":3,"id":9,"textContent":"\n\t\t"},{"nodeType":1,"id":10,"tagName":"META","attributes":{"http-equiv":"X-UA-Compatible","content":"ie=edge"}},{"nodeType":3,"id":11,"textContent":"\n\t\t"},{"nodeType":1,"id":12,"tagName":"TITLE","attributes":{},"childNodes":[{"nodeType":3,"id":13,"textContent":"Recorder"}]},{"nodeType":3,"id":14,"textContent":"\n\t\t"},{"nodeType":1,"id":15,"tagName":"SCRIPT","attributes":{"src":"customisedLibs/mutation-summary/src/mutation-summary.js"}},{"nodeType":3,"id":16,"textContent":"\n\t\t"},{"nodeType":1,"id":17,"tagName":"SCRIPT","attributes":{"src":"customisedLibs/mutation-summary/util/tree-mirror.js"}},{"nodeType":3,"id":18,"textContent":"\n\t\t"},{"nodeType":1,"id":19,"tagName":"SCRIPT","attributes":{},"childNodes":[{"nodeType":3,"id":20,"textContent":"\n\t\t\tvar mirrorParams = {\n\t\t\t\tinitialize: function(rootId, children) {\n\t\t\t\t\tconsole.log(\"init\");\n\t\t\t\t\tconsole.log(JSON.stringify([rootId, children]));\n\t\t\t\t},\n\t\t\t\tapplyChanged: function(removed, addedOrMoved, attributes, text) {\n\t\t\t\t\tconsole.log(\"applyChanged\");\n\t\t\t\t\tconsole.log([removed, addedOrMoved, attributes, text]);\n\t\t\t\t},\n\t\t\t\tcreateElement: function(tagName) {\n\t\t\t\t\tconsole.log(\"createElement\");\n\t\t\t\t\tif (tagName == \"SCRIPT\") {\n\t\t\t\t\t\tvar node = document.createElement(\"NO-SCRIPT\");\n\t\t\t\t\t\tnode.style.display = \"none\";\n\t\t\t\t\t\treturn node;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (tagName == \"HEAD\") {\n\t\t\t\t\t\tvar node = document.createElement(\"HEAD\");\n\t\t\t\t\t\tnode.appendChild(document.createElement(\"BASE\"));\n\t\t\t\t\t\tnode.firstChild.href = base;\n\t\t\t\t\t\treturn node;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tsetAttribute: function(node, attr, val) {\n\t\t\t\t\t// remove anchors's onclick dom0-style handlers so they\n\t\t\t\t\t// don't mess with our click handler and don't produce errors\n\t\t\t\t\tif (node.nodeName == \"A\" && attr == \"onclick\") {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\n\t\t\twindow.onload = () => {\n\t\t\t\tvar treeMirror = new TreeMirrorClient(document, mirrorParams);\n\t\t\t};\n\t\t"}]},{"nodeType":3,"id":21,"textContent":"\n\t"}]},{"nodeType":3,"id":22,"textContent":"\n\t"},{"nodeType":1,"id":23,"tagName":"BODY","attributes":{},"childNodes":[{"nodeType":3,"id":24,"textContent":"\n\t\t"},{"nodeType":1,"id":25,"tagName":"DIV","attributes":{},"childNodes":[{"nodeType":3,"id":26,"textContent":"\n\t\t\t"},{"nodeType":1,"id":27,"tagName":"H1","attributes":{},"childNodes":[{"nodeType":3,"id":28,"textContent":"Hey"}]},{"nodeType":3,"id":29,"textContent":"\n\t\t"}]},{"nodeType":3,"id":30,"textContent":"\n\t\t"},{"nodeType":1,"id":31,"tagName":"H2","attributes":{},"childNodes":[{"nodeType":3,"id":32,"textContent":"Rarr"}]},{"nodeType":3,"id":33,"textContent":"\n\t"},{"nodeType":8,"id":34,"textContent":" Code injected by live-server "},{"nodeType":3,"id":35,"textContent":"\n"},{"nodeType":1,"id":36,"tagName":"SCRIPT","attributes":{"type":"text/javascript"},"childNodes":[{"nodeType":3,"id":37,"textContent":"\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n"}]},{"nodeType":3,"id":38,"textContent":"\n\n"}]}]}]])

//mirror["applyChanged"].apply(mirror, [{id: 28}], [{id: 34, nodeType: 3, parentNode: {id: 27}, previousSibling: null, textContent: "Heath - mm)"}], [], []);
const express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static("./"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/recorder.html");
});

app.get("/player", function(req, res) {
	res.sendFile(__dirname + "/player.html");
});

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
