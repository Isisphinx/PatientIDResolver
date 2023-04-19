import createServer from './app'
import fastifyMongoose from 'fastify-mongoose'

const server = createServer({ logger: true })

const start = async (): Promise<void> => {
  try {
    await server.register(fastifyMongoose, {
      uri: 'your_mongodb_uri_here', // Replace this with your MongoDB URI
    })
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
