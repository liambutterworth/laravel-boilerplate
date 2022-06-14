const mix = require('laravel-mix');
const path = require('path');

const aliases = {
    '@css': path.join(__dirname, 'resources/css'),
    '@js': path.join(__dirname, 'resources/js'),
    '@components': path.join(__dirname, 'resources/js/components'),
    '@concerns': path.join(__dirname, 'resources/js/concerns'),
    '@views': path.join(__dirname, 'resources/js/views'),
};

mix
    .alias(aliases)
    .js('resources/js/main.js', 'public/js')
    .sass('resources/css/main.scss', 'public/css')
    .vue()
    .sourceMaps()
    .version();
