import mongoose, { Document, Schema } from 'mongoose';

export interface StudyDocument extends Document {
  name: string;
  dateofbirth: string;
  patientid: string;
  studydate: string;
  studyid: string;
  studyinstanceuid: string;
}

const studySchema = new Schema<StudyDocument>({
  name: String,
  dateofbirth: String,
  patientid: String,
  studydate: String,
  studyid: String,
  studyinstanceuid: String,
});

export const StudyModel = mongoose.model<StudyDocument>('Study', studySchema);
