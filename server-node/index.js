const express = require('express');
const router = express.Router();
const os = require('os');
const Logs = require('./models/logs');

router.get('/', async (req,res) => {
    var logs = {
        hostname: os.hostname()
    }
    logs = await Logs.create(logs);
    return res.send('Logs - Hostname'+logs.hostname+' Datetime Log'+logs.dataCadastro);
});

module.exports = router;
