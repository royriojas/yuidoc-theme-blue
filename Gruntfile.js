module.exports = function (grunt) {
  'use strict'
// Enable time-grunt for nice reporting of time spent on grunt tasks
  require('time-grunt')(grunt);

  var
    pkg = gruntFile.readJSON('package.json');

  var cfg = {
    pkg: pkg,
    bump: {
      release : {
        
      }
    }
  };

  // load all grunt tasks without specifying them by name
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig(cfg);

  grunt.registerTask('default', ['bump'])

};