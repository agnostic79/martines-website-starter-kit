<h1><strong>Martines Starter Kit</strong> <br>Startup HTML template based on Gulp, Webpack & Bootstrap 4</h1>

<p>Author: Martines</p>

<p>OptimizedHTML is all-inclusive start HTML5 template with Bootstrap 4 (grid & reboot), Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Webpack and Babel support. The template contains a <strong>.htaccess</strong> file with caching rules for web server.</p>


<p>The template uses a Sass with <strong>Scss</strong> syntax.</p>

<h2>How to use Martines Starter Kit</h2>

<ol>
	<li>Download Martines Starter Kit from GitHub;</li>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Rules for working with Martines Starter Kit</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>All vendors scripts located in <strong>app/libs</strong>.Then place all JS libraries paths in the <strong>'scripts'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js-dev/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/scss/_vars.scss</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/scss/_media.scss</strong>;</li>
	<li>All libraries CSS styles placed in <strong>app/scss/_libs.scss</strong>;</li>
	<li>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for files caching on web server.</li>
</ol>
