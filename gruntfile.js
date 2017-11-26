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
    grunt.loadNpmTasks('grunt-stylelint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylelint', 'eslint', 'clean', 'less', 'uglify', 'copy']);
};
