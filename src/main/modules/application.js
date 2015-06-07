var express = require('express');

express()

    .get('/(*)', function (request, response) {
      request.send('Web application page');
    })

    .listen(process.env.PORT);
