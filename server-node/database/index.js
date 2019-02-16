const mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.BD+'/campus-party');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

module.exports = mongoose;