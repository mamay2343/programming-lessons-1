const express = require("express");
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;
const ROOT = path.join(__dirname);
// создаем парсер для данных application/x-www-form-urlencoded


app.use(express.urlencoded({
    extended: false
}));
app.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.sendFile(path.join(ROOT, '2ex.html'));
});
app.post("/login", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'semantika.html'));
});
app.post("/buy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'buy.html'));
});
app.post("/buyy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'buyy.html'));
});
app.post("/buyyy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'buyyy.html'));
});
app.post("/nuy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'nuy.html'));
});
app.post("/muy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'muy.html'));
});
app.post("/vuy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'vuy.html'));
});
app.post("/cuy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'cuy.html'));
});
app.post("/zuy", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, 'zuy.html'));
});
app.post("/.html", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.sendFile(path.join(ROOT, '.html'));
});
app.listen(3000, () => console.log("Сервер запущен..."));