const mongoose = require("mongoose")
const DB_URL="mongodb+srv://janhavi:janhavi@cluster0.xmolpcc.mongodb.net/test?retryWrites=true&w=majority"
const connection = mongoose.connect(DB_URL)

module.exports = {
    connection
}