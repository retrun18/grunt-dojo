/*
 * grunt-dojo
 * https://github.com/phated/grunt-dojo
 *
 * Copyright (c) 2012 Blaine Bublitz
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

    grunt.registerMultiTask('dojo', 'build dojo by spawning a child process', function(){

    var utils = grunt.utils;
    var done = this.async();

    grunt.log.subhead('Building Dojo...');

    var args = [];
    if(this.data.dojo){
      args.push(this.data.dojo);
      args.push('load=build');

      if(this.data.profile){
        args.push('--profile', this.data.profile);
      }
    }

    var opts = {};
    if(this.data.cwd){
      opts.cwd = this.data.cwd;
    }

    utils.spawn({
      cmd: 'node',
      args: args,
      opts: opts
    }, function(err, result){
      if(err){
        grunt.log.error(err);
        return done(false);
      }

      grunt.log.success('Dojo Successfully Built...');

      done();
    });

  });

};
