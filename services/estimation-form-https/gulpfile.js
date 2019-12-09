process.env.DISABLE_NOTIFIER = true;

// Elixir is a wrapper over Gulp for much faster building
var elixir = require('laravel-elixir');

// Config for base url WS
var config = require( './config' );

// Used to get mode for estimation form (id3x or iframe)
const argv = require('yargs').argv;

var isId3x = !!argv.id3x,
	appName = isId3x ? 'id3x' : 'iframe',
	appEnvironment = argv.production ? 'prod' : 'dev',
	moduleName = 'module_v3',
	distPath = 'dist/' + appName + '/' + moduleName + '/';

// Elixir extension for replacing strings in files
require('laravel-elixir-replace');

elixir(function (mix) {
	
    // Copying NPM components
    // ===================================

    // Flexibility.js
    mix.copy('node_modules/flexibility/flexibility.js', distPath + 'resources/assets/js/third-party');

    // Compile SCSS stylesheets
    // ===================================
    mix.sass('app.scss', distPath + 'resources/assets/css/app.css');
	
	// Copy js files
	// ===================================
	mix.copy('assets/js/*.*', distPath + 'assets/js');

	// We define the url for agency WS and evaluation WS giving the environment
	// Get appName (id3x or iframe) and environment (prod or dev)
	// ===================================
	var replacements = [
		['<%= appName %>', appName],
		['<%= appEnvironment %>', appEnvironment],
		['<%= evaluationWSUrlBase %>', config[appEnvironment].EVALUATION_WS_URL_BASE],
		['<%= agencyWSUrlBase %>', isId3x ? '' : config[appEnvironment].AGENCY_WS_URL_BASE]
	];
	
	mix.replace('resources/assets/js/estimationFormPoliris.js', replacements, 'resources/config');
	mix.replace('resources/assets/js/estimationFormPoliris.js', replacements, distPath + 'assets/js');

    // Compile ES6
    // ===================================
    mix.browserify('estimation-app.js', distPath + 'assets/js/estimationForm.js');

    //Config des BU
    mix.copy('resources/config/*.js', distPath + 'assets/js');
    mix.copy('resources/assets/css/estimationFormSL.css', distPath + 'assets/css');

    // Concatenate all CSS files
    // ===================================
    mix.styles([
        // 'bootstrap.min.css',
        'bootstrap-select.min.css',
        'font-awesome.min.css',
        'app.css'
    ], distPath + 'assets/css/estimationForm.css');

    // Concatenate all JS files
    // ===================================
    mix.scripts([
        'third-party/bootstrap.min.js',
        'third-party/bootstrap-select.min.js',
        'third-party/placeholders.min.js',
        'third-party/flexibility.js',
        'third-party/jquery.countdown.min.js'
    ], distPath + 'assets/js/estimationFormVendor.js');
	
	// Handle specific css for agency (estimationFormPoliris will be used for id3x and estimationFormVariable will be used for iframe but must be in slagence_x_v5)
	// ===================================
	mix.styles(['resources/assets/css/estimationFormPoliris.htm', 'resources/assets/css/estimationFormVariable.htm'], distPath + 'assets/css/estimationFormPoliris.htm');
	mix.copy('resources/assets/css/estimationFormVariable.htm', distPath + 'assets/css');
	
	// For iframe version, we need the index.html file and some js files
    // ===================================
	if(appName === 'iframe') {
		mix.copy('index.html', distPath);
	}
	
	mix.copy('assets/json/*.json', distPath + 'assets/json');
	mix.copy('assets/fonts', distPath + 'assets/fonts');
	mix.copy('assets/img', distPath + 'assets/img', false);
	mix.copy('resources/views', distPath + 'resources/views');
});
