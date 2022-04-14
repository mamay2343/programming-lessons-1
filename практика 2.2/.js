const fs = require('fs');
const axios = require('axios');
axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json); 
            console.log(json);
            fs.writeFile('zhp.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');
            });
        }
    )
    .catch(function (error) {
        console.log(error);
    })