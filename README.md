# grunt-compose

> Run docker-compose from Grunt

[![License][license-image]][license-url]
[![Version][version-image]][version-url]
[![Build Status][build-image]][build-url]

Integrate Docker Compose into your Grunt workflow. This plugin assumes that you
are already using Docker Compose and have your Compose file (`docker-compose.yml`
by default) ready. For more information about Docker Compose go [here](https://docs.docker.com/compose/).

What this task does:
 * passes environment variables to Compose file for Bash-like `$VARIABLE` usage
 * runs `docker-compose` commands inside a target directory

## Installation
```shell
npm install grunt-compose --save-dev
```

## Configuration

In your project's Gruntfile, add a section named `compose` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    compose: {
        options: {
            cmds: ['kill', 'up'],
            cwd: 'docker',
            env: {}
        }
     }
});
```

### Options

#### options.cmds
Type: `Array`
Default value: `[]`

Array of `docker-compose` commands to run sequentially.

#### options.cwd
Type: `String`
Default value: `'docker'`

A relative directory that contains Compose file `docker-compose.yml`.

#### options.env
Type: `Object`
Default value: `{}`

A set of environment variables that will be passed to yml file.

Example:

```js
grunt.initConfig({
    compose: {
        options: {
            cmds: ['up'],
            env: {
                FOO: 'bar'
            }
        }
     }
});
```

## Usage
```shell
grunt compose
```

[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]:            LICENSE-MIT

[version-image]:          http://img.shields.io/npm/v/grunt-compose.svg?style=flat
[version-url]:            https://npmjs.org/package/grunt-compose

[build-image]:            http://img.shields.io/travis/miloss/grunt-compose.svg?style=flat
[build-url]:              http://travis-ci.org/miloss/grunt-compose
