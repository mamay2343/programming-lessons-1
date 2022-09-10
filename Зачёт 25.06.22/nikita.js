const http = require("http");

const fs = require("fs");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url === "/news" || request.url === "/") {
        response.write("<h2>news</h2>");
    } else if (request.url == "/news/supernews") {
        response.write("<h2>supernews</h2>");
    } else if (request.url == "/news/supernews/143") {
        response.write("<h2>143</h2>");
    } 
    else if (request.url == "/requests") {
        let content = fs.readFileSync("log.txt");
        response.writeHead(200)
        response.end(content);
    }else {
        response.write("<h2>Not found</h2>");
    }
    response.end();

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    let log = JSON.stringify(request.headers);
    log=request.url;
    
    fs.appendFileSync("log.txt", request.url);
    
    console.log("Запись файла завершена. Содержимое файла:");

};
http.createServer(requestHandler).listen(3000);