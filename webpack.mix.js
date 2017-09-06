const { mix } = require('laravel-mix');

var webpack = require('webpack')

 mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .version()

    // .options({
    //     processCssUrls: false,
    // })

    .webpackConfig({

        entry: [
            'vue',
            'vue-router',
            './resources/assets/js/plugins/light-bootstrap-dashboard.js',
            './resources/assets/js/init/vue-components.js',
            './resources/assets/js/init/vue-router.js',
            // 'scripts/init/vue-directives.js',
            // 'scripts/init/vue-filters.js',
            // 'scripts/init/vue-resources.js',
            './resources/assets/js/app.js',
            // './resources/assets/js/boostrap.js',
            './resources/assets/sass/app.scss',
        ],

        module: {
            rules: [
                // With the `import-glob-loader` we can use globs in our import
                // statements in css.
                // {
                //     test: /\.css/,
                //     loader: 'import-glob-loader',
                //     enforce: 'pre',
                // },
            ],
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
                // intl: 'intl',
                // moment: 'moment',
                Vue: 'vue',
                VueRouter: 'vue-router',
                // RestCore: 'scripts/rest/core.js',
                // RestList: 'scripts/rest/list.js',
                // RestShow: 'scripts/rest/show.js',
            }),
        ],

    });
