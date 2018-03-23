# Node + react full stack

<p align="left" style="background:white;">
<img style="margin-left: 20px; background:white" height="100" src = "https://tr4.cbsistatic.com/hub/i/r/2016/10/18/831f017c-ee68-4bd6-8a5c-ab31b4d35d6d/resize/770x/1cedcf2f03388a9720835a628a8a9765/dockerhero.jpg" />
<img height="100" src = "https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default" />
<img height="100" src = "https://cdn-images-1.medium.com/max/661/1*XcE0wR1ZmWLFbdF2dE5WuA.png" />
<img  height="100"src="https://pbs.twimg.com/media/Cs4VTpdVIAAU_t3.jpg"/>

</p>

This is a full stack Nodejs + React starter pack which tries to make as few decisions as possible.

It includes:

* Docker
  * nginx
  * mysql / mssql (default is mysql)
  * node
  * sphinx
* ExpressJS
* Swagger
* React + Redux
* Babel
* Material design
* Sequelize (ORM)
* Sphinx-doc

## First start

Starting this app is easy, simply run `yarn docker-dev` (or `npm run docker-dev`) and wait for all services to come online.

The following urls will become available:

| Url                        | Service                                   |
| -------------------------- | ----------------------------------------- |
| http://localhost:3000      | The frontend React application            |
| http://localhost:8888      | The read-the-docs (/Sphinx) documentation |
| http://localhost:4000      | The ExpressJS backend                     |
| http://localhost:4000/docs | Swagger documentation for the backend     |

