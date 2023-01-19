const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const connection = mongoose.connect("mongodb+srv://jahn:12345@cluster0.xmolpcc.mongodb.net/test?retryWrites=true&w=majority")

module.exports = {
    connection
}