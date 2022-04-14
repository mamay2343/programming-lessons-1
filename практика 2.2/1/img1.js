const axios = require('axios');
const fs = require("fs");


axios.get('https://http.cat/100', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat100.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/101', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat101to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/101', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat101to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/102', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat102to.jpg", response.data)
        console.log(response);
    })




    .catch(function (error) {
        console.log(error);
    })


    .then(function () {});