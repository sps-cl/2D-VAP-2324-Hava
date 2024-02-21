const {Person, Car} = require("./classes.js"); //Imports custom module
const os = require("os");   //Import node modules
const path = require("path");
const fs = require("fs");

let x = new Person("x", "y", "z");
console.log(x);

console.log(os.hostname());

//Reading file using call back method
fs.readFile(
    path.join(__dirname, "main.js"), "utf-8",
    (error, data) => {
        if(error) console.error(error); //Handling errors
        else console.log(data);
    }
);

//Reading file using promise
fs.promises.readFile(path.join(__dirname, "main.js"), "utf-8").then(
    (data) => {
        console.log(data);
    }
).catch(
    (error) => {
        console.error(error);
    }
)