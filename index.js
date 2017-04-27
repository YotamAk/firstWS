var achievements = require('./Achievements'),
    http = require('http'),
    express = require('express');

    var app = express();

    var a1 = new achievements(20, 'football');
    a1.plusMedals();
    a1.plusMedals();
    a1.plusMedals();
    a1.minusMedals();
    a1.minusMedals();
    a1.minusMedals();
    a1.minusMedals();

    app.get('/', function(req, res) {
    res.send(`a1.getAllData()`);
});

http.createServer(app).listen(3000);