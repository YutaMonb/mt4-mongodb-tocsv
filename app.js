'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
mongoose.connect('mongodb://localhost/oanda', { useNewUrlParser: true });

let connection = mongoose.connection;

connection.once('open', function () {

    connection.db.collection("ticks", (err, collection) => {
        collection.find({}).toArray((err, data) => {
            fs.writeFileSync('./result/result.json', JSON.stringify(data));
            console.log('finish.');
            process.exit(0);
        });
    });

});