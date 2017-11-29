const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: String,
    age: Number,
    happiness: String,
    hungry: Boolean,
    sprite: String,
})

module.exports = mongoose.model('Pet', PetSchema);