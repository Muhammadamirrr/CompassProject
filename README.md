# Getting Started with Project

## Steps to start the project
There are 2 ways to run the project

1. Run the frontend and backend seperately without or with docker and for that I added README file in both client and server seperately.

2. Just start the project by running  docker-compose up. I maded the file that will run the both containers frontend and backend

## Steps for second way


### `Create and set .env file for client and server`

=>Create .env file at client folder and set the .env variables. Please check the .env.example file for data

You have to add the value for REACT_APP_GRAPHQL_SERVER_URL

In this case the value will be http://localhost:4000/graphql

=>Create .env file at server folder and set the .env variables. Please check the .env.example file for data

You have to add the value for APP_MONGO_DB_URL and GRAPHQL_SERVER_PORT

In this case the value for APP_MONGO_DB_URL is the DB link you provided and the value for GRAPHQL_SERVER_PORT will be the port on which you want to run the server you can run server on 4000 port and if you want to change that then you also have to change the port in the url present in client .env file,Dockerfile and Docker Compose file

### `docker-compose up`

Runs the app in the development mode.
backend : Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.
frontend : Open [http://localhost:3000](http://localhost:3000) to view it in the browser.