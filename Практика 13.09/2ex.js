const express = require("express");
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;
const ROOT = path.join(__dirname);
// создаем парсер для данных application/x-www-form-urlencoded

app.use('/static', express.static(path.join(ROOT, 'static')));
app.use(express.urlencoded({
    extended: false
}));
app.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.sendFile(path.join(ROOT, id + 'ex.html'));
});
app.post("/login",function (request, response) {
            if (!request.body) return response.sendStatus(400);
            console.log(request.body);
            response.send(`${request.body.login}`);
});
   
app.listen(3000, ()=> console.log("Сервер запущен..."));