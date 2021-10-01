# NestJS boilerplate application

## Branches
- master: Only NestJS
- **typeorm+postgres: NestJS + PostgreSQL + TypeORM**
- mongoose+mongo: NestJS + MongoDB + Mongoose

## Features
* Node v14.17.1
* [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
* ESLint
* Launch scripts (prebuild, build, start, test, etc.)
* Precommit prettier
* VSCode debug launcher
* Strict ruled tsconfig.json
* Migrations
* Docker compose with postgres

## Installation

```bash
$ npm install
```

## Running the app

```bash
# if your default nodeJS version is not v14.17.1
$ nvm use 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
