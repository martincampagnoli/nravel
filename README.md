# Whip project

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

Whip allows to fast prototype a new project from scratch giving a lot of nice features out of the box and more that will be added in the future.

## Instructions

Just clone this repo, run `npm install` and `bower install` to get all the dependencies. And you are ready to go!

*If some error is thrown regarding msbuild or vcbuild tools, try running this:
`npm install --global --production windows-build-tools`

## Build & development

Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the unit tests with karma.

## Why this toolset?
* [AngularJS](https://angularjs.org/) - It's a powerful and reliable JavaScript framework, specially for CRUD applications.
* [Jasmine](https://jasmine.github.io/) - BDD Testing framework with everything out of the box to start testing.
* [Karma](https://karma-runner.github.io) - A simple test runner that is stable and fast.
* [SASS](http://sass-lang.com/) - It's the most mature, stable, and powerful professional grade CSS extension language.
* [Bootstrap](http://getbootstrap.com/) - The most popular UI framework for developing responsive, mobile first projects on the web.
* [Gulp](http://gulpjs.com/) - A toolkit to automate and enhance the development workflow.
* [Bower](https://bower.io/) - For the component management.
* [JSHint](http://jshint.com/) - To detect errors and potential problems in the JavaScript code.
* [Yeoman](http://yeoman.io/) - As an scaffolding tool puts all together prescribing best practices and tools to help stay productive.

And more features are included like:
* LiveReload.
* Building for production in dist folder and assets supporting (Run `gulp build`).
* CSS and JS minification.

## Why should I use Whip instead of Yeoman directly?

Whip comes with a handful of improvements and bug fixing that will do the whole process of scaffolding an app as simple as possible.<br />Of course if you are looking for something more customizable then you should try the Yeoman generators instead.
