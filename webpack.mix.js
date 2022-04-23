const mix = require('laravel-mix');
const path = require('path');

const aliases = {
    '@css': path.join(__dirname, 'resources/css'),
    '@js': path.join(__dirname, 'resources/js'),
    '@components': path.join(__dirname, 'resources/js/components'),
    '@concerns': path.join(__dirname, 'resources/js/concerns'),
    '@modules': path.join(__dirname, 'resources/js/modules'),
};

mix
    .alias(aliases)
    .js('resources/js/app.js', 'public/js')
    .sass('resources/css/app.scss', 'public/css')
    .vue()
    .sourceMaps()
    .version();
