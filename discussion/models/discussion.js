const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
        unique: true
    },
    hashtags: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: String,
        default: uuidv4()
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users", userSchema);
