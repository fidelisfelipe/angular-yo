#Baby Steps
mkdir angular-yo
cd angular-yo
npm install bower
npm install -g generator-angular
yo angular
grunt test
grunt server

# add new controller
yo angular:controller contact

# angular-yo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
