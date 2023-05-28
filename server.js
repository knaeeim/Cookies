const express = require('express');
const helmet = require('helmet');
const cookieparser = require('cookie-parser');
const app = express();
const router = require("./router"); 



app.use(express.static("public"));
app.use(express.json());
app.use(helmet()); 
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());


// app.use("/", routers);


app.get("/set-cookie", (req, res, next) =>{
    console.log("Hello");
    res.cookie("mycookie", "Hello world!", { maxAge: 600000, httpOnly: true});
    res.send("cookie seted");
});

app.get ("/get-cookie", (req, res, next) =>{
    const mycookievalue = req.cookies.mycookie;
    res.send(`cookie value is ${mycookievalue}`);
});

const port = 8000; 
app.listen((port, () =>{
    console.log(`Server is listening on ${port}`);
}));


