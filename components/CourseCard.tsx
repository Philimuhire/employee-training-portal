import { Course } from '@/types/course';
import Link from 'next/link';

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h2>
        <p className="text-base text-gray-600 mb-3 leading-relaxed">{course.shortDescription}</p>
        <p className="text-sm text-gray-500">Duration: {course.duration}</p>
      </div>
    </Link>
  );
}