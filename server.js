import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import schema from './schema'
import context from 'context-middleware'
import middlewares from '@/middlewares'
import '@/config/db'

const GRAPHQL_PORT = 3000
const graphQLServer = express()

graphQLServer.use(context())

// .use all middlewares from the folder
Object.keys(middlewares).map(e => graphQLServer.use(middlewares[e]))

graphQLServer.use('/graphql', bodyParser.json(), cors(), graphqlExpress((req) => ({ schema, context: req.context })))
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
))
