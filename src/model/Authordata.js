const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.1mnwz.mongodb.net/LIBRARY?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    books: String,
    country: String,
    img: String
});

const Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;
