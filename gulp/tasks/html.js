var gulp = require( 'gulp' );
var include = require('gulp-include')
var juice = require( '@akzhan/gulp-juice' );
var htmlmin = require( 'gulp-htmlmin' );
var connect = require( 'gulp-connect' );

// Require main configuration file
var config = require( '../config.js' );

// Export functions
exports.build = build;
exports.inline = inline;
exports.clean = clean;

// Build HTML includes
function build() {
	return gulp.src( config.paths.html.build.src )
		.pipe(include())
     	 .on('error', console.log)
    	.pipe( gulp.dest( config.paths.html.build.dest ) )
}

// Inline CSS
function inline() {
	return gulp.src( config.paths.html.inline.src )
		.pipe( juice( {
			applyHeightAttributes: false,
			applyWidthAttributes: false,
			xmlMode: true,
			webResources: {
				relativeTo: './dist',
				images: false,
				svgs: false,
				scripts: false,
				links: false,
			},
		} ) )
		.pipe( gulp.dest( config.paths.html.inline.dest ) );
}

// Clean HTML
function clean() {
	return gulp.src( config.paths.html.clean.src )
		.pipe( htmlmin( config.paths.html.clean.options ) )
		.pipe( gulp.dest( config.paths.html.clean.dest ) )
		.pipe( connect.reload() );
}
