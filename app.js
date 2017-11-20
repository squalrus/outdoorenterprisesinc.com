var express = require('express'),
    path = require('path'),
    app = express(),

    community = require('./data/community-projects'),
    patios = require('./data/patios-and-decks'),
    plantings = require('./data/plantings'),
    projects = require('./data/special-projects'),
    testimonials = require('./data/testimonials'),
    walls = require('./data/retaining-walls');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

function randomTestimonial() {
    var index = Math.floor(Math.random() * testimonials.length);
    return testimonials[index];
}

app.get('/', function(req, res) {
    res.render('index', { 'testimonial': randomTestimonial() });
});

app.get('/about/', function(req, res) {
    res.render('about', { 'testimonial': randomTestimonial() });
});

app.get('/testimonials/', function(req, res) {
    res.render('testimonials', { 'testimonials': testimonials });
});

app.get('/plantings/', function(req, res) {
    res.render('plantings', {
        'plantings': plantings,
        'testimonial': randomTestimonial()
    });
});

app.get('/patios-and-decks/', function(req, res) {
    res.render('patios-and-decks', {
        'patios': patios,
        'testimonial': randomTestimonial()
    });
});

app.get('/retaining-walls/', function(req, res) {
    res.render('retaining-walls', {
        'walls': walls,
        'testimonial': randomTestimonial()
    });
});

app.get('/community-projects/', function(req, res) {
    res.render('community-projects', {
        'community': community,
        'testimonial': randomTestimonial()
    });
});

app.get('/special-projects/', function(req, res) {
    res.render('special-projects', {
        'projects': projects,
        'testimonial': randomTestimonial()
    });
});

app.get('/contact/', function(req, res) {
    res.render('contact', {
        'testimonial': randomTestimonial()
    });
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
