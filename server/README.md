# Getting Started with GraphQL server

## Steps to start the project

### `npm install`

Install the node modules for the project

### `Create and set .env file`

Create .env file at server folder and set the .env variables. Please check the .env.example file for data

You have to add the value for APP_MONGO_DB_URL and GRAPHQL_SERVER_PORT

In this case the value for APP_MONGO_DB_URL is the DB link you provided and the value for GRAPHQL_SERVER_PORT will be the port on which you want to run the server you can run server on 4000 port and if you want to change that then you also have to change the port in the url present in client .env file, Dockerfile and Docker Compose file

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.

## Steps to start through Docker

### `Create and set .env file`

Create .env file at server folder and set the .env variables. Please check the .env.example file for data

You have to add the value for APP_MONGO_DB_URL and GRAPHQL_SERVER_PORT

In this case the value for APP_MONGO_DB_URL is the DB link you provided and the value for GRAPHQL_SERVER_PORT will be the port on which you want to run the server you can run server on 4000 port and if you want to change that then you also have to change the port in the url present in client .env file, Dockerfile and Docker Compose file

### `docker-compose up`

Runs the app in the development mode.\
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.