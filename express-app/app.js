const express = require('express'); //import biblioteki
const Books = require('./models/book'); //import biblioteki
const app = express(); //micro framework

app.get("/", function (req, res) {
    return res.send({ status: "ok" });
});

app.get("/books", function (req, res) {
    return res.send(Books.findAll())
});

app.get("/books/:id", function (req, res) {
    return res.send(Books.findById(req.params.id));
});

app.get('/books/:id/view', function (req, res) {
    return res.sendFile('book-'+ req.params.id +'.pdf', { root: __dirname + "/pdf" } );
});



app.listen(7882); //port pod którym aplikacja ma nasłuchiwać