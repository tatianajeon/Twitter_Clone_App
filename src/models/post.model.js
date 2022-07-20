const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        posts: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('post', postSchema)