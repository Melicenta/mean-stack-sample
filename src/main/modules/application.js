var express = require('express');

express()

    .use('/resources/static', express.static('src/main/resources/static'))

    .set('view engine', 'jade')

    .set('views', 'src/main/resources/templates')

    .get('/(*)', function (request, response) {
      response.render("index", {
        application: {
          title: 'MEAN Stack Sample'
        },
        system: {
          path: '/'
        }
      });
    })

    .listen(process.env.PORT);