See the [Available commands](#available-commands) chapter for more info.

## Table of contents

<!-- toc -->

* [Available commands](#available-commands)
  * [useful commands](#useful-commands)
  * [Commands used by useful command](#commands-used-by-useful-command)
* [Changing the starter](#changing-the-starter)
  * [Change to mssql](#change-to-mssql)
    * [Create a database (error: login failed for user sa)](#create-a-database-error-login-failed-for-user-sa)
  * [Change database host](#change-database-host)
  * [Changing database docker](#changing-database-docker)
  * [Remove material design](#remove-material-design)
  * [Remove sequelize](#remove-sequelize)
* [Folder structures](#folder-structures)
  * [documentation](#documentation)
  * [backend](#backend)
  * [docker](#docker)
  * [frontend](#frontend)

<!-- tocstop -->

## Available commands

The commands found below can be executed either with `yarn command` or with `npm run command`.

### useful commands

| Command        | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| start          | runs the services without docker                                                                                |
| docker-dev     | runs the services with docker (recommended)                                                                     |
| docker-prod    | runs buildservices for the frontend and documentation and after that spins up the production environment.       |
| docker-rebuild | rebuilds docker containers (f.e after changing the dockerfile)                                                  |
| docker-fix     | takes the containers down (impatient people use ctrl + c and have to take them down before starting them again) |

### Commands used by useful command

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| start-frontend    | runs the frontend without docker      |
| start-backend     | runs the backend without docker       |
| start-docs        | runs the documentation without docker |
| dev               | runs all of the above                 |
| docker-build-prod | runs the build services in docker     |

## Changing the starter

The chapters below will guide you through changing the starter to fit your own style.

### Change to mssql

In order to change to mssql follow the following steps:

1.  run `npm uninstall --save mysql2` in the backend folder
2.  delete `config.json` in the backend/config folder
3.  rename `config.sqlserver.json` in the backend/config folder to `config.json`
4.  uncomment the mssql block and comment in (or remove) the mysql block.
    * docker/dev/docker-compose.yml
    * docker/prod/docker-compose.yml

#### Create a database (error: login failed for user sa)

You'll most likely get a database error if you launch the starter as is, to resolve this use the following command while running the containers:

```
docker exec -ti dev_backend_1 /app/node_modules/.bin/sequelize db:create
```

Then either restart your containers or trigger nodemon in the backend folder

### Change database host

Open up [backend/config/config.json](backend/config/config.json) and edit the database connection info.

**Note** If your database lives in the same dockernetwork use the docker's name (sql-server in the example) and it's _internal_ port.

### Changing database docker

This starter comes with 2 sql-server dockers.
By default the mysql server will be used but all docker-compose files have an entry for mssql. Simply change out the mysql block for the mssql block and rebuild your containers with: `yarn docker-rebuild`

### Remove material design

You can basically put any React project in the frontend folder as long as it includes an npm start script.  
The current react project that is in the frontend folder is the [react-sane-starter's material branch](https://github.com/Mastermindzh/react-sane-starter/tree/material-design).
Follow the instructions below to include the non-material branch.

1.  `rm -rf frontend`
2.  `git clone https://github.com/Mastermindzh/react-sane-starter.git frontend`
3.  `rm -rf frontend/.git`

### Remove sequelize

To fully remove sequelize execute the following steps in the backend folder:

1.  `rm -rf migrations models seeders`
2.  `rm config/config.json`
3.  `npm unsinstall --save sequelize`
4.  Remove the following code from server.js

    ```js
    // sequelize
    import models from "./models";

    models.sequelize
      .sync()
      .then(function() {
        /* eslint-disable no-console */
        console.log("database tables synced");
      })
      .catch(err => {
        /* eslint-disable no-console */
        console.log(err);
      });
    ```

## Folder structures

The chapters below list important files / folders in the subfolders

### Documentation

```js
documentation/
├── make.bat // Windows makefile
├── Makefile // Linux / OS X makefile
├── package.json // runner
├── package-lock.json
├── requirements.txt // required packages for sphinx
└── source // actual documentation
    ├── conf.py //sphinx settings
    ├── content // text directory
    │   ├── 10-playground
    │   │   ├── banners.rst
    │   │   └── index.rst
    │   └── 20-playground-md
    │       └── index.md
    ├── index.rst // main page
    └── _static // static files (images, pdfs, etc) directory
        └── logo.png
```

### Backend

```js
backend/
├── config // configuration files
│   ├── config.json
│   └── swagger.json
├── data // swaggerize-express data (add your code here)
│   ├── dashboards
│   │   └── {id}.js
│   ├── dashboards.js
│   └── mockgen.js
├── handlers // swaggerize-express handlers
│   ├── dashboards
│   │   └── {id}.js
│   └── dashboards.js
├── migrations // sequelize migrations
├── models // sequelize models
│   ├── dashboard.js
│   └── index.js
├── package.json
├── package-lock.json
├── routes // custom express routes
├── seeders // seed scripts for sequelize
├── server.js // main starting point
├── services // services directory (database services etc.)
│   └── errorService.js // service to handle errors
└── tests // tests directory
    ├── dashboards
    │   └── {id}.js
    └── dashboards.js
```

### Docker

```js
docker/
├── dev // contains the dev docker-compose file(s)
│   └── docker-compose.yml
├── images // contains Dockerfiles for images
│   ├── nginx
│   │   ├── default.conf
│   │   └── Dockerfile
│   ├── node
│   │   └── Dockerfile
│   └── node-sphinx
│       └── Dockerfile
└── prod // contains the production docker-compose file(s)
    ├── build // contains the build services
    │   ├── docker-compose.yml
    │   └── Dockerfile
    └── docker-compose.yml
```

### Frontend

```js
frontend/
├── docker
│   ├── dev  // Development docker-compose and dockerfile
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   └── prod // Production docker files
│       ├── docker-compose.yml
│       ├── Dockerfile
│       └── default.conf // nginx conf for javascript SPA's
│
├── docs // directory for your documentation
│
├── src
│   ├── actions // actions go here
│   ├── assets // directory for statis assets
│   ├── components // dumb components go here
│   ├── constants // constants can be declared here
│   ├── containers // smart components go here
│   ├── reducers // reducers go here
│   ├── store
│   ├── styles // scss + css
│   ├── tests // global test files
│   ├── utils // utility classes / objects
│   ├── favicon.ico
│   ├── index.js
│   ├── index.ejs
│   └── webpack-public-path.js
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
