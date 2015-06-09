var express = require('express');

express()

    .use('/resources/static', express.static('build/resources/static'))

    .set('view engine', 'jade')

    .set('views', 'build/resources/templates')

    .get('/resources/templates/:template(*).(htm|html)', function (request, response) {
      response.render(request.params.template);
    })

    .get('/resources/models/example.json', function (request, response) {
      response.json({
        application: {
          title: "MEAN Stack Sample"
        }
      });
    })

    .get('/', function (request, response) {
      response.redirect('/schema');
    })

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

    .listen(process.env.PORT || 5000);
