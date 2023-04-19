import { RouteShorthandOptions } from 'fastify';

export const studyIdSchema: RouteShorthandOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['PatientBirthDate', 'PatientName', 'StudyDate'],
      properties: {
        PatientBirthDate: { type: 'string' },
        PatientName: { type: 'string' },
        StudyDate: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
};

export const studySchema: RouteShorthandOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'dateofbirth', 'patientid', 'studydate', 'studyid', 'studyinstanceuid'],
      properties: {
        name: { type: 'string' },
        dateofbirth: { type: 'string' },
        patientid: { type: 'string' },
        studydate: { type: 'string' },
        studyid: { type: 'string' },
        studyinstanceuid: { type: 'string' },
      },
    },
  },
};
