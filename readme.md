# ITD-elicensing
This is the repository for the future front page of the Commonwealth elicensing portal.

This project is scaffolded with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

Build with HTML, CSS and Javascript.  

Frameworks used: [Bootstrap](http://getbootstrap.com/) and [AngularJS](https://angularjs.org/)

##Setup
Clone repository to local, cd into the root directory and run the following commands at the command prompt:

`npm install`  &  `bower install`

This will import all build dependencies.

## Build & development

Run `grunt serve` to server the project in the browser.  it will be available at `localhost:9000`. 

For the build step run`grunt build`. It will minimize/uglify the code and import all dependencies into one package to the `dist` folder.  That package can then be deployed to the server.

## Testing

Running `grunt test` will run the unit tests with karma.


