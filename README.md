# Banxe NestJS boilerplate application

**Branches**:
- **dev: Only NestJS**
- typeorm+postgres: NestJS + PostgreSQL + TypeORM
- mongoose+mongo: NestJS + MongoDB + Mongoose
---
* Node v12.17.0
* [Auto semantic versioning](https://semver.org/)
* [Changelog generation](https://github.com/conventional-changelog/standard-version)
* [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
* [Graphql-js fork](https://gitlab.i-link.pro/i-link-public/graphql-js) for schema-print
* Precommit prettier
* VSCode debug launcher

## Code-conventions

Please read about [conventions](https://gitlab.i-link.pro/banxe/banxe-boilerplate/-/wikis/Conventions) that should be followed during development

Other rules already configured in eslint and prettier

If you want to propose some change - you can make an [issue](https://gitlab.i-link.pro/banxe/banxe-boilerplate/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# if your default nodeJS version is not v12.17.0
$ nvm use 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Release

```bash
# for first release. Create tag and changelog, but skip version bumping
$ npm run first-release

# tag, changelog and version bump
$ npm run release
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
