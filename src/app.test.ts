import test from 'tape'
import build from './app'
import sinon from 'sinon'
import * as studyController from './controllers/studyController'
import { FastifyInstance } from 'fastify'
import { StudyDocument } from './models/studyModel'

import { StudyBody, StudyParams } from './types/types'

const app: FastifyInstance = build()

test('POST /study/:studyId', async t => {
  t.plan(2)
  const studyParamsData: StudyParams['Body'] = {
    PatientBirthDate: '2000-01-01',
    PatientName: 'johndoe',
    StudyDate: '2022-01-01',
  }

  const response = await app.inject({
    method: 'POST',
    url: '/study/12345',
    payload: studyParamsData,
  })

  t.equal(response.statusCode, 200, 'status code should be 200')
  t.deepEqual(response.json(), { hello: 'world' }, 'should return the expected response')
  t.end()
})

test('POST /study: create and return a new study', async t => {
  // Create a mock StudyDocument
  const mockStudyDocument: Partial<StudyDocument> = {
    name: 'John Doe',
    dateofbirth: '1990-01-01',
    patientid: '123456',
    studydate: '2022-01-01',
    studyid: 'abcdef',
    studyinstanceuid: '1.2.3.4.5.6',
  }

  // Mock the saveStudy function
  const saveStudyMock = sinon.stub(studyController, 'saveStudy')
  saveStudyMock.resolves(mockStudyDocument as StudyDocument)

  // Perform an HTTP request using fastify.inject
  const response = await app.inject({
    method: 'POST',
    url: '/study',
    payload: mockStudyDocument,
  })

  // Check if the response has the correct status code and content
  t.equal(response.statusCode, 201, 'Status code is 201')
  t.same(JSON.parse(response.body), mockStudyDocument, 'Response body contains the saved study')

  // Restore the original saveStudy function
  saveStudyMock.restore()

  t.end()
})
