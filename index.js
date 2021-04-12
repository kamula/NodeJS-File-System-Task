const http = require("http");
const fs = require("fs");
const url = "http://jsonplaceholder.typicode.com/posts";
http
    .get(url, (res) => {
        let rawData = "";
        let data;
        // data has been received
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        // the whole process has ended, write received data to file
        res.on("end", () => {
            // write data to file
            fs.writeFile(`${__dirname}/result/posts.json`, rawData, (err) => {
                // if there is an error throw the error
                if (err) {
                    throw err;
                }
                console.log("Data has been saved");
            });
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });