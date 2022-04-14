const axios = require('axios');
const fs = require("fs");


axios.get('https://http.cat/500', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat500.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/501', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat501to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/502', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat502to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/503', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat503to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/504', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat504to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/506', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat506to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/507', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat507to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/508', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat508to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/509', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat509to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/510', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat510to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/511', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat511to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/521', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat521to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/523', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat523to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/525', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat525to.jpg", response.data)
        console.log(response);
    })
axios.get('https://http.cat/599', {
        responseType: 'arraybuffer'
    })
    .then(function (response) {

        fs.writeFileSync("cat599to.jpg", response.data)
        console.log(response);
    })






    .catch(function (error) {
        console.log(error);
    })

    .then(function () {}); 