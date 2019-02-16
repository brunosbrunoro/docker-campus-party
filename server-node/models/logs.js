const mongoose = require('../database');

const LogsSchema = new mongoose.Schema({
    hostname: {
        type: String,
        require: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

const Logs = mongoose.model('logs',LogsSchema, 'logs');

module.exports = Logs;