import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

import { StudyParams, StudyBody } from './types/types'
import { studyIdSchema, studySchema } from './schemas/schemas'
import { saveStudy } from './controllers/studyController'

const build = (options = {}) => {
  const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(options)

  app.post<StudyParams>('/study/:studyId', studyIdSchema, async (request: FastifyRequest, reply: FastifyReply) => {
    const { studyId } = request.params as StudyParams['Params']
    const { PatientBirthDate, PatientName, StudyDate } = request.body as StudyParams['Body']

    return { hello: 'world' }
  })

  app.post<StudyBody>('/study', studySchema, async (request, reply) => {
    const studyData = request.body as StudyBody['Body']
    const savedStudy = await saveStudy(studyData)

    reply.code(201)
    return savedStudy
  })

  return app
}
export default build
