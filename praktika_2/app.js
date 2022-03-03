const http = require("http");
const requestHandler = (request, response) => {
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.end("ddd");
};
http.createServer(requestHandler).listen(3000);