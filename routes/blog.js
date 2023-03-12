/*
blog.js
JS for the blog
*/

// Setup express
const express = require("express")
const router = express.Router()

// Setup fs
const fs = require("fs")

// GET homepage
router.get("/", (req, res) => {

    var files = []
    var posts = []

    try {

        // Get files
        fs.readdirSync("./public/blogs/").forEach(file => {
            files.push(file)
        })

        // Get file data

        for (i = 0; i < files.length; i++) {
            let data = fs.readFileSync("./public/blogs/" + files[i], "utf-8").split("\n")
            let post = { title: data[0], date: data[1], link: "/blog/" + files[i] }
            posts.push(post)
        }
    } catch(err) {
    }

    // Format: { title: "", date: "", link: "" }
    res.render("blog-homepage", { blog_posts: posts })
})

// GET article
router.get("/:post", (req, res) => {

    res.render("blog")
})

// Export router
module.exports = router