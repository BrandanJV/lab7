let mongoose = require("mongoose");
let Schema = mongoose.Schema

let taskSchema = Schema({
    title:String,
    author:String,
    post_date:Date,
    post_data:String
})

module.exports = mongoose.model('task', taskSchema);