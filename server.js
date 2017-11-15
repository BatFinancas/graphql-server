import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import Mongoose from 'mongoose'

import context from 'context-middleware'
import middlewares from './src/middlewares'

// End schema screation

const GRAPHQL_PORT = 3000

const graphQLServer = express()

Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/views', {useMongoClient: true})
graphQLServer.use(context())

// .use all middlewares from the folder
Object.keys(middlewares).map(e => graphQLServer.use(middlewares[e]))

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress((req) => ({ schema, context: req.context })))
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
))
