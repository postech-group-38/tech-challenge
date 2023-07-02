# Tech-challenge fase 1 (Food Order API)
> Note: under construction


## Recomendations
* Node v18
* Editor VScode
* VScode Extensions:
  * ESLint, prettier
  * MongoDb for VS code
  * Docker
  * VScode nvm switcher > This project use .nvmrc file to automaticaly use correct node version


## Installation

```bash
$ npm install
```

## Running the app

```bash
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
  or
$ make test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Running the application and database with docker-compose

1. To run the application with a database, please use the following command:

    ```
    $ make up
    ```
    or
   
    ```
    $ cd ./deployments && docker-compose up
    ```

> Note: By default the port number it runs on is **8080**.

3. To stop the application, please use the following command:

    ```
    $ make stop
    ```

## API Documentation
To see the API use documentation. Run the app with some above commands and go to [Swagger](http://localhost:8080/api) endpoint.


## Stay in touch

- Authors - [Wallace Benevides](https://github.com/wbenevides) and [Cassio Caue](https://github.com/CaueCassio)
- Documentantion - [buinding]()
