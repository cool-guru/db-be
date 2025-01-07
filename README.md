<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  
## Description

### Backend Challenge
Tech Stacks:
* Nest.js
* Express.js
* TypeORM
* PostgreSQL

I used PostgreSQL for database. So make sure that you installed PostgreSQL on your local machine for testing.

Here is the <a href="https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart" target="_blank">link</a> how to install PostgreSQL on Ubuntu,
## Clone the repository

```bash
$ git clone https://github.com/cool-guru/db-be.git
```

## Create .env file in the project folder

The .env file should be following format:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=db_username
DB_PASSWORD=db_password
DB_NAME=db_name
DB_SYNCHRONIZE=false
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

If you run `npm run start` command then the server will be run on `http://localhost:3000`. Now you can test the API endpoint.
## Test the project using Postman or other

#### Get picking slips by created_at (newest to oldest)
```
GET http://localhost:3000/picking-slips
```

#### Get picking slips with Pagination feature
```
GET http://localhost:3000/picking-slips?page={pageNumber}&pageSize={pageSize}
```
Example: 
```
GET http://localhost:3000/picking-slips?page=2&pageSize=20
```
#### Get picking slips with Status filter feature
```
GET http://localhost:3000/picking-slips?status={status}
```
Example: 
```
GET http://localhost:3000/picking-slips?status=printed
```


Thanks!

