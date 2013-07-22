/*
 * grunt-lingua
 * https://github.com/ErikAndreas/grunt-lingua
 *
 * Copyright (c) 2013 Andreas Nyhren
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('lingua', 'Your task description goes here.', function() {
    var po2json = require('po2json');
    var path = require('path');
    if ('extract' === this.target) {
      var args = 'extract -F babel.cfg -k _n:1,2 -k _ -o'.split(' ');
      args.push(this.data.potDest);
      args = args.concat(this.data.scanDirs);
      var child = grunt.util.spawn({
        cmd: 'pybabel',
        args: args,
        opts: { stdio: 'inherit', stderr: 'inherit' }
      },this.async());
    } else if ('po2json' === this.target) { // https://github.com/rkitamura/grunt-po2json
      var prefix = this.data.outPrefix;
      this.files.forEach(function(line) {
        line.src.forEach(function(file) {
          var data = po2json.parseSync(file);
          var filename = path.basename(file, (path.extname(file)));
          if (prefix) {
            filename = prefix + filename;
          }
          var dest = path.join(line.dest, filename + '.json');
          //grunt.file.write(dest, JSON.stringify(data));
          grunt.log.writeln('File "' + dest + '" created.');
        });
      });
    } else {
      grunt.log.writeln('No such target');
    }
  });
};
