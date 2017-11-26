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
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

function randomTestimonial() {
    var index = Math.floor(Math.random() * testimonials.length);
    return testimonials[index];
}

app.get('/', function getIndex(req, res) {
    res.render('index', { testimonial: randomTestimonial() });
});

app.get('/about/', function getAbout(req, res) {
    res.render('about', { testimonial: randomTestimonial() });
});

app.get('/testimonials/', function getTestimonials(req, res) {
    res.render('testimonials', { testimonials: testimonials });
});

app.get('/plantings/', function getPlantings(req, res) {
    res.render('plantings', {
        plantings: plantings,
        testimonial: randomTestimonial()
    });
});

app.get('/patios-and-decks/', function getPatiosAndDecks(req, res) {
    res.render('patios-and-decks', {
        patios: patios,
        testimonial: randomTestimonial()
    });
});

app.get('/retaining-walls/', function getRetainingWalls(req, res) {
    res.render('retaining-walls', {
        walls: walls,
        testimonial: randomTestimonial()
    });
});

app.get('/community-projects/', function getCommunityProjects(req, res) {
    res.render('community-projects', {
        community: community,
        testimonial: randomTestimonial()
    });
});

app.get('/special-projects/', function getSpecialProjects(req, res) {
    res.render('special-projects', {
        projects: projects,
        testimonial: randomTestimonial()
    });
});

app.get('/contact/', function getContact(req, res) {
    res.render('contact', {
        testimonial: randomTestimonial()
    });
});

app.listen(app.get('port'), function getPort() {
    console.log('Server listening on port ' + app.get('port')); // eslint-disable-line no-console
});
