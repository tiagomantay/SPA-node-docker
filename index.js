const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res) => {
	res.sendFile(__dirname + 'index.html')
})

app.listen("3000", ()=> {
	console.log("Server running on port 3000");
})