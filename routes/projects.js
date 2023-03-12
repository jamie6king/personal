/*
projects.js
JS for the projects page
*/

// Setup express
const express = require("express")
const router = express.Router()

// GET homepage
router.get("/", (req, res) => {

    // Format: { title: "", date: "", link: "" }
    res.render("projects-homepage")
})

// GET project
router.get("/:project", (req, res) => {
    res.render("projects")
})

// Export router
module.exports = router