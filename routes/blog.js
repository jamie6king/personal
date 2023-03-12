/*
blog.js
JS for the blog
*/

// Setup express
const express = require("express")
const router = express.Router()

// GET homepage
router.get("/", (req, res) => {

    // Format: { title: "", date: "", link: "" }
    res.render("blog-homepage", { blog_posts: [ ] })
})

// GET article
router.get("/:year/:month/:day/:title", (req, res) => {
    res.render("blog")
})

// Export router
module.exports = router