var express = require('express'),
    path = require('path'),
    app = express(),

    testimonials = require('./data/testimonials');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use(express.favicon());
// app.use(express.bodyParser());
// app.use(express.compress());
app.use(express.static(path.join(__dirname, 'public')));

function randomTestimonial() {
	var index = Math.floor(Math.random() * testimonials.length);
	return testimonials[index];
}

app.get('/', function(req, res) {
    res.render('index', { 'testimonial': randomTestimonial() });
});

app.get('/about', function(req, res) {
    res.render('about', { 'testimonial': randomTestimonial() });
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});