import http from "http"
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = http.createServer((req, res)=>{
    if (req.url === "/") {
        res.end("WELCOME TO THE SERVER")
    }
else if (req.url === "./about") {
    let webpage = fs.readFileSync("about.html")
    res.end(webpage)
}
else if (req.url === "./contact") {
    let webpage = fs.readFileSync("about.html")
    res.end("Welcome to Contact")
}

else if (req.url === "./login") {
    let webpage = fs.readFileSync("about.html")
    res.end("Welcome to Login")
}
else if (req.url === "./register") {
    let webpage = fs.readFileSync("about.html")
    res.end("Welcome to Register")
}
    else {
        res.end("Page not found")
    }
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`https://localhost:${PORT}`)
})
