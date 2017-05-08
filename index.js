const achievements = require('./Achievements'),
      http         = require('http'),
      express      = require('express');
      port         = process.env.PORT || 3000;
      app          = express();

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

<<<<<<< HEAD
http.createServer(app).listen(port);
=======
http.createServer(app).listen(port);
>>>>>>> adee1100139665e8eff9d85bf60be9f33beda7e0
