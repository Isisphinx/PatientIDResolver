import { RouteGenericInterface } from 'fastify'

export interface StudyParams extends RouteGenericInterface {
  Params: {
    studyId: string
  }
  Body: {
    PatientBirthDate: string
    PatientName: string
    StudyDate: string
  }
}

export interface StudyBody extends RouteGenericInterface {
  Body: {
    name: string
    dateofbirth: string
    patientid: string
    studydate: string
    studyid: string
    studyinstanceuid: string
  }
}
