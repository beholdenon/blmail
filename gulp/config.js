module.exports = {
	paths: {
		html: {
			build: {
				src: [ 'src/templates/**/*.html', 'src/campaigns/**/*.html' ],
				dest: [ 'dist' ],
			},
			inline: {
				src: [ 'dist/*.html' ],
				dest: [ 'dist' ],
			},
			clean: {
				src: [ 'dist/**/*.html' ],
				dest: [ 'dist' ],
				options: {
					collapseWhitespace: false,
					keepClosingSlash: true,
					minifyCSS: false,
					removeComments: true,
					processConditionalComments: true,
				},
			},
		},
		sass: {
			lint: {
				src: [ 'src/sass/**/*.scss' ],
				configFile: '.stylelintrc',
			},
			build: {
				src: [ 'src/sass/**/*.scss' ],
				dest: [ 'dist/css' ],
			},
			clean: {
				src: [ 'dist/css' ],
			},
		},
		watch: {
			src: [
				'src/sass/**/*.scss',
				'src/templates/**/*.html',
				'src/campaigns/**/*.html',
			],
		},
		assets: {
			clean: {
				src: [ 'dist/assets/**/*' ],
			},
			copy: {
				src: [ 'src/assets/**/*' ],
				dest: [ 'dist/assets' ],
			},
		},
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
