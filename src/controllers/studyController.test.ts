import test from 'tape'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { StudyBody } from '../types/types'
import { saveStudy } from '../controllers/studyController'

test('saveStudy: save study document', async (t) => {
  // Set up the in-memory MongoDB server
  const mongoServer = new MongoMemoryServer()
  const uri = await mongoServer.getUri()
  await mongoose.connect(uri)

  // Define a study document
  const studyData: StudyBody['Body'] = {
    name: 'John Doe',
    dateofbirth: '1990-01-01',
    patientid: '123456',
    studydate: '2022-01-01',
    studyid: 'abcdef',
    studyinstanceuid: '1.2.3.4.5.6',
  }

  // Save the study document using the saveStudy function
  const savedStudy = await saveStudy(studyData)

  // Check if the saved study has an _id property (created by MongoDB)
  t.ok(savedStudy._id, 'Saved study has an _id')

  // Compare the saved study data with the original study data
  t.equal(savedStudy.dateofbirth, studyData.dateofbirth, 'dateofbirth matches')

  // Clean up the in-memory MongoDB server and disconnect Mongoose
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()

  t.end()
})
