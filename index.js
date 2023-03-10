/*
index.js
JS for personal website
*/

// Setup express
const express = require("express")
const app = express()

// Setup env variables
require("dotenv").config()
const PORT = process.env.PORT || 80

// Setup pug
app.set("views", "./views")
app.set("view engine", "pug")
app.use(express.static("./public"))

// GET homepage
app.get("/", (req, res) => {
    res.render("homepage")
})

// GET 404
app.get("*", (req, res) => {
    res.render("404")
})

// Run
app.listen(PORT, () => {
    console.log("[S] Server running on port: " + PORT)
})