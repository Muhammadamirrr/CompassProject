import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'

import { typeDefs } from './src/gql/schema'
import { resolvers } from './src/gql/resolver'

dotenv.config()

const app: Application = express()
const server = new ApolloServer({ typeDefs, resolvers })
const port: string = process.env.APP_PORT || '8080'

app.use(express.json())
app.use(cors())

async function startServer() {
    try {
        await server.start() // Start Apollo Server
        await mongoose.connect(process.env.APP_MONGO_DB_URL!)

        console.log('Connected to MongoDB')
        server.applyMiddleware({ app })
        app.listen({ port: process.env.GRAPHQL_SERVER_PORT }, () =>
            console.log(
                `Server ready at http://localhost:${process.env.GRAPHQL_SERVER_PORT}${server.graphqlPath}`,
            ),
        )
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error)
    }
}

startServer()

export { server, app }
