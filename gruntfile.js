module.exports = function (grunt) { // eslint-disable-line func-names
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['public'],

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: 'images/*',
                        dest: 'public',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'img',
                        src: '**/*',
                        dest: 'public/images/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        ejs: {
            compile: {
                files: {
                    'public/index.html': ['views/index.ejs'],
                    'public/about/index.html': ['views/about.ejs'],
                    'public/community-projects/index.html': ['views/community-projects.ejs'],
                    'public/contact/index.html': ['views/contact.ejs'],
                    'public/patios-and-decks/index.html': ['views/patios-and-decks.ejs'],
                    'public/plantings/index.html': ['views/plantings.ejs'],
                    'public/retaining-walls/index.html': ['views/retaining-walls.ejs'],
                    'public/special-projects/index.html': ['views/special-projects.ejs'],
                    'public/testimonials/index.html': ['views/testimonials.ejs'],
                    'public/404.html': ['views/404.ejs']
                },
                options: {
                    data: {
                        test: true,
                        community: grunt.file.readJSON('data/community.json'),
                        patios: grunt.file.readJSON('data/patios.json'),
                        plantings: grunt.file.readJSON('data/plantings.json'),
                        projects: grunt.file.readJSON('data/projects.json'),
                        testimonial: grunt.file.readJSON('data/testimonials.json')[0],
                        testimonials: grunt.file.readJSON('data/testimonials.json'),
                        walls: grunt.file.readJSON('data/retaining-walls.json')
                    }
                }
            }
        },

        eslint: {
            target: [
                'app.js',
                'gruntfile.js',
                'js/script.js'
            ]
        },

        less: {
            options: {
                compress: true
            },
            files: {
                src: [
                    'less/font.less',
                    'less/lib/normalize.css',
                    'less/lib/lightbox.min.css',
                    'less/base.less',
                    'less/header.less',
                    'less/slideshow.less',
                    'less/gallery.less',
                    'less/testimonial.less',
                    'less/style.less',
                    'less/footer.less'
                ],
                dest: 'public/css/site.min.css'
            }
        },

        stylelint: {
            options: {
                configFile: '.stylelintrc',
                failOnError: true,
                syntax: 'less'
            },
            src: [
                'less/*.less'
            ]
        },

        uglify: {
            my_target: {
                files: {
                    'public/js/site.min.js': [
                        'js/lib/jquery-3.2.1.min.js',
                        'js/lib/jquery.slides.min.js',
                        'js/lib/lightbox.min.js',
                        'js/script.js'
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: [
                    '*.js',
                    '*.eslintrc',
                    'gruntfile.js',
                    'data/*.js',
                    'js/**/*.js',
                    'less/**/*.less',
                    'views/*.ejs'
                ],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-fep-ejs');
    grunt.loadNpmTasks('grunt-stylelint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylelint', 'eslint', 'clean', 'less', 'uglify', 'copy', 'ejs']);
};
