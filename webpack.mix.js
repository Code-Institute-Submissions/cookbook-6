let mix = require('laravel-mix');


mix.js('assets/js/app.js', 'public/js')
  .sass('assets/scss/app.scss', 'public/css/app.css')
  .copy('assets/images', 'public/images');
