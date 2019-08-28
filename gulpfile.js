//Pre-requisites
//1. install the gulp cli
//2. install package.json
//3. install the commands
// npm install --save-dev gulp gulp-sass gulp-sourcemaps gulp-postcss autoprefixer cssnano gulp-concat gulp-uglify gulp-replace
//4. (to run application) gulp
//Initialize modules - import npm packages as a variable
const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();



//Files path variables
const files = {
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js',
    // imgPath: 'app/images/**/*.{jpg,png,gif,pdf}',
    htmlPath: '*.html'
}


//Sass task
function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(
            [autoprefixer(), cssnano()]
        ))
        .pipe(sourcemaps.write('.'))

        .pipe(dest('dist'))
        .pipe(browserSync.stream()); //adding in browsersync to the pipe, must be added after compilation

};

//HTML task
function htmlTask() {
    return src(files.htmlPath)
        .pipe(browserSync.stream());

}

//JS task
function jsTask() {
    return src(files.jsPath) //get js files
        .pipe(concat('main.min.js')) //add all the js files into one
        .pipe(uglify()) //minify the js files
        .pipe(dest('dist')) //move js files to the dist folder
        .pipe(browserSync.stream());

}




// //Image minification
// function imgTask() {
//     return src(files.imgPath)
//         .pipe(imagemin())
//         .pipe(dest('dist/images'))
// }


//Cachebusting task - this will clear out the cache each time running css
//adding a query to the end of the css file . if the query changes the it will load a new file.
const cbString = new Date().getTime();

function cacheBustTask() {
    return src(['index.html']) //locate the html file
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString)) //within that file find our query string tat is responsible for version shanging
        .pipe(dest('.'))
}

function reload() {
    browserSync.reload();
    done();
}
//Watch Task - this will watch for changes and rebuild
function watchTask() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"

    });
    watch(
        [files.scssPath, files.jsPath, files.htmlPath],//the paths to the files that we want to watch
        //any task you run must be either series or parallael (run simultaneiously)
        parallel(scssTask, jsTask, htmlTask, reload)
     );
    // watch(files.htmlPath, reload);//a seperate watch file along with reload seems to work the best
}



//Default task
exports.default = series( //this function will run all of these tasks one after the other
    parallel(scssTask, jsTask, htmlTask), //first the scssTask and the jsTask
    cacheBustTask, //this is next
    watchTask
);



//special note: gulp 4 now uses series and parallel Public tasks are exported from your gulpfile, which allows them to be run by the gulp command.
//Private tasks are made to be used internally, usually used as part of series() or parallel() composition.