//class Person{


//print(){
// console.log(`аутентификация: ${this.name} Параметры аутентификации: ${this.возраст}`);
//}
//}
//const tom = new Person();
//tom.name = "Коля";
//tom.возраст= 23;
//tom.print();

//const bob = new Person();
//bob.name = "Миша";
//bob.возраст = 22;
//bob.print();

const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const express = require('express');
const app = express()
const port = 3000
const http = require("http");


class Person {
constructor(login,password) { this.login = login;

this.password = password;
}
sayHi() {
console.log(this.login);
console.log(this.password);
}
}

let ivanov = new Person('Пермяков', "3456fguhj");
let petrov = new Person('Козлов', "xdctfbhunj");

const requestHandler = (request, response) => {
response.setHeader("Content-Type", "text/html; charset=utf-8;");
function Input(){
login_ok = false;
user_name = "Пермяков";
password = "";
user_name = ("Логин","");
user_name = user_name.toLowerCase();
password = prompt("Пароль","");
password = password.toLowerCase();
if (user_name=="login" && password=="pass") {
login_ok = true;
window.location = "index.php";
}
if (user_name=="login2" && password=="pass2") {
login_ok = true;
window.location = "forum/index.php";
}

if (login_ok==false) alert("Неверный логин или пароль!");
}
Input;
response.end();
if (request.url === "/ivanov" ) {
response.write('login: '+'password: ');

} else if (request.url == "/petrov") {
response.write('login: '+'password: ');
}


};

http.createServer(requestHandler).listen(3000);




//parse url




//axios.get("https://localhost:3000/+").then(
//response => {
// const a = response.data;
//console.log(response);
//let json = JSON.stringify(a);
//console.log(typeof json);
//console.log(json);
//fs.writeFile('todos1.json', json, function (err) {
// if (err) return console.log(err);
//console.log('json file has created');

//});

//}
//)
//.catch(function (error) {
// console.log(error);
//})
//app.get('/localhost/:id', (req, res) => {



// res.send(todos[req.params.id]);

//})
