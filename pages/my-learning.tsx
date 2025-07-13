import Layout from '@/components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CourseCard from '@/components/CourseCard';
import useSWR from 'swr';
import { Course } from '@/types/course';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function MyLearningPage() {
  const enrolledIds = useSelector((state: RootState) => state.enrollment.enrolledCourseIds);

  const shouldFetch = enrolledIds.length > 0;
  const idsQuery = shouldFetch ? `/api/courses?ids=${enrolledIds.join(',')}` : null;

  const { data, error } = useSWR(idsQuery, fetcher);

  const enrolledCourses: Course[] = data?.courses || [];

  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">My Learning</h1>
      <p className="text-center text-base text-gray-800 max-w-2xl mx-auto leading-relaxed pb-4">
        Track your enrolled courses and continue learning with us.
      </p>

      {error && <p className="text-red-500 text-sm">Failed to load courses.</p>}

      {!data && shouldFetch && <p className="text-gray-600 text-sm">Loading...</p>}

      {!shouldFetch || enrolledCourses.length === 0 ? (
        <p className="text-gray-600">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </Layout>
  );
}
