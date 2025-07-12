import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  instructor: string;
  prerequisites: string[];
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  duration: { type: String, required: true },
  instructor: { type: String, required: true },
  prerequisites: [{ type: String }],
});

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);
