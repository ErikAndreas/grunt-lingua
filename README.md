# grunt-lingua

> Grunt plugin for lingua tooling

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lingua --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lingua');
```

## Dependencies
You need Python (only tested with 2.x) and the pybabel and jinja2 modules installed.

## The "lingua" task

### Overview
In your project's Gruntfile, add a section named `lingua` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lingua: {
    extract: {
      potDest: 'messages.pot', // dest path must exist
      scanDirs: ['.'] // array of directories to scan
    },
    po2json: {
      outPrefix: 'l_', // prefix on dest .json files (will be named from .po)
      src: ['*.po'],
      dest: ''
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
