const axios = require('axios');
const fs = require("fs");


axios.get('https://http.cat/200', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat200.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/201', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat201to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/202', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat202to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/203', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat203to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/204', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat204to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/206', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat206to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/207', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat207to.jpg", response.data)
        console.log(response);
    })

    




    .catch(function (error) {
        console.log(error);
    })

    .then(function () {});