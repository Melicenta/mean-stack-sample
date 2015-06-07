var express = require('express');

express()

    .get('/(*)', function (request, response) {
      response.send('Web application page');
    })

    .listen(process.env.PORT);
