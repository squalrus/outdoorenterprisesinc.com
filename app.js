var express = require('express'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use(express.favicon());
// app.use(express.bodyParser());
// app.use(express.compress());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});