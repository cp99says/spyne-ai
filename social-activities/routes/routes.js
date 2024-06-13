const express = require("express");
const app = express();

const validateRequest = require('./../middleware/validate_token')
const activity = require('./../controllers/activity')

app.patch("/likes", validateRequest.validate, (req, res) => {
    activity.likeDiscussion(req, res)
})

module.exports = app