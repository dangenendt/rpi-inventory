const { mix } = require('laravel-mix');

var path = require('path')
var webpack = require('webpack')
var fs = require('fs')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

 mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .version()

    .webpackConfig({

        resolve: {
            extensions: ['.js'],
        },

        entry: [
            'vue',
            'vue-router',
            'request-promise',
            'querystring',
            'sweetalert',
            'select2',
            './resources/assets/js/plugins/light-bootstrap-dashboard.js',
            './resources/assets/js/init/vue-components.js',
            './resources/assets/js/init/vue-router.js',
            './resources/assets/js/init/vue-filters.js',
            // 'scripts/init/vue-directives.js',
            // './resources/assets/js/rest/core.js',
            // './resources/assets/js/rest/list.js',
            './resources/assets/sass/app.scss',
            'font-awesome/scss/font-awesome.scss',
        ],

        module: {
            rules: [
                {
                    test: /\.js?$/,
                    include: [
                        path.resolve(__dirname, 'resources/assets/js'),
                        'node_modules'
                    ],
                }
            ],
        },

        externals: nodeModules,

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
                fs: 'fs',
                rp: 'request-promise',
                querystring: 'querystring',
                moment: 'moment',
                Vue: 'vue',
                VueRouter: 'vue-router',
                swal: 'sweetalert'
            }),
        ],

    });
