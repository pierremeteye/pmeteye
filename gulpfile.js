/* Instanciation de toutes les dépendances utilisés */
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename');


var cssDir      = './src/',
    sassDir     = cssDir + 'sass/';

// ----------------------------------------------------------------------------------------------------- //
// ------------------------------------- CREATION DES TACHES ------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //

/**
*
*   CSS
*
*/

// --------- CSS---------
// desc : minimise au format CSS les fichiers SASS
gulp.task('css', function(){
    gulp.src(sassDir + 'app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(rename({
            basename: 'app',
            extname: '.css'
        }))
        .pipe(gulp.dest(cssDir))
});




// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------- LANCEMENT DES TACHES ------------------------------------------- //
// ------------------------------------------------------------------------------------------------------ //


gulp.task('default', ['css'], function(){
    gulp.watch(sassDir + '*/*.scss', ['css']);
});
