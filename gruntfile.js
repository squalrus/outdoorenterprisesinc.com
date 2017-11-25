module.exports = function (grunt) {

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
                        dest: 'public/img/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        less: {
            options:{
                compress: true
            },
            files: {
                src: [
                    'less/font.less',
                    'less/lib/normalize.css',
                    'less/lib/lightbox.min.css',
                    'less/style.less'
                ],
                dest: 'public/css/site.min.css',
            }
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

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean', 'less', 'uglify', 'copy']);
};
