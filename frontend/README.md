# React-sane-starter

<p align="left" style="background:white;"><img  height="150"src="https://pbs.twimg.com/media/Cs4VTpdVIAAU_t3.jpg"/><img height="150" src = "https://ih0.redbubble.net/image.388514988.5586/flat,800x800,075,f.jpg" /> <img style="margin-left: 20px; background:white"height="150" src = "http://logo-logos.com/wp-content/uploads/2016/10/Docker_logo_logotype.png" /></p>

A sane starting point for react+redux development.

The starter app includes a working example app(+tests) which should help you get started fast.

## Branches
This starter has a few neat tricks up it's sleeve! Check out the other branches below for some extra cool stuff!

- [sphinx](https://github.com/Mastermindzh/react-sane-starter/tree/sphinx) - The sphinx branch includes sphinx documentation tools! Go check it out!


## Material design
This branch includes the [material components for the web](https://material.io/components/web/), specifically it uses the react wrapper known as [RMWC](https://github.com/jamesmfriedman/rmwc) written by James m Friedman.

## Getting started
This starter can be run either with [Docker](https://www.docker.com/) + [Docker-compose](https://docs.docker.com/compose/) or with [Node](https://nodejs.org/) + [NPM](https://www.npmjs.com/).
Take whichever route you like and follow the steps accordingly.

Whichever way you take, the development app will become available at `localhost:3000` and it will automatically reload changes and run linting + tests on the code.

<sub>Disclaimer: you might need node for some of the [commands](#available-commands)</sub>

### with docker
Simply run `npm run docker-run-dev` and wait for the magic to happen.

### without docker
If you want to run without Docker you'll need to have node (>= 4 ) and npm (>=) installed. If you've got those simply run the following commands in order:

1. `npm install`
2. `npm start`

### IMPORTANT FOR LINUX/MAC OS X USERS

Please run the following command before attempting to work with this starter ([here's why](https://stackoverflow.com/questions/22475849/node-js-error-enospc/32600959#32600959)):

``` cmd
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Table of contents

<!-- toc -->

- [Directory structure](#directory-structure)
- [Available commands](#available-commands)
- [Running the production server](#running-the-production-server)
- [Docker](#docker)
- [Testing](#testing)
  * [Global tests](#global-tests)
  * [Test app coverage](#test-app-coverage)
- [Sane production builds](#sane-production-builds)
- [Inspiration](#inspiration)
- [Questions?](#questions)

<!-- tocstop -->

## Directory structure
The code block below covers the relevant directory structure and explains what the folders do.

``` js
.
├── docker
│   ├── dev  // Development docker-compose and dockerfile
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   └── prod // Production docker files
│       ├── docker-compose.yml
│       ├── Dockerfile
│       └── default.conf // nginx conf for javascript SPA's
│
├── docs // directory for your documentation
│
├── src
│   ├── actions // actions go here
│   ├── assets // directory for statis assets
│   ├── components // dumb components go here
│   ├── constants // constants can be declared here
│   ├── containers // smart components go here
│   ├── reducers // reducers go here
│   ├── store
│   ├── styles // scss + css
│   ├── tests // global test files
│   ├── utils // utility classes / objects
│   ├── favicon.ico
│   ├── index.js
│   ├── index.ejs
│   └── webpack-public-path.js
│
├── tools // webpack tools, build tools, etc.
│
├── .babel.json
├── .editorconfig
├── .gitignore
├── .istanbul.yml // test coverage config
├── .jslintrc.json
├── LICENSE
├── package.json
├── README.md
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Available commands
This starter includes quite a few npm scripts to get you started, the commands you'll actually want to run yourself are:

| **Command**         | **Description**                                                                          |
|-----------------|----------------------------------------------------------------------------------------------|
| start           | Runs the application                                                                         |
| build           | Builds a production version of the application                                               |
| docker-run-dev  | Runs the app in a docker container                                                           |
| docker-run-prod | Runs the production version in a NGINX docker container                                      |
| lint            | Runs the linter                                                                              |
| test            | Runs the jest testing tool                                                                   |
| test-cover      | Runs the jest testing tool with coverage info.                                               |
| open-cover      | Runs the jest testing tool with coverage and opens the generated cover report in the browser |

And the commands which you don't want/have to run yourself are:

| **Command**       | **Description**                                                              |
|-------------------|------------------------------------------------------------------------------|
| preinstall        | Checks whether your installed node version is up to par                      |
| postinstall       | Runs `docker-build-dev`                                                      |
| prestart          | Executes the tools/startMessage.js script                                    |
| prebuild          | Runs `lint`, `test` and `clean-dist` tasks                                   |
| docker-build-dev  | Builds the development docker container                                      |
| docker-build-prod | Builds the production docker container                                       |
| open-src          | Little node script which runs the app + browsersync (also opens browser)     |
| lint-watch        | Watches code changes and reruns the linter automatically (included in start) |
| clean-dist        | Calls remove-dist and recreates an empty folder afterwards                   |
| remove-dist       | Simply rimraf's (rm -rf) the dist folder                                     |
| test-watch        | Watches code changes and reruns tests automatically (included in start)      |
| analyze-bundle    | Checks whether your bundle has any errors                                    |

## Running the production server
This starter includes a production docker which is built on top of the NGINX Docker.
The complete configuration for this container can be found under [docker/prod/default.conf](docker/prod/default.conf).

The configuration boils down to the following procedure:

1. Check whether a static file exists for the given url, if so serve it
2. If it doesn't exist -> redirect to index.html

It also ships with sane defaults for compressing assets and timeouts. IF you want to know the details, or change them, have a look at [docker/prod/default.conf](docker/prod/default.conf)

## Docker

The starter includes a docker container/file for both the development build and the production build.

The production build runs an NGINX server which checks for a static file first and if it doesn't find one it will redirect to your app. (where a route should catch it)

To run the development docker run: `npm run docker-run-dev` and to run the production build use: `npm run docker-run-prod`.

### fixes
If you're an impatiant man(or woman) like me you'll probably run into docker-compose problems...
If you do, try running `npm run docker-fix` to resolve the issues.

## Testing

I recommend to place tests next to your react files with the following naming convention:

`{react-file-name}.spec.js`

This would mean that the file `about-container.jsx` would have a test right next to it named `about-container.spec.js`


### Global tests
Tests that can be reused should go into the "tests/global" folder and exported in the index.js file in the "test" directory.

This allow you to import the test like so:

```js
import { testName } from './../../tests';
```

### Test app coverage
The test app includes tests for all major functions (reducers, actions, etc) and should help you get started quickly.

The test-coverage for the test app can be found in [docs/coverage.md](docs/coverage.md)

## Sane production builds
One of the things that really annoys me about pretty much every webpack product is the bundling of assets.
Now don't get me wrong, some stuff should be bundled (js/scss), but some stuff shouldn't (images/fonts).

Most webpack solutions choose to dump every asset into the root folder which , to me, becomes a mess.

This starter puts your assets in the assets folder and keeps whatever file structure you've made inside it.
The "src/assets" tree in your development environment looks like like this:

```
src/assets/
└── images
    └── image.ico
```

which means your production app will be structured like this:

```
dist
├── assets
│   └── images
│       └── image.ico
├── favicon.ico
├── index.html
├── main.d41d8cd98f00b204e9800998ecf8427e.css
├── main.d41d8cd98f00b204e9800998ecf8427e.css.map
├── main.ddc33abe456490476d44.js
└── main.ddc33abe456490476d44.js.map
```

Much neater if you ask me.

## Inspiration
The starting point for this starter was [react-slingshot by Corey House](https://github.com/coryhouse/react-slingshot).
I have worked with react-slingshot for a while and it works really well but it has some quirks I don't quite like.
This starter aims to resolve those quirks and provide a better starting point for new react apps.

## Questions?
Check out the [FAQ](/docs/FAQ.md)
