import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
            unique: true,
      },
      desc: {
            type: String,
            required: true,
      },
      image: {
            type: String,
            required: false,
      },
      username: {
            type: String,
            required: true
      },
      timestamps: true
})

module.exports = mongoose.model("Post", postSchema)