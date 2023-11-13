const express = require("express");

const app = express();

const joi = require("joi");

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let foods = [
    {id:1 , name:"Hot Dog", description: "Weiner on a bun", review:"Super yummy!"},
    {id:2, name:"Hamburger", description:"Patty with condiments in a bun", rating:"Wack!"},
    {id:3, name:"Pizza", description:"Bread with melted cheese", rating:"So delicious!"}
]

app.get("/api/foods", (req, res) => {
    res.send(foods);
});

app.listen(3000, () =>{
    console.log("Im listening");
}); 