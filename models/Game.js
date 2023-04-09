const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    board: String,
    playerOne: String,
    playerTwo: String,
    playerOneScore: Number,
    playerTwoScore: Number
})

module.exports = mongoose.model('Game', gameSchema);