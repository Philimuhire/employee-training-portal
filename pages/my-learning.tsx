import Layout from '@/components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

export default function MyLearningPage() {
  const enrolledIds = useSelector((state: RootState) => state.enrollment.enrolledCourseIds);
  const enrolledCourses = courses.filter(course => enrolledIds.includes(course.id));

  return (
    <Layout>
      <h1 className="text-center space-y-4 text-2xl font-bold mb-6 text-gray-800" >My Learning</h1>
      <p className="text-center space-y-4 text-base text-gray-800 max-w-2xl mx-auto leading-relaxed pb-4">
        Track your enrolled courses and continue learning with us.
      </p>
      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </Layout>
  );
}
