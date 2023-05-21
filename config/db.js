const mongoose = require('mongoose');
// mongoose.set('debug', true);


const connection = mongoose.createConnection(`mongodb+srv://officialrrye5:Q7gBJhDT0nMAGE0f@cluster0.on6hvbg.mongodb.net/?retryWrites=true&w=majority`).on('open', () => { console.log("MongoDB Connected"); }).on('error', () => {
    console.log("MongoDB Connection error");
});

module.exports = connection;