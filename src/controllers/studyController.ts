import { StudyBody } from '../types/types'
import { StudyModel, StudyDocument } from '../models/studyModel'

export const saveStudy = async (studyData: StudyBody['Body']): Promise<StudyDocument> => {
  const study = new StudyModel(studyData)
  const savedStudy = await study.save()
  return savedStudy
}
