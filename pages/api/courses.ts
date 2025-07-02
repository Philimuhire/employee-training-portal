import type { NextApiRequest, NextApiResponse } from 'next';
import { Course } from '@/types/course';
import { courses } from '@/data/courses';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ courses: Course[] }>
) {
  const { search } = req.query;

  let filteredCourses = courses;

  if (search && typeof search === 'string') {
    const lowerSearch = search.toLowerCase();
    filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(lowerSearch) ||
      course.shortDescription.toLowerCase().includes(lowerSearch)
    );
  }

  res.status(200).json({ courses: filteredCourses });
}
