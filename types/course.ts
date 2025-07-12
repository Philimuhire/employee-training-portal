export interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  instructor: string;
  prerequisites: string[];
}

export interface EnrollmentState {
  enrolledCourseIds: string[];
}

export interface CourseApiResponse {
  courses: Course[];
}
