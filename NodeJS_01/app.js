import Express from "express";
import { Person } from "./person.js";
import path from "path";
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)); 
const app = Express();
app.use(Express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/random-person", (req, res) => {
    let names = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Daniel", "Olivia", "Matthew", "Sophia", "Andrew", "Isabella", "James", "Mia", "William", "Charlotte", "Joseph", "Amelia", "Benjamin", "Evelyn"];
    let surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];
    res.send(new Person(
        Math.round(Math.random() * 1000),
        names[Math.round(Math.random() * (names.length-1))],
        surnames[Math.round(Math.random() * (surnames.length-1))]
    )).toString();
});
app.listen(7707);