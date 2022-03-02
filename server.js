// Entry point for server app

var express = require("express")

var app = express()

var count = 0
const PORT = 8000

app.get("/:id", (req, res) => {
    var dummy_data = {
        'userid': req.params['id'],
        'username': "Bosheto",
        'wins': 10,
        'losses': 24
    }
    
    // JSON 

    res.json(dummy_data)

})

app.post("/", (req, res) =>{

})

app.listen(PORT , () => {
    console.log("Server has started on port " + PORT.toString())
})